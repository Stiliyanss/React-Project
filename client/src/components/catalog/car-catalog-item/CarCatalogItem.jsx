import React from 'react';
import { Link } from 'react-router-dom';

export default function CarCatalogItem({
  brand,
  model,
  horsepower,
  year,
  description,
  _id
}) {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
      <img
        src="https://images.unsplash.com/photo-1606813901415-63cd65ff0f1c?auto=format&fit=crop&w=800&q=80"
        alt={model}
        className="w-full h-48 object-cover"
      />

      <div className="p-6 flex-grow">
        <h2 className="text-xl font-bold mb-2">
          {brand} {model}
        </h2>
        <p className="text-gray-400 text-sm mb-1">
          Horsepower: {horsepower} HP
        </p>
        <p className="text-gray-400 text-sm mb-1">Year: {year}</p>
        {/* <p className="text-gray-500 text-sm mt-3">{description}</p> */}
      </div>

      <div className="px-6 pb-4">
        <Link
          to={`/cars/${_id}/details`}
          className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black text-sm font-semibold px-4 py-2 rounded transition"
        >
          Details
        </Link>
      </div>
    </div>
  );
}
