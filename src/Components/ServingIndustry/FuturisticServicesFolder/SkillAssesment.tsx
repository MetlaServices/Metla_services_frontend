import React from 'react';

const SkillsAssesment: React.FC = () => {
  return (
    <div className="p-8 bg-gradient-to-r from-teal-50 via-gray-100 to-teal-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Page Heading */}
        <h1 className="text-5xl font-bold text-center text-teal-900 mb-12 animate-fade-in">
          AI-Driven Skills Assessment & Development
        </h1>

        {/* Introduction */}
        <div className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <p className="text-xl text-gray-800 mb-6 leading-relaxed">
            At <span className="font-bold text-teal-700">Metla Services</span>, we leverage the power of Artificial Intelligence to streamline skills assessment and enhance talent development. Our AI-driven platforms enable businesses to evaluate candidates efficiently, ensuring that only the most qualified individuals are considered for every role.
          </p>
        </div>

        {/* Sections */}
        <div className="mt-12 space-y-12">
          {/* AI-Powered Skills Assessment */}
          <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-8 rounded-lg shadow-xl transition-transform transform hover:scale-105">
            <h2 className="text-4xl font-semibold text-teal-900 mb-6">AI-Powered Skills Assessment</h2>
            <ul className="list-disc pl-6 space-y-4 text-lg text-gray-700 leading-relaxed">
              <li>
                <span className="font-semibold text-teal-800">Comprehensive Skill Analysis:</span> Our AI-driven platforms analyze candidates' skills in real time, evaluating both technical and soft skills to ensure a holistic understanding of their capabilities.
              </li>
              <li>
                <span className="font-semibold text-teal-800">Automated Testing and Feedback:</span> Through AI-powered assessments, candidates undergo tailored tests and receive instant feedback on their performance, helping both businesses and applicants understand areas for improvement.
              </li>
              <li>
                <span className="font-semibold text-teal-800">Customizable Skill Evaluation:</span> Businesses can customize the assessment process based on the unique requirements of each role, ensuring the right match between job specifications and candidate capabilities.
              </li>
            </ul>
          </div>

          {/* AI for Skill Development */}
          <div className="bg-white p-8 rounded-lg shadow-xl transition-transform transform hover:scale-105">
            <h2 className="text-4xl font-semibold text-teal-900 mb-6">AI for Skill Development</h2>
            <ul className="list-disc pl-6 space-y-4 text-lg text-gray-700 leading-relaxed">
              <li>
                <span className="font-semibold text-teal-800">Personalized Learning Pathways:</span> Based on assessment results, our platform generates personalized learning paths for candidates, helping them develop and improve the skills most relevant to their career progression.
              </li>
              <li>
                <span className="font-semibold text-teal-800">Continuous Improvement:</span> The AI system monitors progress over time, providing candidates with ongoing insights into their development and helping them track their improvement with adaptive learning tools.
              </li>
              <li>
                <span className="font-semibold text-teal-800">Upskilling & Reskilling Solutions:</span> In a rapidly changing job market, Metla’s AI platform ensures that candidates stay competitive by offering reskilling programs, equipping them for the demands of new roles.
              </li>
            </ul>
          </div>

          {/* Benefits of AI in Staffing */}
          <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-8 rounded-lg shadow-xl transition-transform transform hover:scale-105">
            <h2 className="text-4xl font-semibold text-teal-900 mb-6">Why Choose AI for Staffing?</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Utilizing AI for staffing and skill development offers unparalleled advantages for both employers and candidates:
            </p>
            <ul className="list-disc pl-6 space-y-4 text-lg text-gray-700 leading-relaxed mt-4">
              <li>
                <span className="font-semibold text-teal-800">Objective & Data-Driven:</span> AI removes bias from the hiring process, ensuring that decisions are based solely on a candidate's skills and competencies.
              </li>
              <li>
                <span className="font-semibold text-teal-800">Faster, Efficient Hiring:</span> Automated assessments speed up the recruitment process, allowing businesses to quickly identify the best fit for each position.
              </li>
              <li>
                <span className="font-semibold text-teal-800">Scalability:</span> Whether hiring for a single role or staffing entire teams, AI can scale to meet the needs of any business, regardless of size.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsAssesment;
