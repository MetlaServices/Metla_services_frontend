
import { Link } from 'react-router-dom';

const BFSI = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-sans">
      {/* Header Section */}
      <header className="relative bg-[#147971] h-[60vh] flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-white text-5xl font-bold mb-4 tracking-wide">
          Your Trusted Staffing Partner in BFSI
        </h1>
        <p className="text-white text-lg mb-6 max-w-3xl mx-auto leading-relaxed">
          Connecting top talent with leading firms in Banking, Financial Services, and Insurance to drive success.
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
          <h2 className="text-3xl font-semibold mb-4 text-[#147971] tracking-wide">Our Staffing Solutions</h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            We provide skilled professionals tailored to meet the unique needs of the BFSI industry.
          </p>
        </section>

        {/* Services List */}
        <div className="w-full max-w-4xl px-4">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[ 
              {
                title: "Banking Consultants",
                description: "Experts providing guidance on banking regulations and operations.",
                icon: "🏦",
              },
              {
                title: "Risk Management Professionals",
                description: "Specialists identifying and mitigating financial risks.",
                icon: "⚖️",
              },
              {
                title: "Compliance Officers",
                description: "Professionals ensuring adherence to financial regulations.",
                icon: "🛡️",
              },
              {
                title: "Financial Analysts",
                description: "Analysts who interpret financial data to guide strategic decisions.",
                icon: "📊",
              },
              {
                title: "Insurance Underwriters",
                description: "Underwriters assessing risk and determining insurance policies.",
                icon: "📜",
              },
              {
                title: "Investment Advisors",
                description: "Advisors guiding clients through investment opportunities.",
                icon: "📈",
              },
              {
                title: "Loan Officers",
                description: "Loan specialists helping clients secure financing options.",
                icon: "💰",
              },
              {
                title: "Account Managers",
                description: "Account managers ensuring smooth client relations in financial services.",
                icon: "🤝",
              },
              {
                title: "IT Support for BFSI",
                description: "Tech support specialists familiar with financial software and systems.",
                icon: "💻",
              }
            ].map((service, index) => (
              <li key={index} className="p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105">
                <div className="text-5xl mb-4 animate-bounce">{service.icon}</div>
                <h3 className="text-xl font-semibold text-[#147971] mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link to='/service-details' className="text-[#147971] hover:underline transition-all duration-300">
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

export default BFSI;
