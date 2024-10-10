import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Nav from './Components/Navigation/Nav';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Routing from './Components/Routing/Routing';
import Footer from './Components/Footer/Footer';
import Chat from './Components/ChatBot/ChatBot';
import PopupForm from './Components/PopupForm/PopUpForm'; // Make sure to import your PopupForm component
import { Helmet } from 'react-helmet';

function App() {
  const location = useLocation();
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    // Open the popup form automatically when the component mounts
    setIsPopupVisible(true);
  }, []);

  const handlePopupClose = () => {
    setIsPopupVisible(false);
  };

  const getCanonicalUrl = () => {
    switch (location.pathname) {
      case '/about':
        return 'https://www.metlaservices.com/about';
      case '/services/contract-staffing':
        return 'https://www.metlaservices.com/services/contract-staffing';
      case 'services/it-staffing':
        return 'https://www.metlaservices.com/services/it-staffing';
      case 'services/software-solutions':
        return 'https://www.metlaservices.com/services/software-solutions';
      case 'services/talent-management':
          return 'https://www.metlaservices.com/services/talent-management';
      case '/contact':
        return 'https://www.metlaservices.com/contact';
      default:
        return `https://www.metlaservices.com${location.pathname}`;
    }
  };

  return (
    <>
    <Helmet>
        <link rel="canonical" href={getCanonicalUrl()} />
        <title>Best Recruitment Agency</title>
      </Helmet>
      <Nav />
      
      <Routing />
      <Chat />
      <Footer />
      <PopupForm visible={isPopupVisible} onClose={handlePopupClose} />
    </>
  );
}

export default App;
