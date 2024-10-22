import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import { Menu, Dropdown, Drawer, Button } from 'antd';
import { DownOutlined, MenuOutlined, CloseOutlined } from '@ant-design/icons';
import Logo from '../../assets/Logo/logo.svg';

const services = [
  { name: 'Contract Staffing', path: '/contract-staffing' },
  { name: 'Permanent Staffing', path: '/permanent-staffing' },
  { name: 'Payroll Outsource', path: '/contact' },
  { name: 'Temporary Manpower', path: '/contact' },
  { name: 'Bulk Hiring', path: '/contact' },
  { name: 'Industries Wise staffing', path: '/contact' },
  { name: 'IT Staffing', path: '/it-staffing' },
  { name: 'Executive Search', path: '/executive-search' },
  { name: 'Software Solutions', path: '/software-solutions' },
  { name: 'Talent Management', path: '/talent-management' },
];

const enquiries = [
  { name: 'Employee Enquiry', path: '/enquiries/employee' },
  { name: 'Employer Enquiry', path: '/enquiries/employer' },
];

const Nav: React.FC = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const linksRef = useRef<HTMLDivElement>(null);

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
    <nav className="sticky top-0  bg-white z-[1000]">
      {/* Navbar Container */}
      <div className="container mx-auto px-4">
        {/* Navbar Row */}
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src={Logo} alt="Metla Services Logo" className="h-[20px] object-contain" />
            </Link>
          </div>

          {/* Main Navbar Links */}
          <div className="hidden md:flex space-x-8 items-center" ref={linksRef}>
            <Link
              to="/"
              className="text-lg font-bold px-3 py-2 rounded-md flex items-center hover:text-yellow-500 hover:underline"
              onClick={handleLinkClick}
              style={{ color: 'green' }}
            >
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

            <Link
              to="/navblog"
              className="text-lg font-semibold transition duration-300 flex items-center hover:text-yellow-500 hover:underline"
            >
              Blog
            </Link>

            <div className="hidden md:flex items-center gap-6">
              {/* Email Section */}
              <div className="group relative cursor-pointer flex items-center space-x-2">
                <FaEnvelope className="text-base md:text-lg text-black" />
                <div className="absolute hidden group-hover:block top-full mt-2 right-0 bg-[#c7e6b2] rounded-full shadow-md py-2 px-4 text-xs md:text-sm whitespace-nowrap z-10">
                  info@metlaservices.com
                </div>
              </div>

              {/* Phone Section */}
              <div className="group relative cursor-pointer flex items-center space-x-2">
                <FaPhone className="text-base md:text-lg text-black" />
                <div className="absolute hidden group-hover:block top-full mt-2 right-0 bg-[#c7e6b2] rounded-full shadow-md py-2 px-4 text-xs md:text-sm whitespace-nowrap z-10">
                  +919289586627
                </div>
              </div>
            </div>
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
          <Link
            to="/"
            className="text-lg font-semibold px-3 py-2 rounded-md flex items-center hover:text-yellow-500 hover:underline text-green-500"
            onClick={handleLinkClick}
          >
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
          <Link to="/navblog" className="text-lg font-semibold px-3 py-2 rounded-md flex items-center hover:text-yellow-500 hover:underline" onClick={handleLinkClick}>
            Blogs
          </Link>

        </div>
      </Drawer>
    </nav>
  );
};

export default Nav;
