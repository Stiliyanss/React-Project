import React from 'react';

const Main = () => {
  return (
    <div className="relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1603386329225-868f9b1ee6a1?auto=format&fit=crop&w=1470&q=80')`,
          filter: 'brightness(0.3)'
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center text-center px-6 md:px-20 py-32">
          <h2 className="text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 drop-shadow-lg mb-6">
            Elevate the Drive
          </h2>
          <p className="text-lg md:text-2xl text-gray-300 max-w-2xl mb-10 leading-relaxed">
            Welcome to AutoX — a space where innovation meets motion. Discover the design, the power, and the future of mobility. One word at a time.
          </p>
          <a href="/catalog">
            <button className="mt-4 px-6 py-3 rounded-lg bg-white text-black font-semibold tracking-wide hover:bg-gray-200 transition">
              Explore Our Catalog →
            </button>
          </a>
        </section>

        {/* Tagline Section */}
        <section className="py-16 px-6 md:px-20 text-center border-t border-gray-700 bg-black/70">
          <h3 className="text-3xl font-semibold mb-4 text-gray-100">Minimal. Powerful. Timeless.</h3>
          <p className="text-gray-400 max-w-xl mx-auto">
            We don’t just build cars. We craft stories made of steel, speed, and soul.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Main;
