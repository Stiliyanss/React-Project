import React, { useState } from 'react';

const CreateCar = () => {
  const [carData, setCarData] = useState({
    brand: '',
    model: '',
    horsepower: '',
    year: '',
    description: ''
  });

  const handleChange = (e) => {
    setCarData({
      ...carData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Car created:', carData);
    // Here you would send data to a backend or update local state
    setCarData({ brand: '', model: '', horsepower: '', year: '', description: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-6 md:px-20 py-24">
      <div className="max-w-xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          Create New Car
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-1 text-sm">Brand</label>
            <input
              type="text"
              name="brand"
              value={carData.brand}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., AutoX"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm">Model</label>
            <input
              type="text"
              name="model"
              value={carData.model}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., Volt-X"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm">Horsepower</label>
            <input
              type="number"
              name="horsepower"
              value={carData.horsepower}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., 420"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm">Year</label>
            <input
              type="number"
              name="year"
              value={carData.year}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., 2023"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm">Description</label>
            <textarea
              name="description"
              value={carData.description}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write a short description..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded font-semibold"
          >
            Create Car
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateCar;
