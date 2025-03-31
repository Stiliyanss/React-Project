import  { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import carService from '../../services/carService';

const CarDetails = () => {
  const [car, setCar] = useState({});
  const {carId} = useParams();

  useEffect(() => {
    (async () => {
      const result = await carService.getOne(carId);
      setCar(result);
    })(); 
  },[carId]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-6 md:px-20 py-24">
      <div className="max-w-3xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
        <img
          src="https://images.unsplash.com/photo-1606813901415-63cd65ff0f1c?auto=format&fit=crop&w=800&q=80"
          alt="Car"
          className="w-full h-64 object-cover rounded-md mb-8"
        />

        <h1 className="text-3xl font-bold mb-4">{car.brand} {car.model}</h1>

        <ul className="space-y-2 text-gray-300 text-sm mb-8">
          <li><span className="text-white font-semibold">Brand:</span>{car.brand}</li>
          <li><span className="text-white font-semibold">Model:</span> {car.model}</li>
          <li><span className="text-white font-semibold">Horsepower:</span> {car.horsepower}</li>
          <li><span className="text-white font-semibold">Year:</span> {car.year}</li>
          <li><span className="text-white font-semibold">Description:</span> {car.description}</li>
        </ul>

        <div className="flex justify-end space-x-4">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-4 py-2 rounded transition">
            Edit
          </button>
          <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded transition">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
