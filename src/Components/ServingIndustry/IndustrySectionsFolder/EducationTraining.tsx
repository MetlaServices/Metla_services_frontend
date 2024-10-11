import { Link } from 'react-router-dom';

const EducationAndTraining = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header Section */}
      <header className="relative bg-gradient-to-r from-green-800 to-green-600 h-[70vh] flex flex-col justify-center items-center text-center px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-green-800 to-green-600 opacity-80"></div>
        <h1 className="relative z-10 text-white text-5xl lg:text-7xl font-bold mb-4 drop-shadow-lg">Empowering Education Through Quality Staffing</h1>
        <p className="relative z-10 text-lg lg:text-xl text-white max-w-2xl mx-auto mb-6 drop-shadow-lg">
          Metla Services is committed to providing exceptional staffing solutions tailored for educational institutions.
        </p>
        <Link 
          to='/contact' 
          className="relative z-10 bg-white hover:bg-gray-100 text-green-800 py-3 px-8 rounded-full transition duration-300 shadow-lg transform hover:scale-105 text-lg font-semibold">
          Get Started with Us
        </Link>
      </header>

      {/* Main Content Section */}
      <main className="flex-grow w-full flex flex-col items-center py-10 bg-gray-100">
        
        {/* Staffing Solutions Section */}
        <section className="text-center w-full max-w-5xl mb-12 px-4 py-10 bg-white rounded-lg shadow-md">
          <h2 className="text-4xl font-bold mb-6 text-green-800">Our Staffing Solutions for Education</h2>
          <p className="text-lg leading-relaxed mb-6 text-gray-700">
            At Metla Services, we understand the unique challenges of the education sector. Our staffing solutions ensure that your institution is equipped with qualified personnel who can foster a conducive learning environment.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "👨‍🏫",
                title: "Qualified Educators",
                description: "We provide experienced teachers and educators to meet your curriculum needs.",
              },
              {
                icon: "🧑‍🏫",
                title: "Administrative Staff",
                description: "Efficient administrative personnel to support the smooth operation of your institution.",
              },
              {
                icon: "📚",
                title: "Support Staff",
                description: "From counselors to librarians, we have staffing solutions for all your support needs.",
              },
              {
                icon: "👩‍🔬",
                title: "Specialized Personnel",
                description: "Staff with specialized training in subjects like STEM, arts, and languages.",
              },
              {
                icon: "🔧",
                title: "On-Demand Staffing",
                description: "Flexible staffing options available to accommodate peak seasons and special events.",
              },
              {
                icon: "📈",
                title: "Long-Term Staffing Solutions",
                description: "Building lasting partnerships with schools for ongoing staffing support.",
              },
            ].map((service, index) => (
              <div key={index} className="flex flex-col items-center p-6 bg-green-50 border border-green-200 rounded-lg shadow-md transition-transform transform hover:scale-105">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-green-800 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-center">{service.description}</p>
              </div>
            ))}
          </div>

          <Link 
            to='/contact' 
            className="mt-8 inline-block bg-green-800 hover:bg-green-700 text-white py-3 px-6 rounded-full transition duration-300 shadow-lg transform hover:scale-105">
            Discover Our Education Staffing Solutions
          </Link>
        </section>

        
        <section className="w-full max-w-7xl px-8 py-16 mt-12 bg-gradient-to-r from-green-50 to-green-100 shadow-lg rounded-lg relative overflow-hidden">
  {/* Background shapes for added visual interest */}
  <div className="absolute top-0 left-0 w-40 h-40 bg-green-200 rounded-full transform -translate-x-20 -translate-y-20 opacity-30"></div>
  <div className="absolute bottom-0 right-0 w-40 h-40 bg-green-300 rounded-full transform translate-x-20 translate-y-20 opacity-30"></div>
  
  <h2 className="text-5xl font-extrabold text-green-900 mb-8 text-center animate__animated animate__fadeIn">
    Transforming Education Together
  </h2>
  <p className="text-lg mb-6 text-gray-700 text-center animate__animated animate__fadeIn animate__delay-1s">
    At Metla Services, we believe in the power of collaboration. Our staffing solutions go beyond mere placements; we aim to create a lasting impact in educational settings.
  </p>
  <div className="space-y-6">
    {[ 
      {
        icon: "🎓",
        text: "Imagine: a classroom where every child receives personalized attention, qualified teachers ignite a passion for learning, and administrative processes run smoothly."
      },
      {
        icon: "🏫",
        text: "Visualize: educational environments where support staff foster an inclusive atmosphere, ensuring every student feels valued and empowered."
      },
      {
        icon: "🤝",
        text: "Join us: in shaping the future of education, one qualified staff member at a time. Together, we can build an educational landscape that inspires excellence."
      }
    ].map((item, index) => (
      <div key={index} className="flex items-center justify-center space-x-4 bg-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105 animate__animated animate__fadeIn animate__delay-${index + 2}s">
        <div className="text-3xl">{item.icon}</div>
        <p className="text-lg text-gray-700">{item.text}</p>
      </div>
    ))}
  </div>
  <Link 
    to='/contact' 
    className="mt-8 inline-block bg-green-800 hover:bg-green-700 text-white py-3 px-6 rounded-full transition duration-300 shadow-lg transform hover:scale-105 animate__animated animate__fadeIn">
    Partner with Us Today
  </Link>
</section>


      </main>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-center py-6 shadow-md mt-12">
        <p className="text-white">© 2024 Metla Services. All Rights Reserved.</p>
        <p className="text-gray-400 text-sm">Connect with us on social media for updates!</p>
      </footer>
    </div>
  );
};

export default EducationAndTraining;
