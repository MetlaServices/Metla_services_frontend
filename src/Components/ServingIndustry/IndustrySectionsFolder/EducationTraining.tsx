// import { Link } from 'react-router-dom';

// const EducationTraining = () => {
//   return (
//     <div className="min-h-screen flex flex-col">
      
//       {/* Header Section */}
//       <header className="h-[70vh] flex flex-col justify-center items-center text-center px-6 bg-gray-50">
//         <h1 className="text-5xl lg:text-6xl font-bold mb-6">Empowering Education with Quality Staffing</h1>
//         <p className="text-lg lg:text-xl max-w-2xl mb-8">
//           Metla Services provides staffing solutions for educational institutions to thrive.
//         </p>
//         <Link 
//           to='/contact' 
//           className="bg-teal-500 hover:bg-teal-600 text-white py-3 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105 text-lg font-medium">
//           Get Started
//         </Link>
//       </header>

//       {/* Main Content */}
//       <main className="flex-grow w-full flex flex-col items-center py-16 bg-white">
        
//         {/* Staffing Solutions Section */}
//         <section className="text-center w-full max-w-4xl px-6 py-12">
//           <h2 className="text-3xl font-bold mb-8">Our Education Staffing Solutions</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               { icon: "👨‍🏫", title: "Qualified Educators", description: "Experienced teachers to meet your curriculum needs." },
//               { icon: "🧑‍🏫", title: "Administrative Staff", description: "Efficient support for smooth operations." },
//               { icon: "📚", title: "Support Staff", description: "Librarians, counselors, and more." },
//               { icon: "👩‍🔬", title: "Specialized Personnel", description: "STEM, arts, and language specialists." },
//               { icon: "🔧", title: "On-Demand Staffing", description: "Flexible staffing for peak seasons." },
//               { icon: "📈", title: "Long-Term Solutions", description: "Ongoing staffing partnerships." }
//             ].map((service, index) => (
//               <div key={index} className="p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:scale-105">
//                 <div className="text-5xl mb-4">{service.icon}</div>
//                 <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
//                 <p className="text-gray-600">{service.description}</p>
//               </div>
//             ))}
//           </div>

//           <Link 
//             to='/contact' 
//             className="mt-8 bg-teal-500 hover:bg-teal-600 text-white py-3 px-6 rounded-full shadow-lg transform hover:scale-105">
//             Learn More
//           </Link>
//         </section>

//         {/* Collaboration Section */}
//         <section className="w-full max-w-5xl px-6 py-16 bg-gray-50 rounded-lg shadow-md mt-16">
//           <h2 className="text-4xl font-extrabold mb-8 text-center">Shaping Education Together</h2>
//           <p className="text-lg text-gray-700 text-center mb-8">
//             Partner with Metla Services to create educational environments where excellence thrives.
//           </p>
//           <div className="space-y-6">
//             {[
//               { icon: "🎓", text: "Personalized attention, passionate teaching, and smooth administration." },
//               { icon: "🏫", text: "Inclusive environments where every student feels empowered." },
//               { icon: "🤝", text: "Together, we build a future where education inspires excellence." }
//             ].map((item, index) => (
//               <div key={index} className="flex items-center justify-center space-x-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
//                 <div className="text-3xl">{item.icon}</div>
//                 <p className="text-lg text-gray-600">{item.text}</p>
//               </div>
//             ))}
//           </div>

//           <Link 
//             to='/contact' 
//             className="mt-8 bg-teal-500 hover:bg-teal-600 text-white py-3 px-6 rounded-full shadow-lg transform hover:scale-105">
//             Partner with Us
//           </Link>
//         </section>
//       </main>

//     </div>
//   );
// };

// export default EducationTraining;



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
