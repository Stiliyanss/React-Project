import request from "../utils/request";
const baseUrl = "http://localhost:3030/jsonstore/comments";

export default {
create(email, carId, comment){
  return request.post(baseUrl, {email, carId, comment});
},
async getAll(carId){
  const comments= await request.get(baseUrl);  

  const carComments = Object.values(comments).filter(x => x.carId === carId);
  return carComments;
}
};
