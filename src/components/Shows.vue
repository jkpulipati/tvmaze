<template>
  <div>
    <v-carousel hide-delimiters>
      <v-carousel-item
        v-for="(popularShow, i) in popularShows"
        :key="i"
        :src="popularShow.image.medium"
      ></v-carousel-item>
    </v-carousel>
    <v-sheet
      class="mx-auto"
      elevation="8"
      v-for="(generShow, i) in allTvShowsByGeneres"
      :key="i"
    >
      <div>{{ generShow.name }}</div>
      <v-slide-group class="pa-4" center-active show-arrows>
        <v-slide-item v-for="(show, i) in generShow.list" :key="i">
          <shows-card :show="show"></shows-card>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
  </div>
</template>
<script>
import Shows from "@/apis/Shows.js";
import ShowsCard from "@/components/ShowsCard.vue";
export default {
  name: "Shows",
  components: {
    ShowsCard
  },
  data() {
    return {
      popularRating: 9,
      allTvShowsByGeneres: [],
      popularShows: []
    };
  },
  methods: {
    async getTvShows() {
      console.log("from get tv shows method");
      const allTvShows = await Shows.all();
      if (allTvShows) {
        this.popularShows = this.getPopularShows(allTvShows.data);
        const uniqueGenres = this.getUniqueGenres(allTvShows.data);
        this.allTvShowsByGeneres = this.groupByUniqueGenres(
          uniqueGenres,
          allTvShows.data
        );
        console.log(
          allTvShows,
          uniqueGenres,
          this.popularShows,
          this.allTvShowsByGeneres
        );
      }
    },
    getUniqueGenres(allShows) {
      return allShows.reduce((acc, res) => {
        acc = [...acc, ...res.genres];
        return [...new Set(acc)].sort();
      }, []);
    },
    getPopularShows(allShows) {
      return allShows.filter(show => show.rating.average > this.popularRating);
    },
    groupByUniqueGenres(genres, shows) {
      return genres.reduce((res, genre) => {
        const list = shows
          .filter(show => show.genres.indexOf(genre) !== -1)
          .sort((show1, show2) => show2.rating.average - show1.rating.average);
        const newGenre = { name: `${genre}`, list };
        res = [...res, newGenre];
        return res;
      }, []);
    }
  },
  mounted() {
    console.log("component instace is crated");
    this.getTvShows();
  }
};
</script>
