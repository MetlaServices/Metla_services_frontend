

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/Logo/logo.svg';

interface BlogPost {
  title: string;
  excerpt: string;
  image: string;
  details: string;
  link: string;
}

const blogPosts: BlogPost[] = [
  {
    title: 'Metla Services ensures fast, efficient hiring with quality candidates, helping businesses save time and costs.',
    excerpt: 'Metla Services: Fast & Efficient Hiring',
    image: 'https://media.istockphoto.com/id/2160663785/photo/the-companys-services-recruit-customers.jpg?s=612x612&w=0&k=20&c=F-3STT9xrnyPOkxrFlmhXTTPEs1nyoqeYxrt2Pl_kCA=',
    // details: 'Detailed information about the art of talent acquisition...',
    link: '/talentAquisition',
    details:''
  },
  {
    title: 'Discover how Metla Services helps businesses across industries find the right talent quickly and efficiently through their expertise and vast talent pool.',
    excerpt: '"Find the Right Talent with Metla Services"',
    image: 'https://media.istockphoto.com/id/1139078647/photo/the-team-to-call-to-get-through-to-the-network.jpg?s=612x612&w=0&k=20&c=cQfb-SOsH0AAzAj9XBvB12NqOMYn22aEMwCrBAzkLmg=',
    // details: 'Comprehensive insights into manpower planning challenges...',
    link: '/manpowerPlanning',
      details:''
  },
  {
    title: 'The Power of Employee Engagement: Fueling Productivity and Retention',
    excerpt: 'Employee engagement is critical for productivity and retention...',
    image: 'https://cdn.pixabay.com/photo/2017/08/24/11/03/time-2676366_640.jpg',
    // details: 'Explore the importance of employee engagement...',
    link: '/employeeEngagement',
      details:''
  },
];

const BlogSection: React.FC = () => {
  const navigate = useNavigate();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleDetailsToggle = (index: number | null) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

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

          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
