import React from 'react';

const GigEconomy: React.FC = () => {
  return (
    <div className="p-8 bg-gradient-to-r from-white to-emerald-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Page Heading */}
        <h1 className="text-5xl font-extrabold text-center text-black mb-12 animate-fade-in transition-transform transform hover:scale-105">
          Gig Economy and Remote Work Solutions
        </h1>

        {/* Introduction */}
        <div className="bg-white p-8 rounded-xl shadow-xl transition-transform transform hover:scale-105">
          <p className="text-xl text-gray-700 mb-6 leading-relaxed">
            At <span className="font-bold text-genoa">Metla Services</span>, we help businesses tap into the evolving <span className="font-bold text-genoa">Gig Economy</span> and adapt to remote work trends. Whether you need to fill permanent positions or hire short-term contract workers, our platform enables organizations to connect with skilled candidates globally.
          </p>
        </div>

        {/* Sections */}
        <div className="mt-12 space-y-12">
          {/* How Metla Helps */}
          <div className="bg-gradient-to-br from-white to-emerald-100 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
            <h2 className="text-4xl font-bold text-genoa mb-6">How Metla Helps in the Gig Economy:</h2>
            <ul className="list-disc pl-6 space-y-4 text-lg text-gray-700 leading-relaxed">
              <li>
                <span className="font-semibold text-genoa">Virtual Job Fairs:</span> We host virtual events to connect employers with top talent across the globe, streamlining recruitment in the gig economy.
              </li>
              <li>
                <span className="font-semibold text-genoa">Online Assessment Tools:</span> Using our advanced assessment platforms, businesses can efficiently evaluate candidates’ skills and competencies before hiring.
              </li>
              <li>
                <span className="font-semibold text-genoa">Video Interviewing Platforms:</span> Our integrated video interview tools make it easy to schedule, conduct, and assess interviews remotely, saving time and resources.
              </li>
              <li>
                <span className="font-semibold text-genoa">Custom Staffing Solutions:</span> Metla tailors its staffing solutions to meet the specific needs of each client, regardless of industry or scale.
              </li>
            </ul>
          </div>

          {/* Benefits of Remote Work Solutions */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
            <h2 className="text-4xl font-bold text-genoa mb-6">Why Remote Work Solutions Matter:</h2>
            <ul className="list-disc pl-6 space-y-4 text-lg text-gray-700 leading-relaxed">
              <li>
                <span className="font-semibold text-genoa">Increased Flexibility:</span> Our platform allows employers to tap into a global talent pool without being limited by geographical boundaries, offering greater flexibility in recruitment.
              </li>
              <li>
                <span className="font-semibold text-genoa">Cost Efficiency:</span> With remote work, businesses can reduce office overheads and associated costs, while benefiting from highly skilled gig workers.
              </li>
              <li>
                <span className="font-semibold text-genoa">Boosted Productivity:</span> Remote workers often report higher job satisfaction and productivity, leading to more efficient outcomes for businesses.
              </li>
              <li>
                <span className="font-semibold text-genoa">Scalable Staffing:</span> Whether you're scaling up for a project or adjusting to market demands, Metla Services provides flexible staffing options to match your business needs.
              </li>
            </ul>
          </div>

          {/* Remote Workforce Management */}
          <div className="bg-gradient-to-br from-white to-emerald-100 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
            <h2 className="text-4xl font-bold text-genoa mb-6">Managing a Remote Workforce with Ease:</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Managing a remote workforce presents its own set of challenges. At Metla, we provide tools to help streamline communication, project management, and performance tracking, ensuring smooth operations even with a fully remote team.
            </p>
            <ul className="list-disc pl-6 space-y-4 text-lg text-gray-700 leading-relaxed mt-4">
              <li>
                <span className="font-semibold text-genoa">Collaboration Tools:</span> Metla integrates with leading project management platforms to ensure seamless collaboration between teams, regardless of location.
              </li>
              <li>
                <span className="font-semibold text-genoa">Performance Monitoring:</span> We offer real-time performance analytics to help businesses track productivity and ensure deliverables are met on time.
              </li>
              <li>
                <span className="font-semibold text-genoa">Compliance and Payroll Solutions:</span> We provide assistance with payroll management and ensure compliance with local regulations when hiring international workers.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GigEconomy;
