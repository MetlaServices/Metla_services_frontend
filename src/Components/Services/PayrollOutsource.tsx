import { Link } from 'react-router-dom';

const PayrollOutsource = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-sans">
      {/* Header Section */}
      <header className="relative bg-[#147971] h-[60vh] flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-white text-5xl font-bold mb-4 tracking-wide">
          Hassle-Free Payroll Outsourcing
        </h1>
        <p className="text-white text-lg mb-6 max-w-3xl mx-auto leading-relaxed">
          Simplify your payroll management with Metla Services, providing comprehensive outsourcing solutions for businesses of all sizes.
        </p>
        <Link 
          to='/contact' 
          className="bg-white hover:bg-gray-200 text-[#147971] py-3 px-8 rounded-full font-medium shadow-md transition-all duration-300 ease-in-out transform hover:scale-105">
          Get Started
        </Link>
      </header>

      {/* Main Content Section */}
      <main className="flex-grow w-full flex flex-col items-center py-12 bg-gray-100">
        
        <section className="text-center w-full max-w-4xl mb-12 px-4">
          <h2 className="text-3xl font-semibold mb-4 text-[#147971] tracking-wide">Why Choose Payroll Outsourcing?</h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Managing payroll can be time-consuming and complex. With Metla Services' payroll outsourcing, you can focus on growing your business while we handle the intricacies of payroll management.
          </p>
        </section>

        {/* Services List */}
        <div className="w-full max-w-6xl px-4">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[ 
              {
                title: "Accurate Payroll Processing",
                description: "Ensure timely and accurate salary disbursements to your employees.",
                icon: "💵",
              },
              {
                title: "Tax Filing and Compliance",
                description: "Stay compliant with all payroll tax laws and avoid penalties.",
                icon: "📑",
              },
              {
                title: "Employee Benefits Management",
                description: "Handle deductions, bonuses, and benefits administration effortlessly.",
                icon: "🎁",
              },
              {
                title: "Custom Payroll Reports",
                description: "Get detailed reports tailored to your business’s specific needs.",
                icon: "📊",
              },
              {
                title: "Direct Deposit Services",
                description: "Seamless direct deposits for all your employees, ensuring convenience.",
                icon: "🏦",
              },
              {
                title: "Payroll Support for All Industries",
                description: "We provide payroll solutions for businesses in any sector.",
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

export default PayrollOutsource;
