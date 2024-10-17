import { Link } from 'react-router-dom';

const MediaEntertainment = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-sans">
      {/* Header Section */}
      <header className="relative bg-[#147971] h-[60vh] flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-white text-5xl font-bold mb-4 tracking-wide">
          Your Premier Staffing Partner in Media & Entertainment
        </h1>
        <p className="text-white text-lg mb-6 max-w-3xl mx-auto leading-relaxed">
          Connecting creative talent with leading firms in the media and entertainment industry to drive innovation.
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
            We provide skilled professionals tailored to meet the unique needs of the media and entertainment industry.
          </p>
        </section>

        {/* Services List */}
        <div className="w-full max-w-4xl px-4">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[ 
              {
                title: "Creative Directors",
                description: "Visionary leaders driving artistic and creative projects.",
                icon: "🎨",
              },
              {
                title: "Production Assistants",
                description: "Support staff ensuring smooth operations on set.",
                icon: "🎬",
              },
              {
                title: "Graphic Designers",
                description: "Designers creating compelling visual content.",
                icon: "🖌️",
              },
              {
                title: "Video Editors",
                description: "Experts in post-production editing for films and videos.",
                icon: "✂️",
              },
              {
                title: "Sound Engineers",
                description: "Technicians managing audio recording and mixing.",
                icon: "🔊",
              },
              {
                title: "Writers & Content Creators",
                description: "Writers producing engaging scripts and content.",
                icon: "✍️",
              },
              {
                title: "Social Media Managers",
                description: "Specialists promoting brands through social media platforms.",
                icon: "📱",
              },
              {
                title: "Event Coordinators",
                description: "Professionals planning and executing media events.",
                icon: "🎉",
              },
              {
                title: "IT Support for Media",
                description: "Tech support familiar with media production software.",
                icon: "💻",
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

export default MediaEntertainment;
