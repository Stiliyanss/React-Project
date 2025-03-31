import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import carService from "../../services/carService";

export default function CarEdit() {
  const navigate = useNavigate();
const {carId} = useParams();
const [car, setCar] = useState({}); 

useEffect(() => {
  carService.getOne(carId)
  .then(setCar); 
},[carId]);

    return(
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-6 md:px-20 py-24">
      <div className="max-w-xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          Edit Car
        </h1>

        <form className="space-y-6">
          <div>
            <label className="block mb-1 text-sm">Brand</label>
            <input
              type="text"
              name="brand"
              className="w-full px-4 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              defaultValue={car.brand}
            />
          </div>

          <div>
            <label className="block mb-1 text-sm">Model</label>
            <input
              type="text"
              name="model"
              className="w-full px-4 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              defaultValue={car.model}
            />
          </div>

          <div>
            <label className="block mb-1 text-sm">Horsepower</label>
            <input
              type="number"
              name="horsepower"
              className="w-full px-4 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              defaultValue={car.horsepower}
            />
          </div>

          <div>
            <label className="block mb-1 text-sm">Year</label>
            <input
              type="number"
              name="year"
              className="w-full px-4 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              defaultValue={car.year}
            />
          </div>

          <div>
            <label className="block mb-1 text-sm">Description</label>
            <textarea
              name="description"
              rows="4"
              className="w-full px-4 py-2 bg-gray-700 text-white rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              defaultValue={car.description}
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded font-semibold"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
    );
}