import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { UserContext } from './contexts/UserContext';
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
import Logout from './components/logout/logout';
import useLocalStorage from './hooks/useLocalStorage';

function App() {
  const [authData, setAuthData] = useLocalStorage('auth',{});
  const userLoginHandler = (resultData) => {
    setAuthData(resultData); 
  }

  const userLogoutHandler = () => {
    setAuthData({});
  }
  return (
    <UserContext.Provider value={{...authData, userLoginHandler, userLogoutHandler}}> 
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white font-sans">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path='/create' element={<CreateCar />} />
          <Route path='/cars/:carId/details' element={<CarDetails />}/>
          <Route path="/cars/:carId/edit" element={<CarEdit />} />     
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/logout" element={<Logout/>}/>
        </Routes>

        <Footer />
      </div>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
