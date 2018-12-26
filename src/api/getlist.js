import request from "../utils/request";

export default {
  getlist() {
    return request({
      url: "api/getNewList",
      method: "post"
    })
  }
}
