import request  from "../utils/request";

export function getlist(){
    return request({
        url:"api/getNewList",
        method:"post"
    })
}
