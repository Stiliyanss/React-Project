import { useNavigate } from "react-router-dom";
import { useCreateCar } from "../../api/carApi";

const CreateCar = () => {
  const navigate = useNavigate();
  const {create} = useCreateCar();

  const submitAction =async(formData) => {
    const carData = Object.fromEntries(formData);

    await create(carData);

    navigate("/catalog");
    
  }
 

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-6 md:px-20 py-24">
      <div className="max-w-xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          Create New Car
        </h1>

        <form className="space-y-6" action={submitAction}>
          <div>
            <label className="block mb-1 text-sm">Brand</label>
            <input
              type="text"
              name="brand"
              id="brand"
              className="w-full px-4 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter car brand..."
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm">Model</label>
            <input
              type="text"
              name="model"
              id="model"
              className="w-full px-4 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter car model..."
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm">Horsepower</label>
            <input
              type="number"
              name="horsepower"
              id="horsepower"
              className="w-full px-4 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter horsepower..."
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm">Year</label>
            <input
              type="number"
              name="year"
              id="year"
              className="w-full px-4 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter year..."
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm">Description</label>
            <textarea
              name="description"
              id="description"
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
