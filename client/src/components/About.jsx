import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white font-sans px-6 md:px-20 py-24">
      <div className="max-w-5xl mx-auto text-center">
        {/* Title */}
        <h1 className="text-5xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          About AutoX
        </h1>

        {/* Intro */}
        <p className="text-lg text-gray-300 leading-relaxed mb-10">
          AutoX isn’t just a car brand — it’s a revolution in motion. A design philosophy forged by innovation,
          minimalism, and raw power. Our mission: redefine what driving means in the modern world.
        </p>

        {/* Vision / Values Section */}
        <div className="grid md:grid-cols-3 gap-10 mt-20 text-left">
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">⚙️ Engineering Precision</h3>
            <p className="text-gray-400 text-sm">
              Every AutoX model is built on a foundation of technical mastery — because excellence lives in the details.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">♻️ Sustainable Innovation</h3>
            <p className="text-gray-400 text-sm">
              We drive toward a future where power and planet co-exist, with electric lines and lightweight materials.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">🧠 Human-Centered Design</h3>
            <p className="text-gray-400 text-sm">
              Inside and out, every element is crafted to elevate both performance and user experience.
            </p>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-white mb-8">🚘 Our Journey</h2>
          <div className="space-y-8 border-l border-gray-700 pl-6">
            <div>
              <h4 className="text-white font-semibold">2015 — The Vision Begins</h4>
              <p className="text-sm text-gray-400">AutoX is born from a garage dream — to make cars that feel like tech-powered art.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold">2018 — First Launch</h4>
              <p className="text-sm text-gray-400">We debut the AX-One, a minimalist coupe with electric guts and futuristic curves.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold">2022 — Global Impact</h4>
              <p className="text-sm text-gray-400">AutoX is now in 14 countries, with growing recognition for innovation and performance.</p>
            </div>
          </div>
        </div>

        {/* Team Teaser */}
        <div className="mt-28">
          <h2 className="text-3xl font-bold mb-6">🧑‍💻 Meet the People Behind the Machines</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            From visionary designers to expert engineers — we’re a crew obsessed with motion, beauty, and balance.
            Want to know more? Our team page is coming soon.
          </p>
        </div>

        {/* Quote */}
        <p className="text-sm text-gray-500 mt-16 italic">
          "We don’t follow trends — we drive them."
        </p>
      </div>
    </div>
  );
};

export default About;
