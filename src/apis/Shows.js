import Api from "./Api";
const END_POINT = "shows";
export default {
  all() {
    return Api.get(END_POINT);
  }
};
