import React from "react";

const testimonials = [
  {
    name: "Ravi Mehra",
    role: "CTO, TechNova Inc.",
    feedback:
      "LinkSphere transformed our infrastructure with their secure cloud and networking solutions. Their team is incredibly responsive and reliable.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Sara Khan",
    role: "CEO, NexaSoft",
    feedback:
      "We’ve seen a 40% boost in performance since migrating to LinkSphere’s cloud system. Their attention to detail is unmatched.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Amit Raj",
    role: "IT Head, FusionWorks",
    feedback:
      "Reliable, fast, and secure. LinkSphere delivers what they promise. We’re glad to have them as our tech partner.",
    image: "https://randomuser.me/api/portraits/men/54.jpg",
  },
];

function Testimonials() {
  return (
    <section id="testimonials" className="bg-gray-50 py-20 px-6 md:px-20">
      <h2 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">
        What Our Clients Say
      </h2>
      <div className="flex flex-wrap justify-center gap-10">
        {testimonials.map(({ name, role, feedback, image }) => (
          <div
            key={name}
            className="bg-white rounded-2xl shadow-lg p-8 max-w-sm w-full text-center border hover:shadow-xl transition-all"
          >
            <img
              src={image}
              alt={name}
              className="w-20 h-20 mx-auto rounded-full mb-4 object-cover"
            />
            <p className="text-gray-600 text-base italic mb-4">“{feedback}”</p>
            <h4 className="text-lg font-semibold text-gray-900">{name}</h4>
            <span className="text-sm text-blue-600">{role}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
