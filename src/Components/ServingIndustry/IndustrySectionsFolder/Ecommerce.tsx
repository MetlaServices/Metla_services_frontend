
const Ecommerce = () => {
    return (
        <div className="bg-orange-100 min-h-screen flex flex-col">
            {/* Header Section */}
            <header className="bg-gradient-to-r from-orange-500 to-orange-600 text-white text-center py-16">
                <h1 className="text-6xl font-extrabold animate-bounce">Elevate Your eCommerce with Metla</h1>
                <p className="mt-4 text-xl">Tailored staffing solutions to fuel your business growth.</p>
            </header>

            {/* How Metla Supports eCommerce Section */}
            <section className="max-w-7xl mx-auto px-6 my-12 text-center">
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Unlock New Possibilities</h2>
                <p className="text-lg text-gray-700 mb-8">
                    Access a pool of qualified talent ready to help you thrive in the competitive eCommerce landscape.
                </p>
                <img 
                    src="https://via.placeholder.com/800x400.png?text=eCommerce+Image" 
                    alt="eCommerce" 
                    className="w-full rounded-lg shadow-lg mb-8 transition-transform transform hover:scale-105"
                />
                <button className="bg-orange-600 text-white px-6 py-3 rounded-md shadow-lg hover:bg-orange-700 transition duration-300">
                    Explore Our Services
                </button>
            </section>

            {/* Our Staffing Solutions Section */}
            <section className="py-16 bg-gradient-to-b from-orange-200 to-orange-300 rounded-t-3xl">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-gray-800 mb-6">Tailored Staffing Solutions Just for You</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-8">
                        <div className="bg-white rounded-lg shadow-lg p-8 transition-transform transform hover:scale-105">
                            <h3 className="text-2xl font-semibold text-orange-600 mb-2">Expert Talent Acquisition</h3>
                            <p className="text-gray-700">Identify and recruit top professionals for your eCommerce needs.</p>
                        </div>
                        <div className="bg-white rounded-lg shadow-lg p-8 transition-transform transform hover:scale-105">
                            <h3 className="text-2xl font-semibold text-orange-600 mb-2">Flexible Workforce Solutions</h3>
                            <p className="text-gray-700">Adapt your team size to meet project demands seamlessly.</p>
                        </div>
                        <div className="bg-white rounded-lg shadow-lg p-8 transition-transform transform hover:scale-105">
                            <h3 className="text-2xl font-semibold text-orange-600 mb-2">Market Insights</h3>
                            <p className="text-gray-700">Gain insights to make informed hiring decisions.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <footer className="bg-orange-500 py-8 text-center">
                <h2 className="text-4xl font-semibold text-white mb-4">Transform Your eCommerce Journey</h2>
                <p className="text-lg text-gray-100 mb-6">Partner with Metla for innovative staffing solutions.</p>
                <button className="bg-orange-600 text-white px-8 py-3 rounded-md shadow-lg transition duration-300 hover:bg-orange-700 hover:scale-105">
                    Start Your Journey Today!
                </button>
            </footer>
        </div>
    );
};

export default Ecommerce;
