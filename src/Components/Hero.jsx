import React from "react";

function Hero() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80')", // thoda subtle tech background
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="relative z-10 px-6 md:px-12 py-24 flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Left   */}
        <div className="md:w-1/2 text-center md:text-left animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 animate-slideUp">
            Empowering Tomorrow’s Connectivity, Today.
          </h2>
          <p className="text-gray-200 text-base md:text-lg max-w-xl animate-fadeIn delay-200">
            LinkSphere delivers innovative networking solutions and cloud
            infrastructure to help businesses stay agile, secure, and connected
            in an ever-evolving digital world.
          </p>
          <div className="mt-8 flex justify-center md:justify-start gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all font-semibold shadow-md">
              Get Started Now
            </button>
            <button className="border border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-blue-600 transition-all font-semibold">
              Discover More
            </button>
          </div>
        </div>

        {/* Right  */}
        <div className="md:w-1/2 animate-slideUp">
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
            alt="network illustration"
            className="rounded-xl shadow-2xl w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
