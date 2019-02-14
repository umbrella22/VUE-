import request from "../utils/request";

export default {
  getlist() {
    return request({
      url: "api/getNewList",
      method: "post"
    })
  },
  getdata(){
    return request({
      url:'api/get_all_arms',
      method:'post'
    })
  }
}
