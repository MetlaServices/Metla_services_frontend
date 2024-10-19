import { Link } from "react-router-dom";

const EmployeeEngagement = () => {
    return (
      <div className="container mx-auto px-6 py-12 bg-gray-50">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-[#147971] leading-tight">
            The Power of Employee Engagement: Fueling Productivity and Retention
          </h1>
          <p className="text-lg mt-4 text-gray-700 max-w-2xl mx-auto">
            Explore the importance of employee engagement as a critical factor influencing productivity and retention.
          </p>
        </header>
  
        <section className="mb-12">
          <h2 className="text-4xl font-semibold text-[#147971] mb-6 border-b-2 border-[#147971] pb-2">
            Why Employee Engagement Matters
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[#147971] mb-2">Increased Productivity</h3>
              <p className="text-gray-600 leading-relaxed">
                Engaged employees are more motivated and productive, directly impacting the organization's overall performance.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[#147971] mb-2">Enhanced Retention</h3>
              <p className="text-gray-600 leading-relaxed">
                Companies with high employee engagement rates experience lower turnover rates, saving costs associated with hiring and training.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[#147971] mb-2">Improved Team Dynamics</h3>
              <p className="text-gray-600 leading-relaxed">
                Engagement fosters better collaboration and communication within teams, leading to a positive work environment.
              </p>
            </div>
          </div>
        </section>
  
        <section className="mb-12">
          <h2 className="text-4xl font-semibold text-[#147971] mb-6 border-b-2 border-[#147971] pb-2">
            Key Drivers of Employee Engagement
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[#147971] mb-2">Clear Communication</h3>
              <p className="text-gray-600 leading-relaxed">
                Open channels of communication help employees feel heard and valued, fostering a sense of belonging.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[#147971] mb-2">Recognition and Rewards</h3>
              <p className="text-gray-600 leading-relaxed">
                Regular recognition and rewards for hard work boost morale and motivate employees to excel.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[#147971] mb-2">Opportunities for Growth</h3>
              <p className="text-gray-600 leading-relaxed">
                Providing training and development opportunities encourages employees to enhance their skills and advance in their careers.
              </p>
            </div>
          </div>
        </section>
  
        <section className="mb-12">
          <h2 className="text-4xl font-semibold text-[#147971] mb-6 border-b-2 border-[#147971] pb-2">
            Best Practices for Fostering Employee Engagement
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[#147971] mb-2">Regular Feedback</h3>
              <p className="text-gray-600 leading-relaxed">
                Conducting regular performance reviews and feedback sessions keeps employees informed about their progress and areas for improvement.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[#147971] mb-2">Employee Involvement</h3>
              <p className="text-gray-600 leading-relaxed">
                Involve employees in decision-making processes to make them feel more connected and invested in the organization's success.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[#147971] mb-2">Work-Life Balance</h3>
              <p className="text-gray-600 leading-relaxed">
                Promote a healthy work-life balance to enhance employee well-being and job satisfaction.
              </p>
            </div>
          </div>
        </section>
  
        <footer className="mt-12 text-center border-t pt-8 border-gray-200">
          <p className="text-lg text-gray-700 mb-4 max-w-3xl mx-auto">
            At Metla Services, we understand that employee engagement is not just a buzzword; it's a vital aspect of our organizational culture. By prioritizing engagement, we foster a productive and thriving workplace where employees feel valued and motivated.
          </p>
          <p className="mt-4 text-gray-600">
            <Link
              to="/contact"
              className="inline-block bg-[#147971] text-white font-semibold py-2 px-4 rounded hover:bg-[#0d5f4d] transition duration-300"
            >
              Contact Us
            </Link> 
            to learn more about our employee engagement initiatives and how we can help your organization achieve its goals.
          </p>
        </footer>
      </div>
    );
  };
  
  export default EmployeeEngagement;  