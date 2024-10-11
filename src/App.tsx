import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Nav from './Components/Navigation/Nav';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Routing from './Components/Routing/Routing';
import Footer from './Components/Footer/Footer';
import Chat from './Components/ChatBot/ChatBot';
import PopupForm from './Components/PopupForm/PopUpForm'; // Make sure to import your PopupForm component

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



  return (
    <>

      <Nav />
      
      <Routing />
      <Chat />
      <Footer />
      <PopupForm visible={isPopupVisible} onClose={handlePopupClose} />
    </>
  );
}

export default App;
