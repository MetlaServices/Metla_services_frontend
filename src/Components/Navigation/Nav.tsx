import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import { Menu, Dropdown, Drawer, Button } from 'antd';
import { DownOutlined, MenuOutlined, CloseOutlined } from '@ant-design/icons';
import Logo from '../../assets/Logo/logo.svg';
import gsap from 'gsap';

const services = [
  { name: 'Contract Staffing', path: '/services/contract-staffing' },
  { name: 'IT Staffing', path: '/services/it-staffing' },
  { name: 'Executive Search', path: '/services/executive-search' },
  { name: 'Software Solutions', path: '/services/software-solutions' },
  { name: 'Talent Management', path: '/services/talent-management' },
  { name: 'Permanent Staffing', path: '/services/permanent-staffing' },
];

const enquiries = [
  { name: 'Employee Enquiry', path: '/enquiries/employee' },
  { name: 'Employer Enquiry', path: '/enquiries/employer' },
];

const Nav: React.FC = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 0.6, ease: 'power3.out' } });

    if (linksRef.current) {
      const links = linksRef.current.querySelectorAll('a, button');

      gsap.set(links, { y: -50, opacity: 0 });

      tl.to(links[0], {
        y: 0,
        opacity: 1,
        duration: 0.6,
      });

      tl.to(links, {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        delay: 1,
      }, '-=0.6');
    }
  }, []);

  const handleDrawerClose = () => {
    setDrawerVisible(false);
  };

  const handleLinkClick = () => {
    setDrawerVisible(false);
  };

  const servicesMenu = (
    <Menu>
      {services.map((service) => (
        <Menu.Item key={service.path}>
          <Link to={service.path} onClick={handleLinkClick}>
            {service.name}
          </Link>
        </Menu.Item>
      ))}
    </Menu>
  );

  const enquiryMenu = (
    <Menu>
      {enquiries.map((enquiry) => (
        <Menu.Item key={enquiry.path}>
          <Link to={enquiry.path} onClick={handleLinkClick}>
            {enquiry.name}
          </Link>
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <nav className="bg-stone-200 text-[black] shadow-md sticky top-0 z-50 navbar">
      {/* Info Bar */}
      <div className="w-full bg-emerald-600 h-auto flex items-center justify-end gap-4 px-4 py-2 text-black text-xs md:text-sm">
        <p className="flex items-center space-x-2">
          <FaEnvelope className="text-base md:text-lg" />
          <span>info@metlaservices.com</span>
        </p>
        <p className="flex items-center space-x-2">
          <FaPhone className="text-base md:text-lg" />
          <span>+919289586627</span>
        </p>
      </div>

      {/* Navbar */}
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img src={Logo} alt="Metla Services Logo" className="h-[30px] object-contain" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center" ref={linksRef}>
            <Link to="/" className="text-lg font-semibold transition duration-300 flex items-center hover:text-yellow-500 hover:underline">
              Home
            </Link>
            <Link to="/about" className="text-lg font-semibold transition duration-300 flex items-center hover:text-yellow-500 hover:underline">
              About
            </Link>
            <Dropdown overlay={servicesMenu} trigger={['click']} className="relative">
              <Button className="text-lg font-semibold transition duration-300 bg-transparent border-none flex items-center hover:text-yellow-500">
                Services <DownOutlined />
              </Button>
            </Dropdown>

            <Link to="/contact" className="text-lg font-semibold transition duration-300 flex items-center hover:text-yellow-500 hover:underline">
              Contact
            </Link>
            <Dropdown overlay={enquiryMenu} trigger={['hover']} className="relative">
              <Button className="text-lg font-semibold transition duration-300 bg-transparent border-none flex items-center hover:text-yellow-500">
                Enquiry <DownOutlined />
              </Button>
            </Dropdown>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <div
              className="flex items-center justify-center w-12 h-12 text-black rounded-full cursor-pointer transition duration-300"
              onClick={() => setDrawerVisible(true)}
              aria-label="Open menu"
            >
              <MenuOutlined className="text-2xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={handleDrawerClose}
        open={drawerVisible}
        className="bg-[#003B5C] text-[#57534e] transition-transform duration-300"
        closeIcon={<CloseOutlined className="text-[#57534e]" />}
        maskStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} // Add background overlay
      >
        <div className="space-y-4 text-[#57534e]" ref={linksRef}>
          <Link to="/" className="text-lg font-semibold px-3 py-2 rounded-md flex items-center hover:text-yellow-500 hover:underline" onClick={handleLinkClick}>
            Home
          </Link>
          <Link to="/about" className="text-lg font-semibold px-3 py-2 rounded-md flex items-center hover:text-yellow-500 hover:underline" onClick={handleLinkClick}>
            About
          </Link>
          <Dropdown overlay={servicesMenu} trigger={['click']} className="relative">
            <Button className="text-lg font-semibold px-3 py-2 rounded-md flex items-center hover:text-yellow-500" onClick={(e) => e.preventDefault()}>
              Services <DownOutlined />
            </Button>
          </Dropdown>

          <Link to="/contact" className="text-lg font-semibold px-3 py-2 rounded-md flex items-center hover:text-yellow-500 hover:underline" onClick={handleLinkClick}>
            Contact
          </Link>
          <Dropdown overlay={enquiryMenu} trigger={['click']} className="relative">
            <Button className="text-lg font-semibold px-3 py-2 rounded-md flex items-center hover:text-yellow-500" onClick={(e) => e.preventDefault()}>
              Enquiry <DownOutlined />
            </Button>
          </Dropdown>
        </div>
      </Drawer>
    </nav>
  );
};

export default Nav;
