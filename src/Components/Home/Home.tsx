<<<<<<< HEAD

=======
// src/pages/HomePage.tsx
>>>>>>> e3c761706892c44b54d9d20b26859b5ff0b509cc
import React, { useEffect } from 'react';
import 'antd/dist/reset.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import 'gsap/dist/ScrollTrigger';
import { SecondComponent } from './SecondComp';
import CarouselEffect from './Carosuel';
import HowItWorks from '../Working/Howworks';
import IndustryCards from '../ServingIndustry/ServiceIndustry';
import FuturisticServices from '../ServingIndustry/FuturisticServices';
import FAQ from '../FAQs/Faq';
import BlogSection from '../BlogSection/OurBlog';
import Testimonials from '../Testimonials/Testimonials';
import Achievements from '../Achievements/Achievements';
import GetInTouch from '../Contact/GetInTouch';

const HomePage: React.FC = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // GSAP Animations
    gsap.from('.carousel img', {
      opacity: 0,
      duration: 1,
      y: 50,
      stagger: 0.3,
      scrollTrigger: {
        trigger: '.carousel',
        start: 'top center',
        end: 'bottom center',
        scrub: true,
      },
    });

    gsap.from('.intro-section, .services-section, .cta-section', {
      opacity: 0,
      duration: 1,
      y: 50,
      stagger: 0.3,
      scrollTrigger: {
        trigger: '.intro-section',
        start: 'top center',
        end: 'bottom center',
        scrub: true,
        markers: false,
      },
    });
  }, []);

  return (
    <div className="relative">
  <CarouselEffect/>
  <SecondComponent/>
  <HowItWorks/>
  <IndustryCards/>
  <FuturisticServices/>
  <FAQ/>
  <BlogSection/>
  <Testimonials/>
  <Achievements/>
  <GetInTouch/>
    </div>
  );
};

export default HomePage;
