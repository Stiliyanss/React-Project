import { useContext, useEffect, useState } from "react";
import request from "../utils/request";
import { UserContext } from "../contexts/UserContext";
const baseUrl = "http://localhost:3030/data/cars";

export default {
  
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

export const useCars=()=>{
  const [cars, setCars] = useState([]);

  useEffect(() => {
    request.get(baseUrl).then(setCars)
  }, []);

  return {
    cars,
  };
}

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

export const useCar=(carId)=>{
  const [car, setCar] = useState({});

  useEffect(()=>{
    request.get(`${baseUrl}/${carId}`).then(setCar)
  }, [carId]);
  
  return {
    car,
  };

}