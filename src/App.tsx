import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Nav from './Components/Navigation/Nav';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Routing from './Components/Routing/Routing';
import Footer from './Components/Footer/Footer';
import Chat from './Components/ChatBot/ChatBot';
import PopupForm from './Components/PopupForm/PopUpForm';

function App() {
  const location = useLocation();
  const [isPopupVisible, setIsPopupVisible] = useState(true); // Show the popup initially
  const [isFormFilled, setIsFormFilled] = useState(false); // State to track if the form is filled

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const handlePopupClose = () => {
    if (!isFormFilled) { // Only allow closing if the form is filled
      setIsPopupVisible(false); // Close the popup
    } else {
      // Optionally, you can display a message or handle other logic here
      console.log("Form needs to be filled out before closing.");
    }
  };

  return (
    <>
      <Nav />
      <Routing />
      <Chat />
      <Footer />
      <PopupForm 
        visible={isPopupVisible} 
        onClose={handlePopupClose} 
        setIsFormFilled={setIsFormFilled} // Pass the setter function
      />
    </>
  );
}

export default App;
