import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="bg-gradient-to-r from-black to-blue-900 text-white min-h-screen">
      <div className="flex flex-col min-h-screen">
        {/* Terms and Conditions Section */}
        <section className="flex-grow py-8 md:py-16">
          <div className="max-w-screen-lg mx-auto px-4">
            <h1 className="text-2xl md:text-4xl font-extrabold mb-6 md:mb-8 text-center">Terms and Conditions</h1>
            
            <section className="mb-6 md:mb-8">
              <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">1. Introduction</h2>
              <p className="text-base md:text-lg">
                Welcome to Al Smow Busineemen Services. These Terms and Conditions govern your use of our website and services. By accessing or using our services, you agree to be bound by these Terms and Conditions.
              </p>
            </section>
            
            <section className="mb-6 md:mb-8">
              <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">2. Use of Our Services</h2>
              <p className="text-base md:text-lg">
                You must comply with all applicable laws and regulations while using our services. You agree not to misuse our services or engage in any conduct that could damage, disable, or impair our services.
              </p>
            </section>
            
            <section className="mb-6 md:mb-8">
              <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">3. Intellectual Property</h2>
              <p className="text-base md:text-lg">
                All content provided on our website, including text, graphics, logos, and images, is the property of Al Smow Busineemen Services and is protected by intellectual property laws. You may not use any content from our site without prior written permission.
              </p>
            </section>
            
            <section className="mb-6 md:mb-8">
              <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">4. Limitation of Liability</h2>
              <p className="text-base md:text-lg">
                To the maximum extent permitted by law, Al Smow Busineemen Services will not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of our services. Our total liability is limited to the amount paid by you for the services.
              </p>
            </section>
            
            <section className="mb-6 md:mb-8">
              <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">5. Changes to Terms</h2>
              <p className="text-base md:text-lg">
                We reserve the right to modify these Terms and Conditions at any time. We will notify you of any changes by posting the updated Terms on our website. Your continued use of our services following the posting of changes constitutes your acceptance of such changes.
              </p>
            </section>
            
            <section className="mb-6 md:mb-8">
              <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">6. Governing Law</h2>
              <p className="text-base md:text-lg">
                These Terms and Conditions are governed by and construed in accordance with the laws of Dubai. Any disputes arising from or in connection with these Terms will be subject to the exclusive jurisdiction of the courts of Dubai.
              </p>
            </section>
            
            <section className="mb-6 md:mb-8">
              <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">7. Contact Information</h2>
              <p className="text-base md:text-lg">
                If you have any questions about these Terms and Conditions, please contact us at <a href="mailto:info@alsmow.com" className="text-blue-400 hover:text-blue-600 transition duration-300">info@alsmow.com</a>.
              </p>
            </section>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditions;
