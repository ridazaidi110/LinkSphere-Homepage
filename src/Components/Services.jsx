import React from "react";
import {
  FaCloud,
  FaShieldAlt,
  FaServer,
  FaNetworkWired,
  FaBolt,
  FaMobileAlt,
} from "react-icons/fa";

const features = [
  {
    title: "Scalable Cloud Networking",
    description:
      "Scalable cloud solutions for modern enterprises to stay connected.",
    icon: <FaCloud className="text-blue-600 w-14 h-14 mx-auto mb-6" />,
  },
  {
    title: "Advanced Cybersecurity",
    description: "Protect your data with our advanced security services.",
    icon: <FaShieldAlt className="text-blue-600 w-14 h-14 mx-auto mb-6" />,
  },
  {
    title: "Robust IT Infrastructure",
    description: "Robust infrastructure tailored to your business needs.",
    icon: <FaServer className="text-blue-600 w-14 h-14 mx-auto mb-6" />,
  },
  {
    title: "High-Speed Networking",
    description:
      "Experience lightning-fast connectivity with our optimized networks.",
    icon: <FaBolt className="text-blue-600 w-14 h-14 mx-auto mb-6" />,
  },
  {
    title: "Reliable Network Management",
    description: "Expert management for seamless network operations.",
    icon: <FaNetworkWired className="text-blue-600 w-14 h-14 mx-auto mb-6" />,
  },
  {
    title: "Mobile Connectivity Solutions",
    description:
      "Stay connected on the go with our mobile-friendly services.",
    icon: <FaMobileAlt className="text-blue-600 w-14 h-14 mx-auto mb-6" />,
  },
];

function Features() {
  return (
    <section className="py-24 px-6 md:px-24 bg-gray-50 text-center">
      <h3 className="text-4xl font-bold mb-16 text-gray-900">
        Our Expertise, Your Advantage
      </h3>
      <div className="flex flex-wrap justify-center gap-10">
        {features.map(({ title, description, icon }) => (
          <div
            key={title}
            className="flex flex-col justify-between p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 w-[320px] h-[280px] border border-gray-200"
          >
            <div>{icon}</div>
            <div>
              <h4 className="text-xl font-semibold mb-2 text-gray-800">
                {title}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
