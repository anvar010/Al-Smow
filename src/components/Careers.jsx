import React, { useState } from 'react';

const Career = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the form submission here, e.g., sending the email to your server
    setSubmitted(true);
  };

  return (
    <div className="bg-gradient-to-r from-black to-blue-900 text-white min-h-screen flex flex-col">
      <header className="py-8 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-6">
          Careers at Al Smow Busineemen Services
        </h1>
      </header>
      <div className="flex-grow flex items-center justify-center">
        <div className="max-w-screen-lg mx-auto px-4 text-center">
          <p className="text-lg md:text-xl font-semibold mb-4">
            Thank you for your interest in joining our team.
          </p>
          <p className="text-base md:text-lg mb-6">
            Currently, we do not have any open positions. Please check back later for future opportunities.
          </p>

          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Turn on Email Updates</h2>
            <p className="mb-4">Be the first to know when new positions become available. Subscribe to receive email updates.</p>
            
            {submitted ? (
              <p className="text-green-400 font-semibold">Thank you for subscribing! We'll notify you about new opportunities.</p>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-2 text-gray-900 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-white text-blue-600 font-semibold py-3 px-6 rounded-md shadow-md hover:bg-blue-50"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
