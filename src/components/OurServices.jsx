import React from 'react';

const OurServices = () => {
  const services = [
    { name: "PRO WORKS", quote: "Expert solutions for all your professional needs." },
    { name: "IMMIGRATION", quote: "Navigating immigration with ease and expertise." },
    { name: "LABOUR WORKS", quote: "Efficient handling of all labor-related tasks." },
    { name: "MEDICAL TYPING", quote: "Accurate and confidential medical documentation." },
    { name: "EMIRATES ID TYPING", quote: "Streamlined process for your Emirates ID needs." },
    { name: "SPONSOR ARRANGEMENT", quote: "Reliable sponsor arrangements tailored to you." },
    { name: "HEALTH PERMIT", quote: "Simplified health permit applications." },
    { name: "FAMILY / VISIT VISA", quote: "Hassle-free processing for family and visit visas." },
    { name: "TENANCY WORK", quote: "Efficient handling of tenancy documentation." },
    { name: "VAT FILINGS (RETURNS)", quote: "Accurate and timely VAT filings." },
    { name: "FEWA, SEWERAGE", quote: "Complete solutions for FEWA and sewerage services." },
    { name: "LICENSE WORKS", quote: "Expert assistance for obtaining and renewing licenses." },
    { name: "CERTIFICATE ATTESTATION", quote: "Fast and reliable certificate attestation services." },
    { name: "LAJNA (TRANSPORT AUTHORITY)", quote: "Expert guidance for Lajna services." },
    { name: "EVG, CIVIL DEFENSE, TRAFFIC FINES", quote: "Efficient handling of EVG, civil defense, and traffic fines." },
    { name: "DRIVING LICENCE, MULKIYA", quote: "Simplified process for driving license and Mulkiya." },
    { name: "TASHEEL SERVICES", quote: "Comprehensive Tasheel services for your needs." },
    { name: "AJMAN FREE ZONE WORKS", quote: "Expert services for Ajman Free Zone requirements." }
  ];

  return (
    <div className="bg-gradient-to-r from-black to-blue-900 text-white min-h-screen">
      <div className="max-w-screen-lg mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-12 text-center text-white">
          Our Services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-xl font-semibold mb-4">{service.name}</h2>
              <p className="text-gray-300 mb-4">
                {service.quote}
              </p>
              {/* <p className="text-gray-300">
                We provide expert assistance in this service area, ensuring top-notch quality and reliability.
              </p> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
