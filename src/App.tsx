import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Nav from './Components/Navigation/Nav';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Routing from './Components/Routing/Routing';
import Footer from './Components/Footer/Footer';
import Chat from './Components/ChatBot/ChatBot';

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);




  return (
    <>

      <Nav />
      
      <Routing />
      <Chat />
      <Footer />
      {/* <PopupForm visible={isPopupVisible} onClose={handlePopupClose} /> */}
    </>
  );
}

export default App;
