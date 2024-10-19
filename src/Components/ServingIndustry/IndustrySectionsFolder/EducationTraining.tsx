
import { Link } from 'react-router-dom';

const EducationTraining = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-sans">
      
      {/* Header Section */}
      <header className="relative bg-[#147971] h-[60vh] flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-white text-5xl lg:text-6xl font-bold mb-4 tracking-wide">
          Empowering Education with Quality Staffing
        </h1>
        <p className="text-white text-lg lg:text-xl max-w-xl mx-auto mb-6 leading-relaxed">
          Metla Services provides reliable staffing solutions for educational institutions.
        </p>
        <Link 
          to='/contact' 
          className="bg-white hover:bg-gray-200 text-[#147971] py-3 px-8 rounded-full font-medium shadow-lg transition-transform transform hover:scale-105 duration-300 ease-in-out">
          Get Started
        </Link>
      </header>

      {/* Main Content Section */}
      <main className="flex-grow w-full flex flex-col items-center py-12 bg-gray-100">
        
        {/* Staffing Solutions Section */}
        <section className="text-center w-full max-w-4xl mb-12 px-4">
          <h2 className="text-3xl font-semibold mb-8 text-[#147971] tracking-wide">Our Staffing Solutions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "👨‍🏫", title: "Qualified Educators", description: "Experienced teachers to meet your curriculum needs." },
              { icon: "🧑‍🏫", title: "Administrative Staff", description: "Efficient support for smooth operations." },
              { icon: "📚", title: "Support Staff", description: "Librarians, counselors, and more." },
              { icon: "👩‍🔬", title: "Specialized Personnel", description: "STEM, arts, and language specialists." },
              { icon: "🔧", title: "On-Demand Staffing", description: "Flexible staffing for peak seasons." },
              { icon: "📈", title: "Long-Term Solutions", description: "Ongoing staffing partnerships." },
              { icon: "🎓", title: "Tutoring Services", description: "Professional tutors for personalized learning." },
              { icon: "🏫", title: "Special Education Staff", description: "Trained professionals to support diverse learning needs." },
              { icon: "👥", title: "Coaching and Mentoring", description: "Experienced mentors to guide students and staff." },
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
          </div>

        </section>
      
      </main>
    </div>
  );
};

export default EducationTraining;
