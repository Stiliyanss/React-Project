import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import Home from './components/home/Home';
import About from './components/about/About';
import Catalog from './components/catalog/Catalog';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Contact from './components/contact/Contact';
import CreateCar from './components/createCar/CreateCar';
import CarDetails from './components/carDeatails/CarDetails';
import CarEdit from './components/carEdit/CarEdit';

function App() {
  const [email, setEmail] = useState('');
  const userLoginHandler = (email) => {
    setEmail(email);
  }
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white font-sans">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path='/create' element={<CreateCar />} />
          <Route path='/cars/:carId/details' element={<CarDetails email={email} />}/>
          <Route path="/cars/:carId/edit" element={<CarEdit />} />     
          <Route path="/login" element={<Login onLogin={userLoginHandler}/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
