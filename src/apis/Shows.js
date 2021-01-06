import Api from "./Api";
const END_POINT = "shows";
const SHOW_DETAILS = "?embed[]=seasons&embed[]=cast&embed[]=crew";
export default {
  all() {
    return Api.get(END_POINT);
  },
  showDetails(showId) {
    return Api.get(END_POINT + "/" + showId + SHOW_DETAILS);
  }
};
