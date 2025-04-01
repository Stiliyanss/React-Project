import React, {  useActionState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useLogin } from '../../api/authApi';

const Login = ({
  onLogin,
}) => {

  const navigate = useNavigate();
  const { login } = useLogin();

   const loginHandler = async(_ , formData) => {
    const values = Object.fromEntries(formData);
    
    const authData = await login(values.email, values.password);
    
    onLogin(authData);

    navigate('/catalog');
  }
  const [_, loginAction, isPending] = useActionState(loginHandler, {email: '', password: ''});


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-4">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center">Login to AutoX</h2>

        <form className="space-y-5" action={loginAction}>
          <div>
            <label className="block text-sm mb-1">Email:</label>
            <input
              type="email"
              name='email'
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Password:</label>
            <input
              type="password"
              name='password'
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition py-2 rounded-md font-semibold"
            disabled={isPending}
          >
            Login
          </button>
        </form>

        <p className="text-sm text-gray-400 text-center mt-6">
          Don't have an account? <Link to="/register" className="text-blue-400 hover:underline">Register here</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
