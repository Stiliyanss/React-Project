
import CarCatalogItem from './car-catalog-item/CarCatalogItem';
import { useCars } from '../../api/carApi';

const Catalog = () => {
const {cars} = useCars();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-6 md:px-20 py-20">
      <h1 className="text-4xl font-extrabold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
        AutoX Catalog
      </h1>

      <div className="grid gap-10 md:grid-cols-3">
        {cars.length > 0 ? 
        cars.map(car => <CarCatalogItem key={car._id} {...car}/>) :
        (<div className="flex flex-col items-center justify-center h-[60vh] text-center">
            <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-500">
              No Cars Available
            </h3>
            <p className="text-gray-500 mt-4 text-lg">
              Please check back later or create a new listing.
            </p>
          </div>)}
      </div>
    </div>
  );
};

export default Catalog;
