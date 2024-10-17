<<<<<<< HEAD
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate

// // import blogImage1 from '../../assets/BlogSection/talent_acquition.webp'; 
// // import blogImage2 from '../../assets/BlogSection/manpower.webp';
// // import blogImage3 from '../../assets/BlogSection/employee_engagement.webp'; 
// import Logo from '../../assets/Logo/logo.svg';

// interface BlogPost {
//   title: string;
//   excerpt: string;
//   image: string;
//   details: string;
//   link: string;  
// }

// const blogPosts: BlogPost[] = [
//   {
//     title: 'The Art of Talent Acquisition: Building Your Dream Team',
//     excerpt: 'In the dynamic landscape of human resources, talent acquisition stands as a pivotal function for organizational success...',
//     image: 'https://cdn.pixabay.com/photo/2018/03/18/11/58/recruit-3236547_640.jpg',
//     details: 'Detailed information about the art of talent acquisition...',
//     link: '/talentAquisition', 
//   },
//   {
//     title: 'Navigating HR Challenges in Manpower Planning',
//     excerpt: 'Effective manpower planning is crucial for organizational sustainability...',
//     image: 'https://cdn.pixabay.com/photo/2022/06/04/18/52/miniature-figures-7242587_640.jpg',
//     details: 'Comprehensive insights into manpower planning challenges...',
//     link: '/manpowerPlanning', 
//   },
//   {
//     title: 'The Power of Employee Engagement: Fueling Productivity and Retention',
//     excerpt: 'Employee engagement is not just a buzzword; it\'s a critical factor influencing productivity...',
//     image: 'https://cdn.pixabay.com/photo/2021/11/29/04/15/office-6831691_640.png',
//     details: 'Explore the importance of employee engagement...',
//     link: '/employeeEngagement', 
//   },
// ];

// const BlogSection: React.FC = () => {
//   const navigate = useNavigate(); // Initialize useNavigate
//   const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

//   const handleDetailsToggle = (index: number | null) => {
//     setExpandedIndex(expandedIndex === index ? null : index);
//   };

//   const handleCardClick = (link: string) => {
//     navigate(link); // Navigate to the specified link
//   };

//   return (
//     <div className="blog-section p-6 md:p-12 bg-gray-100">
//       <div className="flex items-center justify-center">
//   <div className="flex items-center">
//     <img src={Logo} alt="Metla Services Logo" className="h-[13px] object-contain" />
//     <h2 className="text-1xl font-bold text-center text-[#147971]">BLOG & NEWS</h2>
//   </div>
// </div>

//       <h2 className="section-heading text-4xl font-extrabold text-center mb-12 text-[#147971]">
//         Our Recent Blog
//       </h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {blogPosts.map((post, index) => (
//           <div
//             key={index}
//             className="blog-card bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer relative"
//             onMouseEnter={() => handleDetailsToggle(index)}
//             onMouseLeave={() => handleDetailsToggle(null)} // Handle null correctly
//             onClick={() => handleCardClick(post.link)} // Handle card click to navigate
//             style={{
//               position: 'relative',
//               overflow: 'hidden',
//               transition: 'transform 0.3s ease, box-shadow 0.3s ease',
//             }}
//           >
//             <div className="relative">
//               <img src={post.image} alt={post.title} className="w-full h-48 object-cover transition-transform duration-300" />
//               <div
//                 className="absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 flex items-center justify-center p-4"
//                 style={{
//                   opacity: expandedIndex === index ? 1 : 0,
//                 }}
//               >
//                 <div className="text-center text-white">
//                   <h3 className="text-2xl font-bold mb-2">{post.title}</h3>
//                   {expandedIndex === index && <p className="text-lg">{post.details}</p>}
//                 </div>
//               </div>
//             </div>
//             <div className="p-6">
//               <p className="text-gray-700 ">{post.excerpt}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BlogSection;




import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/Logo/logo.svg';
=======
import React, { useState } from 'react';

// Import images
import blogImage1 from '../../assets/BlogSection/talent_acquition.webp'; // Adjust path as necessary
import blogImage2 from '../../assets/BlogSection/manpower.webp'; // Adjust path as necessary
import blogImage3 from '../../assets/BlogSection/employee_engagement.webp'; // Adjust path as necessary
>>>>>>> e3c761706892c44b54d9d20b26859b5ff0b509cc

interface BlogPost {
  title: string;
  excerpt: string;
  image: string;
  details: string;
<<<<<<< HEAD
  link: string;
=======
>>>>>>> e3c761706892c44b54d9d20b26859b5ff0b509cc
}

