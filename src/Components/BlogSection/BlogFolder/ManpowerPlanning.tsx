const ManpowerPlanning = () => {
    return (
      <div className="container mx-auto px-6 py-12 bg-gray-50">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-[#147971] leading-tight">
            Navigating HR Challenges in Manpower Planning
          </h1>
          <p className="text-lg mt-4 text-gray-700 max-w-2xl mx-auto">
            Comprehensive insights into manpower planning challenges and solutions for organizational sustainability.
          </p>
        </header>
  
        <section className="mb-12">
          <h2 className="text-4xl font-semibold text-[#147971] mb-6 border-b-2 border-[#147971] pb-2">
            Why Effective Manpower Planning Matters
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[#147971] mb-2">Strategic Alignment</h3>
              <p className="text-gray-600 leading-relaxed">
                Aligning manpower planning with organizational goals ensures that the right talent is in place to meet business objectives.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[#147971] mb-2">Cost Efficiency</h3>
              <p className="text-gray-600 leading-relaxed">
                Effective planning minimizes hiring costs and reduces the risk of overstaffing or understaffing.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[#147971] mb-2">Employee Retention</h3>
              <p className="text-gray-600 leading-relaxed">
                By identifying skill gaps and planning for training, organizations can improve employee satisfaction and retention rates.
              </p>
            </div>
          </div>
        </section>
  
        <section className="mb-12">
          <h2 className="text-4xl font-semibold text-[#147971] mb-6 border-b-2 border-[#147971] pb-2">
            Challenges in Manpower Planning
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[#147971] mb-2">Changing Market Demands</h3>
              <p className="text-gray-600 leading-relaxed">
                Organizations must adapt to rapidly changing market conditions and the evolving needs of the workforce.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[#147971] mb-2">Skill Shortages</h3>
              <p className="text-gray-600 leading-relaxed">
                Difficulty in finding candidates with the required skills can hinder business growth and innovation.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[#147971] mb-2">Technology Integration</h3>
              <p className="text-gray-600 leading-relaxed">
                Integrating new technologies in the workforce can pose challenges in training and adaptation for employees.
              </p>
            </div>
          </div>
        </section>
  
        <section className="mb-12">
          <h2 className="text-4xl font-semibold text-[#147971] mb-6 border-b-2 border-[#147971] pb-2">
            Best Practices for Effective Manpower Planning
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[#147971] mb-2">Data-Driven Decisions</h3>
              <p className="text-gray-600 leading-relaxed">
                Utilize data analytics to forecast workforce needs and identify skill gaps proactively.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[#147971] mb-2">Continuous Learning</h3>
              <p className="text-gray-600 leading-relaxed">
                Foster a culture of continuous learning and development to keep skills aligned with market demands.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[#147971] mb-2">Collaborative Planning</h3>
              <p className="text-gray-600 leading-relaxed">
                Engage various departments in the manpower planning process to ensure alignment across the organization.
              </p>
            </div>
          </div>
        </section>
  
        <footer className="mt-12 text-center border-t pt-8 border-gray-200">
          <p className="text-lg text-gray-700 mb-4 max-w-3xl mx-auto">
            Mastering the art of manpower planning is essential for organizations aiming to thrive in today’s competitive market. At Metla Services, we are dedicated to overcoming HR challenges and building a sustainable workforce.
          </p>
          <p className="mt-4 text-gray-600">
            <a
              href="/contact"
              className="inline-block bg-[#147971] text-white font-semibold py-2 px-4 rounded hover:bg-[#0d5f4d] transition duration-300"
            >
              Contact Us
            </a> 
            to learn more about our manpower planning strategies and how we can assist your organization.
          </p>
        </footer>
      </div>
    );
  };
  
  export default ManpowerPlanning;
  