import React, { useState } from 'react';

// Import images
import blogImage1 from '../../assets/BlogSection/talent_acquition.webp'; // Adjust path as necessary
import blogImage2 from '../../assets/BlogSection/manpower.webp'; // Adjust path as necessary
import blogImage3 from '../../assets/BlogSection/employee_engagement.webp'; // Adjust path as necessary

interface BlogPost {
  title: string;
  excerpt: string;
  image: string;
  details: string;
}

const blogPosts: BlogPost[] = [
  {
    title: 'The Art of Talent Acquisition: Building Your Dream Team',
    excerpt: 'In the dynamic landscape of human resources, talent acquisition stands as a pivotal function for organizational success...',
    image: blogImage1,
    details: 'Detailed information about the art of talent acquisition...',
  },
  {
    title: 'Navigating HR Challenges in Manpower Planning',
    excerpt: 'Effective manpower planning is crucial for organizational sustainability...',
    image: blogImage2,
    details: 'Comprehensive insights into manpower planning challenges...',
  },
  {
    title: 'The Power of Employee Engagement: Fueling Productivity and Retention',
    excerpt: 'Employee engagement is not just a buzzword; it\'s a critical factor influencing productivity...',
    image: blogImage3,
    details: 'Explore the importance of employee engagement...',
  },
];

const BlogSection: React.FC = () => {
  // Define state with type including null
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleDetailsToggle = (index: number | null) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

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
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
