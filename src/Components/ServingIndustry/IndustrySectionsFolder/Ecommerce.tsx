import { Link } from 'react-router-dom';

const Ecommerce = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-sans">
      {/* Header Section */}
      <header className="relative bg-[#147971] h-[60vh] flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-white text-5xl font-bold mb-4 tracking-wide">
          Your Leading Staffing Partner in E-commerce
        </h1>
        <p className="text-white text-lg mb-6 max-w-3xl mx-auto leading-relaxed">
          Connecting e-commerce businesses with skilled professionals to grow and scale efficiently.
        </p>
        <Link 
          to='/contact' 
          className="bg-white hover:bg-gray-200 text-[#147971] py-3 px-8 rounded-full font-medium shadow-md transition-all duration-300 ease-in-out transform hover:scale-105">
          Start Your Journey
        </Link>
      </header>

      {/* Main Content Section */}
      <main className="flex-grow w-full flex flex-col items-center py-12 bg-gray-100">
        
        <section className="text-center w-full max-w-4xl mb-12 px-4">
          <h2 className="text-3xl font-semibold mb-4 text-[#147971] tracking-wide">Our E-commerce Staffing Solutions</h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            We provide experienced e-commerce professionals to meet your business’s operational needs.
          </p>
        </section>

        {/* Services List */}
        <div className="w-full max-w-4xl px-4">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[ 
              {
                title: "Product Managers",
                description: "Product managers overseeing end-to-end product lifecycle.",
                icon: "📦",
              },
              {
                title: "Digital Marketing Experts",
                description: "Marketers driving traffic and increasing online sales.",
                icon: "📢",
              },
              {
                title: "UI/UX Designers",
                description: "Designers crafting intuitive user experiences.",
                icon: "🎨",
              },
              {
                title: "Supply Chain Specialists",
                description: "Experts ensuring smooth logistics and inventory management.",
                icon: "🚚",
              },
              {
                title: "Customer Support Representatives",
                description: "Professionals handling customer inquiries and support.",
                icon: "💬",
              },
              {
                title: "Data Analysts",
                description: "Analysts providing insights into customer behavior and trends.",
                icon: "📊",
              },
              {
                title: "SEO Specialists",
                description: "Experts optimizing your online presence for search engines.",
                icon: "🔍",
              },
              {
                title: "Web Developers",
                description: "Developers building and maintaining e-commerce platforms.",
                icon: "💻",
              },
              {
                title: "Warehouse Operations",
                description: "Staff managing inventory and shipping in warehouse facilities.",
                icon: "🏭",
              }
            ].map((service, index) => (
              <li key={index} className="p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105">
                <div className="text-5xl mb-4 animate-bounce">{service.icon}</div>
                <h3 className="text-xl font-semibold text-[#147971] mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link to='/contact' className="text-[#147971] hover:underline transition-all duration-300">
                  Learn More
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Ecommerce;
