import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-6 md:px-20 py-24 font-sans">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h1 className="text-5xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          Contact AutoX
        </h1>

        {/* Info Cards */}
        <div className="grid gap-10 md:grid-cols-2 text-gray-300">
          {/* Phone */}
          <div className="bg-gray-800 bg-opacity-60 rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300">
            <h2 className="text-xl font-bold text-white mb-2">📞 Phone Support</h2>
            <p className="text-blue-400 font-semibold mb-1">0884 097 838</p>
            <p className="text-sm text-gray-400">Mon – Fri: 09:00 – 18:00</p>
            <p className="text-sm text-gray-500 mt-1">Weekends & holidays: please use email support</p>
          </div>

          {/* Email */}
          <div className="bg-gray-800 bg-opacity-60 rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300">
            <h2 className="text-xl font-bold text-white mb-2">📧 Email Support</h2>
            <p className="text-blue-400 font-semibold">
              <a href="mailto:support@autox.com" className="hover:underline">autoxgroup@autox.com</a>
            </p>
            <p className="text-sm text-gray-500 mt-2">
              We usually respond within 24–48 hours. Please include your vehicle details for faster assistance.
            </p>
          </div>
        </div>

        {/* Tip */}
        <div className="mt-16 bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-inner text-sm text-gray-400 border border-gray-700">
          <p className="font-semibold text-white mb-1">💡 Tip:</p>
          <p>
            To help us assist you more efficiently, please have your vehicle’s identification number (VIN)
            ready during a phone call or include it in your email.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
