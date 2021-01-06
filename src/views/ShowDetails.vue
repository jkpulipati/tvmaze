<template>
  <div>
    <v-card class="mx-auto my-12" max-width="374">
      <template slot="progress">
        <v-progress-linear
          color="deep-purple"
          height="10"
          indeterminate
        ></v-progress-linear>
      </template>

      <v-img height="250" :src="showInfo.image.medium"></v-img>

      <v-card-title>{{ showInfo.name }}</v-card-title>

      <v-card-text>
        <v-row align="center" class="mx-0">
          <v-rating
            :value="showInfo.rating.average"
            color="amber"
            dense
            half-increments
            readonly
            size="14"
          ></v-rating>

          <div class="grey--text ml-4">
            {{ showInfo.rating.average }} ({{ showInfo.runtime }})
          </div>
        </v-row>

        <div class="my-4 subtitle-1">
          {{ showInfo.language }}
        </div>

        <div v-html="showInfo.summary">
        </div>
      </v-card-text>
    </v-card>
    <h3>Crew Details</h3>
    <v-row>
      <v-col
        v-for="(crewMember, i) in crewMembers"
        :key="i"
        class="d-flex child-flex"
        cols="4"
      >
        <v-img
          :src="crewMember.person.image.medium"
          :lazy-src="crewMember.person.image.medium"
          aspect-ratio="1"
          class="grey lighten-2"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
    </v-row>
    <h3>Cast Details</h3>
    <v-row>
      <v-col
        v-for="(castMember, i) in castMembers"
        :key="i"
        class="d-flex child-flex"
        cols="4"
      >
        <v-img
          :src="castMember.person.image.medium"
          :lazy-src="castMember.person.image.medium"
          aspect-ratio="1"
          class="grey lighten-2"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import Shows from "@/apis/Shows.js";
export default {
  name: "ShowDetails",
  data() {
    return {
      crewMembers: [],
      castMembers: [],
      showInfo: {}
    };
  },
  props: {
    id: Number
  },
  methods: {
    async getShowInformation(showId) {
      console.log("showid is,", showId);
      const showInfo = await Shows.showDetails(showId);
      console.log(this.showInfo);
      if (showInfo) {
        this.showInfo = showInfo.data;
        this.crewMembers = showInfo.data._embedded.crew.filter(
          _obj => _obj.person.image
        );
        this.castMembers = showInfo.data._embedded.cast.filter(
          _obj => _obj.person.image
        );
      }
    }
  },
  mounted() {
    console.log("showid is,", this.id);
    this.getShowInformation(this.id);
  }
};
</script>
