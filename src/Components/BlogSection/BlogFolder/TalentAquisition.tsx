const TalentAcquisition = () => {
    return (
      <div className="container mx-auto px-6 py-12 bg-gray-50">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-[#147971] leading-tight">
            The Art of Talent Acquisition: <br /> Building Your Dream Team
          </h1>
          <p className="text-lg mt-4 text-gray-700 max-w-2xl mx-auto">
            In today’s rapidly changing business landscape, the quest for exceptional talent is more crucial than ever. Talent acquisition is not just about filling positions; it's about strategically building a workforce that can propel your organization forward.
          </p>
        </header>
  
        {/* What is Talent Acquisition? Card */}
        <div className="mb-12">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-4xl font-semibold text-[#147971] mb-4">
              What is Talent Acquisition?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              Talent acquisition encompasses a holistic approach to recruiting. It begins with workforce planning—understanding the skills and roles needed to achieve strategic goals.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Furthermore, talent acquisition involves continuous engagement with potential candidates, even when there are no immediate openings. This proactive approach ensures that when a position opens, your organization already has a pool of qualified candidates ready to step in.
            </p>
          </div>
        </div>
  
        {/* Why Your Employer Brand Matters Card */}
        <div className="mb-12">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-4xl font-semibold text-[#147971] mb-4">
              Why Your Employer Brand Matters
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              A strong employer brand acts as a magnet for top talent. Companies like Google and Apple attract candidates not just for their products, but for their culture, values, and employee experiences.
            </p>
            <ul className="list-disc list-inside text-lg text-gray-600 leading-relaxed space-y-2">
              <li>Regular events highlighting our commitment to diversity and inclusion.</li>
              <li>Showcasing employee experiences through social media.</li>
              <li>Engaging in community initiatives that resonate with potential hires.</li>
            </ul>
          </div>
        </div>
  
        {/* Crafting Effective Recruitment Strategies Card */}
        <div className="mb-12">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-4xl font-semibold text-[#147971] mb-4">
              Crafting Effective Recruitment Strategies
            </h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-2xl font-semibold text-gray-700 mr-4">1.</span>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-700">Sourcing Candidates</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Diversifying sourcing channels is essential for reaching a broader talent pool. Leveraging platforms such as LinkedIn, industry-specific job boards, and hosting virtual career fairs can significantly enhance visibility.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-2xl font-semibold text-gray-700 mr-4">2.</span>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-700">Streamlining the Application Process</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    A cumbersome application process can deter potential candidates. We prioritize simplicity by allowing one-click applications through LinkedIn profiles, ensuring a smooth experience that keeps candidates engaged.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        {/* Harnessing Technology in Talent Acquisition Card */}
        <div className="mb-12">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-4xl font-semibold text-[#147971] mb-4">
              Harnessing Technology in Talent Acquisition
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              Technology plays a pivotal role in enhancing the efficiency of talent acquisition. Utilizing Applicant Tracking Systems (ATS) can streamline candidate management, while AI-powered tools can analyze resumes and match candidates with roles based on skills and experience.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              For example, integrating chatbots in the initial stages of the application process can provide candidates with immediate responses to their queries, improving their experience and engagement.
            </p>
          </div>
        </div>
  
        {/* Evaluating Recruitment Success Card */}
        <div className="mb-12">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-4xl font-semibold text-[#147971] mb-4">
              Evaluating Recruitment Success
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              To assess the success of our talent acquisition strategies, we focus on key performance indicators (KPIs) such as:
            </p>
            <ul className="list-disc list-inside text-lg text-gray-600 leading-relaxed space-y-2">
              <li>Time-to-fill</li>
              <li>Quality of hire</li>
              <li>Candidate satisfaction scores</li>
            </ul>
            <p className="text-lg text-gray-600 leading-relaxed">
              Regular analysis of these metrics enables us to make data-driven adjustments, ensuring our recruitment process remains agile and effective in meeting organizational needs.
            </p>
          </div>
        </div>
  
        {/* Footer Section */}
        <footer className="mt-12 text-center border-t pt-8 border-gray-200">
          <p className="text-lg text-gray-700 mb-4 max-w-3xl mx-auto">
            Mastering the art of talent acquisition is essential for organizations aiming to thrive in today’s competitive market. At Metla Services, we are dedicated to building our dream team and securing our place as an industry leader through innovative and strategic talent acquisition practices.
          </p>
          <p className="mt-4 text-gray-600">
            <a
              href="/contact"
              className="inline-block bg-[#147971] text-white font-semibold py-2 px-4 rounded hover:bg-[#0d5f4d] transition duration-300"
            >
              Contact Us
            </a> 
            to learn more about our talent acquisition strategies and how we can help you build your dream team.
          </p>
        </footer>
      </div>
    );
  };
  
  export default TalentAcquisition;
  