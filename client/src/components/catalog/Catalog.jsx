import React, { useEffect, useState } from 'react';
import carService from '../../services/carService';

const Catalog = () => {
const [cars, setCars] = useState([]);

    useEffect(() => {
        carService.getAll()
        .then(setCars)
    },[]);
    console.log(cars);
    
  const carss = [
    {
      id: 1,
      brand: 'AutoX',
      model: 'AX-One',
      horsepower: 320,
      year: 2021,
      description: 'A minimalist coupe with futuristic design and electric performance.',
      image: 'https://images.unsplash.com/photo-1606813901415-63cd65ff0f1c?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      brand: 'AutoX',
      model: 'Volt-X',
      horsepower: 410,
      year: 2023,
      description: 'Luxury meets sustainability. Volt-X is fully electric with over 500km range.',
      image: 'https://images.unsplash.com/photo-1621996346565-022b9be8d111?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      brand: 'AutoX',
      model: 'RoadBlazer',
      horsepower: 450,
      year: 2022,
      description: 'Power and elegance combined into a sport SUV built for thrill and comfort.',
      image: 'https://images.unsplash.com/photo-1549921296-3a41053a600b?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-6 md:px-20 py-20">
      <h1 className="text-4xl font-extrabold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
        AutoX Catalog
      </h1>

      <div className="grid gap-10 md:grid-cols-3">
        {carss.map((car) => (
          <div key={car.id} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <img src={car.image} alt={car.model} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">{car.brand} {car.model}</h2>
              <p className="text-gray-400 text-sm mb-1">Horsepower: {car.horsepower} HP</p>
              <p className="text-gray-400 text-sm mb-1">Year: {car.year}</p>
              <p className="text-gray-500 text-sm mt-3">{car.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
