import React, { useState, useEffect } from 'react';
import './style.css'; // Import the custom CSS file

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the timeout duration as needed

    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-black to-blue-900">
          <div className="text-white text-center">
            <div className="rotating-loader mx-auto mb-4"></div>
            <div className="loading-text">
              <span>Loading</span>
              <span>.</span>
              <span>.</span>
              <span>.</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-gradient-to-r from-black to-blue-900">
          <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <header className="relative flex-grow bg-gradient-to-r from-black to-blue-900 text-white py-16 text-center bg-cover bg-center lg:h-screen xl:h-[90vh]">
              <div
                className="absolute inset-0 bg-cover bg-center filter blur-sm"
                style={{ backgroundImage: "url('/bgcomputer.jpg')" }}
              ></div>
              <div className="relative z-10 lg:flex lg:items-center lg:justify-center lg:h-full">
                <div className="text-center">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold">
                    Welcome to Al Smow Businessmen Services
                  </h1>
                  <p className="mt-4 text-xl md:text-2xl lg:text-3xl">
                    Your trusted partner in Dubai for all Amer & Company Services
                  </p>
                  <a
                    href="/services"
                    className="mt-8 inline-block bg-white text-blue-600 font-semibold py-3 px-6 rounded-md shadow-md hover:bg-blue-50"
                  >
                    Discover Our Services
                  </a>
                </div>
              </div>
            </header>

            {/* About Section */}
            <section className="bg-gradient-to-r from-black to-blue-900 py-16 lg:py-24">
              <div className="max-w-screen-lg mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">About Us</h2>
                <p className="mt-6 text-lg md:text-xl lg:text-2xl text-white">
                  At Al Smow Busineemen Services, we are committed to providing top-notch services tailored to meet your business and personal needs.
                  Our expertise in Dubai Amer and Company services ensures that you receive the best support in a timely and efficient manner.
                </p>
              </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="bg-gradient-to-r from-black to-blue-900 py-16 lg:py-24">
              <div className="max-w-screen-lg mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">Why Choose Us?</h2>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold text-blue-600 mb-4">Expertise</h3>
                    <p className="text-gray-600">
                      Our team has extensive knowledge and experience in Dubai’s business landscape, ensuring that your needs are met with precision and care.
                    </p>
                  </div>
                  <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold text-blue-600 mb-4">Reliability</h3>
                    <p className="text-gray-600">
                      We pride ourselves on being a reliable partner, providing consistent and trustworthy services that you can depend on.
                    </p>
                  </div>
                  <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold text-blue-600 mb-4">Comprehensive Support</h3>
                    <p className="text-gray-600">
                      From start to finish, we offer a wide range of services that cover all aspects of your business needs, making us a one-stop solution.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact Form Section */}
            <section className="bg-gradient-to-r from-black to-blue-900 text-white py-16 lg:py-24">
              <div className="max-w-screen-lg mx-auto px-4">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center">Get in Touch</h2>
                <p className="mt-4 text-lg md:text-xl lg:text-2xl text-center">
                  Ready to take the next step? Fill out the form below, and we’ll get back to you as soon as possible.
                </p>
                <form className="mt-8 space-y-4 max-w-md mx-auto">
                  <div>
                    <label htmlFor="name" className="block text-lg md:text-xl lg:text-2xl">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-2 text-gray-900 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-lg md:text-xl lg:text-2xl">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 text-gray-900 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                      placeholder="Your Email"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-lg md:text-xl lg:text-2xl">Message</label>
                    <textarea 
                      id="message" 
                      className="w-full px-4 py-2 text-gray-900 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300" 
                      rows="4" 
                      placeholder="Your Message"
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full bg-white text-blue-600 font-semibold py-3 px-6 rounded-md shadow-md hover:bg-blue-50"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </section>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
