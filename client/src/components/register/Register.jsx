import React, { useContext } from 'react';
import { useRegister } from '../../api/authApi';
import { UserContext } from '../../contexts/UserContext';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
const {register} = useRegister();
const {userLoginHandler} = useContext(UserContext);

const registerHandler = async(formData)=>{
  const {email,password} = Object.fromEntries(formData);

  const confirmPassword = formData.get('confirm-password');

  if (password !== confirmPassword) {
    alert('Passwords do not match!');
    return;
  }

  const authData = await register(email, password);

  userLoginHandler(authData);

  navigate('/');
}


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-4">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center">Create an Account</h2>

        <form className="space-y-5" action={registerHandler}>
          

          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              name='email'
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              name='password'
              placeholder="••••••••"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Confirm password</label>
            <input
              type="password"
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              name='confirm-password'
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition py-2 rounded-md font-semibold"
          >
            Register
          </button>
        </form>

        <p className="text-sm text-gray-400 text-center mt-6">
          Already have an account? <a href="/login" className="text-blue-400 hover:underline">Login here</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
