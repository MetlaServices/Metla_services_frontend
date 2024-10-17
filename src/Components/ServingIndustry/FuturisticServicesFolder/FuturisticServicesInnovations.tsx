import React from 'react';

const FuturisticServicesInnovations: React.FC = () => {
  return (
    <div className="p-8 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Main Heading */}
        <h1 className="text-6xl font-extrabold text-center text-black mb-12 transition-colors hover:text-genoa">
          Futuristic Services & Innovations
        </h1>

        {/* Engaging Introduction with Bold Text and Vibrant Color */}
        <div className="relative bg-selectiveyellow p-8 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-earlsgreen to-selectiveyellow opacity-20 rounded-lg"></div>
          <p className="relative z-10 text-2xl text-genoa font-light leading-relaxed">
            At <span className="font-bold text-black">Metla Services</span>, we are pioneering the future of work by revolutionizing how businesses engage with freelance, contract, and remote workforces.
            Experience cutting-edge solutions that enable flexible hiring, ensure scalability, and bring global talent to your doorstep.
          </p>
        </div>

        {/* Interactive and Animated Info Section */}
        <div className="mt-12 space-y-16">
          <section className="transform transition-all hover:scale-105">
            <div className="flex items-center space-x-8">
              <div className="w-1/2">
                <h2 className="text-4xl font-bold text-genoa mb-4">
                  Innovating Freelance & Contract Work
                </h2>
                <p className="text-xl text-black leading-relaxed">
                  Our platform provides unrivaled access to freelance and contract professionals, offering dynamic and scalable staffing solutions. You’ll enjoy the freedom to hire based on specific project needs, skill sets, or time frames.
                </p>
              </div>
              <div className="w-1/2">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPZ5RX4CvRHk62uK1VvP38g-Un56ERv-jhZA&s"
                  alt="Freelance Work"
                  className="rounded-lg shadow-lg hover:shadow-2xl transition-transform hover:scale-105"
                />
              </div>
            </div>
          </section>

          {/* Remote Work Section */}
          <section className="transform transition-all hover:scale-105">
            <div className="flex items-center space-x-8 flex-row-reverse">
              <div className="w-1/2">
                <h2 className="text-4xl font-bold text-genoa mb-4">
                  Empowering Remote Work Solutions
                </h2>
                <p className="text-xl text-black leading-relaxed">
                  Whether you're building a fully remote team or integrating freelancers into your existing workforce, our tools allow seamless communication, productivity tracking, and collaboration for any remote setup.
                </p>
              </div>
              <div className="w-1/2">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlOue4TM6d4Y-_Sd4paEknb3k_VqzNo3Gl3A&s"
                  alt="Remote Work"
                  className="rounded-lg shadow-lg hover:shadow-2xl transition-transform hover:scale-105"
                />
              </div>
            </div>
          </section>

          {/* AI-Powered Innovations */}
          <section className="transform transition-all hover:scale-105">
            <div className="flex items-center space-x-8">
              <div className="w-1/2">
                <h2 className="text-4xl font-bold text-genoa mb-4">
                  AI-Driven Talent Matching
                </h2>
                <p className="text-xl text-black leading-relaxed">
                  Using advanced AI algorithms, Metla Services matches your business with the perfect talent, efficiently and accurately. From short-term freelancers to long-term contract workers, our system ensures the right fit for every role.
                </p>
              </div>
              <div className="w-1/2">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtNk-FwHlztkTrx1iE7bFQ-OXvrHQo27JsFQ&s"
                  alt="AI Talent Matching"
                  className="rounded-lg shadow-lg hover:shadow-2xl transition-transform hover:scale-105"
                />
              </div>
            </div>
          </section>

          {/* Flexible Hiring Solutions */}
          <section className="transform transition-all hover:scale-105">
            <div className="flex items-center space-x-8 flex-row-reverse">
              <div className="w-1/2">
                <h2 className="text-4xl font-bold text-genoa mb-4">
                  Flexible & Scalable Hiring
                </h2>
                <p className="text-xl text-black leading-relaxed">
                  No matter the scale of your business or the urgency of your projects, our flexible staffing solutions give you the agility to quickly scale up or down. Hire freelance professionals, part-time workers, or remote teams based on your real-time needs.
                </p>
              </div>
              <div className="w-1/2">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXBRUuTBg2bJH6ptKxOu_oqDTSuecriQkTwg&s"
                  alt="Scalable Hiring"
                  className="rounded-lg shadow-lg hover:shadow-2xl transition-transform hover:scale-105"
                />
              </div>
            </div>
          </section>
        </div>

        {/* Closing Call to Action */}
        <div className="bg-genoa text-white text-center p-10 rounded-lg shadow-lg mt-16">
          <h2 className="text-3xl font-bold mb-4">
            Ready to explore the future of work?
          </h2>
          <p className="text-xl">
            Join the businesses that are transforming their workforce strategies with Metla Services. The future of flexible, innovative, and scalable hiring is here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FuturisticServicesInnovations;
