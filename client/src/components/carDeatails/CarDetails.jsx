import  {  useEffect,useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import CommentsShow from '../commentsShow/CommentsShow';
import CommentsCreate from '../commentsCreate/CommentsCreate';
import commentService from '../../services/commentService';
import { useCar, useDeleteCar } from '../../api/carApi';
import useAuth from '../../hooks/useAuth';

const CarDetails = () => {
  const navigate = useNavigate();
  const {email, _id: userId} = useAuth();
  const [comments, setComments]= useState([]);
  const {carId} = useParams();
  const {car} = useCar(carId);
  const {deleteCar} = useDeleteCar();

  useEffect(() => {  
      commentService.getAll(carId)
      .then(setComments)
  },[carId]);

  const carDeleteHandler = async () => {
    const hasConfirm = confirm(`Are you sure you want to delete ${car.brand} ${car.model} car?`);
    if(!hasConfirm){
      return;
    }

    await deleteCar(carId);
    navigate('/catalog');
  };

  const commentCreateHandler =  (newComment) => { 
    setComments(state=> [...state, newComment]);
  }

  const isOwner = userId === car._ownerId;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-6 md:px-20 py-24">
      <div className="max-w-3xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
        <img
          src={car.imageUrl}
          alt="Car"
          className="w-full h-64 object-cover rounded-md mb-8"
        />

        <h1 className="text-3xl font-bold mb-4">{car.brand} {car.model }</h1>

        <ul className="space-y-2 text-gray-300 text-sm mb-8">
          <li><span className="text-white font-semibold">Brand:</span>{car.brand}</li>
          <li><span className="text-white font-semibold">Model:</span> {car.model}</li>
          <li><span className="text-white font-semibold">Horsepower:</span> {car.horsepower}</li>
          <li><span className="text-white font-semibold">Year:</span> {car.year}</li>
          <li><span className="text-white font-semibold">Description:</span> {car.description}</li>
        </ul>
        <div className='mb-6'>
        <CommentsShow comments={comments} />
        </div>  
    {isOwner &&(
       <div className="flex justify-end space-x-4">
          <Link to={`/cars/${carId}/edit`} className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-4 py-2 rounded transition">
            Edit
          </Link>
          <button 
          onClick={carDeleteHandler}
          className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded transition">
            Delete
          </button>
        </div>)}
        
      </div>
      <CommentsCreate email={email} carId={carId} onCreate={commentCreateHandler}/>
    </div>
  );
};

export default CarDetails;
