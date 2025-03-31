const baseUrl = "http://localhost:3030/jsonstore/cars";

export default {
 async create(carData){
    const response = await fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(carData)
    });
    const result = await response.json();
    return result;
  }
}