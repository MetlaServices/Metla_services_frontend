
import { Link } from 'react-router-dom';
import { FaShieldAlt, FaUserShield, FaClipboardCheck, FaHandsHelping } from 'react-icons/fa';

const Insurance= () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#F3EED8' }}>
      {/* Header Section */}
      <header style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#8B5A2B', color: 'white', padding: '100px 20px', position: 'relative', textAlign: 'center' }}>
        <div style={{ position: 'absolute', top: '0', left: '0', right: '0', bottom: '0', backgroundColor: '#3E2723', opacity: '0.5' }} />
        <h1 style={{ fontSize: '4rem', fontWeight: 'bold', marginBottom: '16px', zIndex: 1 }}>Insurance Staffing Solutions</h1>
        <p style={{ fontSize: '1.5rem', maxWidth: '800px', marginBottom: '24px', zIndex: 1 }}>
          Connecting you with exceptional talent in the insurance industry.
        </p>
        <Link 
          to='/contact' 
          style={{ marginTop: '24px', backgroundColor: '#A0522D', color: 'white', padding: '15px 30px', borderRadius: '9999px', boxShadow: '0 4px 10px rgba(0,0,0,0.3)', fontWeight: 'bold', textDecoration: 'none', zIndex: 1 }}>
          Contact Us
        </Link>
      </header>

      {/* Main Content Section */}
      <main style={{ flexGrow: 1, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '40px 20px' }}>
        
        {/* Unique Staffing Approach Section */}
        <section style={{ width: '100%', maxWidth: '800px', backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 2px 15px rgba(0,0,0,0.2)', padding: '50px 30px', marginBottom: '30px', textAlign: 'center', position: 'relative' }}>
          <div style={{ position: 'absolute', top: '0', left: '0', right: '0', bottom: '0', backgroundColor: '#FFEB3B', opacity: '0.15', borderRadius: '12px' }} />
          <h2 style={{ fontSize: '2.8rem', fontWeight: 'bold', color: '#8B5A2B', marginBottom: '16px', zIndex: 1 }}>Tailored Staffing, Exceptional Results</h2>
          <p style={{ fontSize: '1.2rem', color: '#555', marginBottom: '20px', zIndex: 1 }}>
            We connect you with insurance professionals who understand the industry's demands. From claims adjusters to customer service experts, our tailored staffing solutions ensure your business thrives.
          </p>
          <Link 
            to='/learn-more' 
            style={{ backgroundColor: '#A0522D', color: 'white', padding: '12px 24px', borderRadius: '9999px', boxShadow: '0 4px 10px rgba(0,0,0,0.3)', textDecoration: 'none' }}>
            Learn More
          </Link>
        </section>

        {/* Key Benefits Section */}
        <section style={{ width: '100%', maxWidth: '800px', backgroundColor: '#FAF3E0', borderRadius: '12px', boxShadow: '0 2px 15px rgba(0,0,0,0.2)', padding: '50px 30px', marginBottom: '30px', position: 'relative' }}>
          <h2 style={{ fontSize: '2.8rem', fontWeight: 'bold', color: '#8B5A2B', marginBottom: '16px', textAlign: 'center', zIndex: 1 }}>Why Choose Us?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', marginTop: '20px', zIndex: 1 }}>
            {[ 
              { icon: <FaShieldAlt style={{ color: '#8B5A2B', fontSize: '4rem' }} />, title: "Expertise at Your Fingertips", description: "With our in-depth understanding of the insurance landscape, we connect you with the best talent." },
              { icon: <FaUserShield style={{ color: '#8B5A2B', fontSize: '4rem' }} />, title: "Rigorous Vetting", description: "Our thorough screening process ensures that only the most qualified candidates are presented." },
              { icon: <FaClipboardCheck style={{ color: '#8B5A2B', fontSize: '4rem' }} />, title: "Personalized Solutions", description: "We tailor our approach to meet the unique needs of your organization." },
              { icon: <FaHandsHelping style={{ color: '#8B5A2B', fontSize: '4rem' }} />, title: "Ongoing Partnership", description: "We're dedicated to supporting you throughout the hiring process and beyond." },
            ].map((item, index) => (
              <div key={index} style={{ display: 'flex', alignItems: 'start', padding: '20px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
                {item.icon}
                <div style={{ marginLeft: '16px' }}>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#8B5A2B' }}>{item.title}</h3>
                  <p style={{ color: '#555' }}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Industry Impact Section */}
        <section style={{ width: '100%', maxWidth: '800px', backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 2px 15px rgba(0,0,0,0.2)', padding: '50px 30px', marginBottom: '30px', textAlign: 'center', position: 'relative' }}>
          <h2 style={{ fontSize: '2.8rem', fontWeight: 'bold', color: '#8B5A2B', marginBottom: '16px', zIndex: 1 }}>Driving Success in Insurance</h2>
          <p style={{ fontSize: '1.2rem', color: '#555', marginBottom: '20px', zIndex: 1 }}>
            Partnering with us allows you to enhance customer service, increase operational efficiency, and build lasting trust. Together, we can navigate the competitive insurance market and position your business for success.
          </p>
        </section>

        {/* Call to Action Section */}
        <section style={{ width: '100%', maxWidth: '800px', backgroundColor: '#FFEB3B', borderRadius: '12px', boxShadow: '0 2px 15px rgba(0,0,0,0.2)', padding: '50px 30px', marginBottom: '30px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.8rem', fontWeight: 'bold', color: '#8B5A2B', marginBottom: '16px' }}>Ready to Transform Your Team?</h2>
          <p style={{ fontSize: '1.2rem', color: '#555', marginBottom: '20px' }}>
            Unlock your potential with Metla Services. Our dedicated staffing solutions are just a click away.
          </p>
          <Link 
            to='/contact' 
            style={{ backgroundColor: '#A0522D', color: 'white', padding: '12px 24px', borderRadius: '9999px', boxShadow: '0 4px 10px rgba(0,0,0,0.3)', textDecoration: 'none' }}>
            Start Your Journey
          </Link>
        </section>
      </main>

      {/* Footer Section */}
      <footer style={{ backgroundColor: '#8B5A2B', color: 'white', padding: '20px' }}>
        <div style={{ textAlign: 'center' }}>
          <p>&copy; {new Date().getFullYear()} Metla Services. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Insurance;
