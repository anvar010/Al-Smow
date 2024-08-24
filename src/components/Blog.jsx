import React from 'react';

const Blog = () => {
  return (
    <div className="bg-gradient-to-r from-black to-blue-900 text-white min-h-screen flex flex-col">
      <header className="py-8 text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4">Blog</h1>
      </header>
      <div className="flex-grow flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12">
        <p className="text-base md:text-lg lg:text-xl text-center">
          Our blog is coming soon! Stay tuned for updates and insights.
        </p>
      </div>
    </div>
  );
};

export default Blog;
