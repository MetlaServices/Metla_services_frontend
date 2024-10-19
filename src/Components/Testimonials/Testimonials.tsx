

import React from 'react';

// Testimonials Data
const testimonials = [
  {
    name: 'Akshit Das',
    feedback: 'My experience with Metla Services made me feel very satisfied. I had been looking for a good permanent job for a long time, and when I spoke to this placement consultant, it was the beginning of a great experience. The team at this company was very professional and kept me informed at each step.',
  },
  {
    name: 'Priya Singh',
    feedback: 'This recruitment company has been extremely resourceful and responsive in helping us identify some talented candidates. Strategic HR & IT Services has placed a number of candidates in various positions in our company recently. The services were truly admirable. Can’t wait to use Metla Services company again!',
  },
  {
    name: 'Himanshu Bhardwaj',
    feedback: 'Metla Services is an ethical and responsible employment company. By providing ethical and professional recruitment services to our clients and foreign employment opportunity to the job seekers according to their skills, experiences, and qualifications. We recommend to all.',
  }
];

const Testimonials: React.FC = () => {
  return (
    <div className="testimonial-section p-8 bg-gradient-to-br from-blue-50 to-blue-100 h-auto">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-[#003B5C]">What Our Clients Say</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="testimonial-card bg-white rounded-lg p-8 shadow-lg transition-transform duration-300 hover:shadow-xl hover:scale-105 border-l-4 border-[#005f73]"
          >
            <p className="text-gray-600 mb-4 leading-relaxed italic">{testimonial.feedback}</p>
            <h4 className="text-xl font-semibold text-[#005f73]">{testimonial.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
