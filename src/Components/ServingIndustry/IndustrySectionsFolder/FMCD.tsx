import React from 'react';
import { Link } from 'react-router-dom';

const FMCD = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="bg-green-600 text-white py-10">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold">Metla Services</h1>
          <p className="text-lg mt-4">Driving Innovation in the Fast-Moving Consumer Durables (FMCD) Sector</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12 space-y-12">
        
        {/* Introduction Section */}
        <section className="text-center">
          <h2 className="text-4xl font-bold text-gray-800">Solutions Tailored for FMCD</h2>
          <p className="text-lg text-gray-600 mt-4">
            At Metla, we provide high-quality talent to meet the fast-paced demands of the FMCD sector. From supply chain experts to marketing gurus, we ensure your business stays ahead of the curve.
          </p>
        </section>

        {/* Key Expertise - Interactive Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-green-50 p-6 rounded-lg shadow-lg hover:bg-green-100 transition-all duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Product Innovators</h3>
            <p className="text-gray-600">
              Bringing in creative minds who innovate new product lines to help you stay competitive in a fast-evolving market.
            </p>
            <div className="mt-4 text-green-600 font-semibold">Transforming ideas into action.</div>
          </div>
          <div className="bg-green-50 p-6 rounded-lg shadow-lg hover:bg-green-100 transition-all duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Supply Chain Specialists</h3>
            <p className="text-gray-600">
              Experts who streamline your logistics and distribution, ensuring your products reach consumers efficiently.
            </p>
            <div className="mt-4 text-green-600 font-semibold">Efficiency that drives success.</div>
          </div>
          <div className="bg-green-50 p-6 rounded-lg shadow-lg hover:bg-green-100 transition-all duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Sales & Marketing Gurus</h3>
            <p className="text-gray-600">
              Strategists who create and execute campaigns that capture consumer attention and boost product sales.
            </p>
            <div className="mt-4 text-green-600 font-semibold">Connecting with consumers.</div>
          </div>
        </section>

        {/* Interactive Section - What's Trending in FMCD */}
        <section className="p-8 bg-white rounded-lg shadow-lg text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">What's Trending in FMCD</h2>
          <p className="text-lg text-gray-700 mb-6">
            Our talent doesn't just keep up—they set trends. Here's how we help brands navigate the evolving landscape of consumer durables:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green-100 p-6 rounded-lg shadow-lg transform hover:rotate-1 transition-transform">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Sustainability Initiatives</h3>
              <p className="text-gray-600">
                Partnering with eco-conscious experts to make your products sustainable and meet consumer demand for green solutions.
              </p>
            </div>
            <div className="bg-green-100 p-6 rounded-lg shadow-lg transform hover:rotate-1 transition-transform">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Smart Consumer Electronics</h3>
              <p className="text-gray-600">
                Connecting you with forward-thinking tech talent to create the next generation of smart, connected consumer goods.
              </p>
            </div>
            <div className="bg-green-100 p-6 rounded-lg shadow-lg transform hover:rotate-1 transition-transform">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Digital Consumer Engagement</h3>
              <p className="text-gray-600">
                Strategists who help you tap into new digital channels, engaging with consumers directly and driving brand loyalty.
              </p>
            </div>
            <div className="bg-green-100 p-6 rounded-lg shadow-lg transform hover:rotate-1 transition-transform">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Innovation in Retail</h3>
              <p className="text-gray-600">
                Retail experts who integrate physical and digital experiences, optimizing product placement and consumer interaction.
              </p>
            </div>
          </div>
        </section>

        {/* Visual and Interactive Content - Talent Solutions */}
        <section className="p-8 bg-green-50 rounded-lg shadow-lg text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Talent That Powers Your Business</h2>
          <p className="text-lg text-gray-700 mb-6">
            Our handpicked talent ensures your FMCD brand can innovate faster and grow smarter. Here's how:
          </p>
          <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-8">
            <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Adapt to Market Trends</h3>
              <p className="text-gray-600">
                Stay ahead of the curve with talent that understands shifting consumer behavior and market trends.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Optimize Operations</h3>
              <p className="text-gray-600">
                Operational excellence specialists help you scale production and meet rising consumer demand without compromising quality.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Boost Brand Visibility</h3>
              <p className="text-gray-600">
                Marketing and branding experts who can craft innovative campaigns to make your products stand out on the shelves.
              </p>
            </div>
          </div>
        </section>

        {/* Engaging Facts - Short Bites */}
        <section className="p-8 bg-green-600 text-white rounded-lg shadow-lg text-center">
          <h2 className="text-4xl font-bold mb-4">Did You Know?</h2>
          <p className="text-lg mb-6">
            The FMCD industry is evolving rapidly, and Metla ensures you stay at the forefront. Here are some key insights:
          </p>
          <ul className="list-disc list-inside space-y-4">
            <li className="text-xl">Eco-friendly products are seeing a 40% year-on-year growth in demand.</li>
            <li className="text-xl">Smart home appliances are expected to grow by 25% in the next 5 years.</li>
            <li className="text-xl">Consumers are shifting towards hybrid shopping experiences, blending physical and digital retail.</li>
          </ul>
        </section>

        {/* Closing Call-to-Action */}
        <section className="p-8 bg-white rounded-lg shadow-lg text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Let's Revolutionize Your FMCD Strategy</h2>
          <p className="text-lg text-gray-700 mb-6">
            Connect with us today to find out how our customized talent solutions can help you navigate the fast-moving consumer durables sector.
          </p>
          <div className="flex justify-center space-x-4">
        <Link to='/contact'> <button className="bg-green-600 text-white px-6 py-2 rounded shadow-lg hover:bg-green-700 transition">Start Now</button></Link>
            </div>
        </section>
      </main>
    </div>
  );
};

export default FMCD;
