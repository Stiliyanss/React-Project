import request from "../utils/request";
const baseUrl = "http://localhost:3030/jsonstore/cars";

export default {
  create(carData) {
  return request.post(baseUrl, carData);
 },
 async getAll() {
  const result = await request.get(baseUrl);
  const games = Object.values(result);
  return games; 
 }
}