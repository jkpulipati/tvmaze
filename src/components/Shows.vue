<template>
  <div>
    From Shows component
  </div>
</template>
<script>
import Shows from "@/apis/Shows.js";
export default {
  name: "Shows",
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
        console.log(allTvShows, uniqueGenres, this.popularShows);
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
