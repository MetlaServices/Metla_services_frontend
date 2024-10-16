
import navblogbanner from '../../assets/navblogfolder/navblogbanner.webp'

const Navblog = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-8 bg-gray-50">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-80 rounded-lg flex items-center justify-center shadow-lg"
        style={{
        backgroundImage:
      `url(${navblogbanner})`
  
      //  "url('https://media.istockphoto.com/id/2151986746/photo/join-our-team-text-on-paper-card-on-wooden-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=Az9TwVHIuAXng119u4f4h_3AwLoMIkOnW6LIKOa9Jyw=')",
      // // "url('https://www.talent-works.com/wp-content/uploads/2021/06/3981-TWI-blog-Creating-a-buzz-around-a-complex-tech-startup_BLOG-HEADER-1920x629-v2.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative z-10 text-center">
          {/* <h1 className="text-4xl font-extrabold text-white tracking-wide">
            Metla Services Blog
          </h1>
          <h2 className="text-xl font-light text-white mt-2">
            Fast & Efficient Hiring Solutions
          </h2> */}
        </div>
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-16">
        {/* Card 1 */}
        <div className="bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
          <img
            className="w-full h-40 object-cover"
            src="https://media.istockphoto.com/id/2160663785/photo/the-companys-services-recruit-customers.jpg?s=612x612&w=0&k=20&c=F-3STT9xrnyPOkxrFlmhXTTPEs1nyoqeYxrt2Pl_kCA="
            alt="Hiring process"
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">
              {/* Fast & Efficient Hiring */}

            Metla Services: Fast & Efficient Hiring


            </h3>
            <p className="text-gray-600 mb-4">
              {/* Quick, professional hiring solutions for growing businesses. */}
              Metla Services ensures fast, efficient hiring with quality candidates, helping businesses save time and costs
            </p>
            <a
              href="/blog1"
              className="text-blue-700 font-medium hover:text-gray-900 transition"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
          <img
            className="w-full h-40 object-cover"
            src="https://media.istockphoto.com/id/1139078647/photo/the-team-to-call-to-get-through-to-the-network.jpg?s=612x612&w=0&k=20&c=cQfb-SOsH0AAzAj9XBvB12NqOMYn22aEMwCrBAzkLmg="
            alt="Team Morale"
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">
 
            Find the Right Talent with Metla Services
            </h3>
            <p className="text-gray-600 mb-4">
           Discover how Metla Services helps businesses across industries find the right talent quickly and efficiently through their expertise and vast talent pool.
            </p>
            <a
              href="/blog2"
              className="text-blue-700 font-medium hover:text-gray-900 transition"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Card 3
        <div className="bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
          <img
            className="w-full h-40 object-cover"
            src="https://images.pexels.com/photos/3182826/pexels-photo-3182826.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Strategy"
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">
              Staying Ahead of the Competition
            </h3>
            <p className="text-gray-600 mb-4">
              Stay competitive with quick, smart hiring strategies.
            </p>
            <a
              href="/contact"
              className="text-blue-700 font-medium hover:text-gray-900 transition"
            >
              Learn More
            </a>
          </div>
        </div> */}
      </div>

      {/* Info Section */}
      <div className="my-20 p-10 bg-white border-t-4 border-gray-400 rounded-xl shadow-md">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-extrabold text-gray-800 mb-6">
            Why Fast & Efficient Hiring Matters
          </h3>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Timely hiring reduces costs and boosts productivity. At Metla
            Services, we offer recruitment solutions tailored to your business
            needs, helping you stay ahead in a competitive industry.
          </p>
          <ul className="list-none space-y-5">
            <li className="flex items-start">
              <span className="inline-block w-4 h-4 bg-gray-400 rounded-full mr-3"></span>
              <p className="text-lg text-gray-700">
                <strong className="text-gray-900">Faster hiring</strong> reduces
                the time needed to fill crucial roles.
              </p>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-4 h-4 bg-gray-400 rounded-full mr-3"></span>
              <p className="text-lg text-gray-700">
                <strong className="text-gray-900">Boost team morale</strong> by
                ensuring seamless operations and a fully-staffed team.
              </p>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-4 h-4 bg-gray-400 rounded-full mr-3"></span>
              <p className="text-lg text-gray-700">
                <strong className="text-gray-900">Stay competitive</strong> with
                smart, efficient hiring strategies.
              </p>
            </li>
          </ul>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="my-16 text-center">
        <a
          href="/contact"
          className="inline-block px-10 py-4 bg-blue-700 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-gray-800 transition"
        >
          Get Started with Metla Services
        </a>
      </div>
    </div>
  );
};

export default Navblog;
