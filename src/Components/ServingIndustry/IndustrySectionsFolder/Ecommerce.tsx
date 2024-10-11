import React from 'react';

const Ecommerce = () => {
    return (
        <div className="bg-orange-50 min-h-screen flex flex-col">
            {/* Header Section */}
            <header className="bg-gradient-to-r from-orange-400 to-orange-500 text-white text-center py-12">
                <h1 className="text-5xl font-extrabold">Empowering eCommerce with Expert Staffing</h1>
                <p className="mt-4 text-lg">Your trusted partner for tailored staffing solutions.</p>
            </header>

            {/* How Metla Supports eCommerce Section */}
            <section className="max-w-7xl mx-auto px-6 my-12 text-center">
                <h2 className="text-4xl font-semibold text-gray-700 mb-6">Unlock Your Potential</h2>
                <p className="text-lg text-gray-600 mb-6">
                    With Metla, gain access to top-tier talent ready to elevate your eCommerce business.
                </p>
                <img 
                    src="https://via.placeholder.com/800x400.png?text=eCommerce+Image" 
                    alt="eCommerce" 
                    className="w-full rounded-lg shadow-lg mb-6"
                />
                <button className="bg-orange-600 text-white px-4 py-2 rounded-md shadow-lg hover:bg-orange-700 transition">
                    Discover Our Solutions
                </button>
            </section>

            {/* Our Staffing Solutions Section */}
            <section className="bg-orange-200 py-12 rounded-b-3xl">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-4xl font-semibold text-gray-700 mb-6">Staffing Solutions Tailored to You</h2>
                    <div className="flex flex-wrap justify-center gap-8 mb-6">
                        <div className="w-64 bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
                            <h3 className="text-2xl font-bold text-orange-600 mb-2">Skilled Workforce</h3>
                            <p className="text-gray-600">Access professionals with expertise in eCommerce.</p>
                        </div>
                        <div className="w-64 bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
                            <h3 className="text-2xl font-bold text-orange-600 mb-2">Flexible Solutions</h3>
                            <p className="text-gray-600">Scale your team based on demand efficiently.</p>
                        </div>
                        <div className="w-64 bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
                            <h3 className="text-2xl font-bold text-orange-600 mb-2">Industry Insights</h3>
                            <p className="text-gray-600">Leverage our experience for strategic hiring.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <footer className="bg-orange-400 py-6 text-center">
                <h2 className="text-4xl font-semibold text-gray-700 mb-4">Let’s Transform Your eCommerce Business</h2>
                <p className="text-lg text-gray-600 mb-4">Partner with us for exceptional staffing solutions.</p>
                <button className="bg-orange-600 text-white px-6 py-2 rounded-md shadow-lg transition duration-300 hover:scale-105">
                    Get Started Today!
                </button>
            </footer>
        </div>
    );
};

export default Ecommerce;
