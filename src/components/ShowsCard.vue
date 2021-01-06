<template>
  <v-card color="grey lighten-1" class="ma-4" height="240" width="186">
    <v-img
      :src="show.image.medium"
      @click="navigateToShowDetails(show)"
    ></v-img>
  </v-card>
</template>
<script>
export default {
  name: "ShowsCard",
  props: {
    show: Object
  },
  methods: {
    navigateToShowDetails(show) {
      console.log(show, this.$router.push);
      this.$router.push({ name: "ShowDetails", params: { id: show.id } });
    }
  }
};
</script>
