import React from "react";

function About() {
  return (
    <section id="about" className="bg-white py-20 px-6 md:px-20">
      <div className="flex flex-col-reverse md:flex-row items-center gap-12">
        {/*  Content */}
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            About LinkSphere
          </h2>
          <p className="text-gray-700 text-base leading-relaxed mb-4">
            LinkSphere is a modern networking solutions company delivering
            top-tier cloud, cybersecurity, and infrastructure services. Our
            mission is to help businesses stay connected, scalable, and secure
            in a rapidly evolving tech landscape.
          </p>
          <p className="text-gray-700 text-base leading-relaxed mb-4">
            We specialize in designing and maintaining high-speed networks,
            cloud migration services, and managed security solutions to empower
            digital growth for businesses of all sizes.
          </p>
          <p className="text-gray-700 text-base leading-relaxed mb-6">
            With a client-first approach and a commitment to innovation,
            LinkSphere ensures your systems run smoothly while you focus on
            growth and innovation.
          </p>

          {/* Learn More Button */}
          <button className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition font-semibold shadow-md">
            Learn More About Us
          </button>
        </div>

        {/* Image  */}
        <div className="md:w-1/2">
          <img
            src="https://media.istockphoto.com/id/1992282561/photo/digital-cloud-technology-in-your-hand-male-hand-holding-futuristic-cloud-chip-in-the-center.jpg?s=612x612&w=0&k=20&c=T1Zs8Z4M3ASbiWl3fi4S-ZS_Sd1xaCLU431rYMuKh78="
            alt="Professional Networking"
            className="w-full h-auto rounded-xl shadow-md object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
