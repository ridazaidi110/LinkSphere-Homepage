import React from "react";

function Contact() {
  return (
    <section id="contact" className="bg-gray-50 py-20 px-6 md:px-20">
      <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
        Get in Touch
      </h2>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        {/* Contact  */}
        <div className="md:w-1/2 bg-white rounded-xl shadow-lg p-10 flex flex-col justify-center space-y-6">
          <h3 className="text-2xl font-semibold text-blue-600">Contact Info</h3>
          <p className="text-gray-700">
            Have questions or want to work with us? Reach out!
          </p>
          <div className="space-y-4 text-gray-700">
            <div>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:contact@linksphere.com"
                className="text-blue-600 hover:underline"
              >
                contact@linksphere.com
              </a>
            </div>
            <div>
              <strong>Phone:</strong>{" "}
              <a
                href="tel:+1234567890"
                className="text-blue-600 hover:underline"
              >
                +1 (234) 567-890
              </a>
            </div>
            <div>
              <strong>Address:</strong> 123 Networking Blvd, Tech City, USA
            </div>
          </div>
        </div>

        {/*  Form */}
        <form
          className="md:w-1/2 bg-white rounded-xl shadow-lg p-10 space-y-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <div>
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              required
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              placeholder="your.email@example.com"
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-gray-700 font-medium mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              required
              rows="4"
              placeholder="Write your message..."
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 transition resize-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-full font-semibold hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
