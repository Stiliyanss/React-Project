import { useContext } from "react";
import request from "../utils/request";
import { UserContext } from "../contexts/UserContext";
const baseUrl = "http://localhost:3030/data/cars";

export default {
  create(carData) {
  return request.post(baseUrl, carData);
 },
 async getAll() {
  const result = await request.get(baseUrl);
  const cars = Object.values(result);
  return cars; 
 },
 getOne(carId){
  return request.get(`${baseUrl}/${carId}`);
 },
 delete(carId){
  return request.delete(`${baseUrl}/${carId}`);
 },
 edit(carId, carData){
  return request.put(`${baseUrl}/${carId}`, {...carData, _id: carId});
 }
};

export const useCreateCar = ()=>{
  const {accessToken} = useContext(UserContext);
const options = {
    headers: {
      'X-Authorization': accessToken,
    }
  };


  const create = (carData) => {
    return request.post(baseUrl, carData, options);
  }
  return{
    create,  
  }
}