const blogPosts: BlogPost[] = [
  {
    title: 'The Art of Talent Acquisition: Building Your Dream Team',
<<<<<<< HEAD
    excerpt: 'Talent acquisition stands as a pivotal function for organizational success...',
    image: 'https://media.istockphoto.com/id/2160663785/photo/the-companys-services-recruit-customers.jpg?s=612x612&w=0&k=20&c=F-3STT9xrnyPOkxrFlmhXTTPEs1nyoqeYxrt2Pl_kCA=',
    details: 'Detailed information about the art of talent acquisition...',
    link: '/talentAquisition',
=======
    excerpt: 'In the dynamic landscape of human resources, talent acquisition stands as a pivotal function for organizational success...',
    image: blogImage1,
    details: 'Detailed information about the art of talent acquisition...',
>>>>>>> e3c761706892c44b54d9d20b26859b5ff0b509cc
  },
  {
    title: 'Navigating HR Challenges in Manpower Planning',
    excerpt: 'Effective manpower planning is crucial for organizational sustainability...',
<<<<<<< HEAD
    image: 'https://media.istockphoto.com/id/1139078647/photo/the-team-to-call-to-get-through-to-the-network.jpg?s=612x612&w=0&k=20&c=cQfb-SOsH0AAzAj9XBvB12NqOMYn22aEMwCrBAzkLmg=',
    details: 'Comprehensive insights into manpower planning challenges...',
    link: '/manpowerPlanning',
  },
  {
    title: 'The Power of Employee Engagement: Fueling Productivity and Retention',
    excerpt: 'Employee engagement is critical for productivity and retention...',
    image: 'https://cdn.pixabay.com/photo/2017/08/24/11/03/time-2676366_640.jpg',
    details: 'Explore the importance of employee engagement...',
    link: '/employeeEngagement',
=======
    image: blogImage2,
    details: 'Comprehensive insights into manpower planning challenges...',
  },
  {
    title: 'The Power of Employee Engagement: Fueling Productivity and Retention',
    excerpt: 'Employee engagement is not just a buzzword; it\'s a critical factor influencing productivity...',
    image: blogImage3,
    details: 'Explore the importance of employee engagement...',
>>>>>>> e3c761706892c44b54d9d20b26859b5ff0b509cc
  },
];

const BlogSection: React.FC = () => {
<<<<<<< HEAD
  const navigate = useNavigate();
=======
  // Define state with type including null
>>>>>>> e3c761706892c44b54d9d20b26859b5ff0b509cc
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleDetailsToggle = (index: number | null) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

<<<<<<< HEAD
  const handleCardClick = (link: string) => {
    navigate(link);
  };

  return (
    <div className="blog-section px-6 py-12 md:px-12 bg-gradient-to-br from-green-50 to-teal-50">
      {/* Logo and Title */}
      <div className="flex items-center justify-center">
        <div className="flex items-center">
          <img src={Logo} alt="Metla Services Logo" className="h-[13px] object-contain" />

          <h2 className="text-1xl font-bold text-center text-[#147971] ml-2">BLOG & NEWS</h2>
        </div>

      </div>

      {/* Section Heading */}
      <h2 className="text-4xl font-extrabold text-center mb-12 text-[#147971]">
        Our Recent Blog
      </h2>

      {/* Blog Posts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="blog-card group bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer relative transition-all duration-500 transform hover:scale-105 hover:shadow-2xl"
            onMouseEnter={() => handleDetailsToggle(index)}
            onMouseLeave={() => handleDetailsToggle(null)}
            onClick={() => handleCardClick(post.link)}
          >
            {/* Image Section with Animation */}
            <div className="relative h-56 overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-110"
              />
              {/* Gradient Overlay with Fade-in Animation */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              >
                <div className="absolute bottom-0 p-4 text-white">
                  <h3 className="text-lg font-bold">{post.title}</h3>
                  {expandedIndex === index && <p className="text-sm mt-2">{post.details}</p>}
                </div>
              </div>
            </div>
            {/* Card Content */}
            <div className="p-6 bg-gradient-to-br from-white to-gray-50">
              <p className="text-gray-700 font-bold text-m tracking-wide leading-relaxed drop-shadow-md">
                {post.excerpt}
              </p>
            </div>

=======
  return (
    <div className="blog-section p-6 md:p-12 bg-gray-100">
      <h2 className="section-heading text-4xl font-extrabold text-center mb-12 text-[#147971]">
        Our Recent Blog
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="blog-card bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer relative"
            onMouseEnter={() => handleDetailsToggle(index)}
            onMouseLeave={() => handleDetailsToggle(null)} // Handle null correctly
            style={{
              position: 'relative',
              overflow: 'hidden',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }}
          >
            <div className="relative">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover transition-transform duration-300" />
              <div
                className="absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 flex items-center justify-center p-4"
                style={{
                  opacity: expandedIndex === index ? 1 : 0,
                }}
              >
                <div className="text-center text-white">
                  <h3 className="text-2xl font-semibold mb-2">{post.title}</h3>
                  {expandedIndex === index && <p className="text-lg">{post.details}</p>}
                </div>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-700">{post.excerpt}</p>
            </div>
>>>>>>> e3c761706892c44b54d9d20b26859b5ff0b509cc
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
