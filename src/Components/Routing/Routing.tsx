import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Home/Home";
import ContractStaffing from "../Services/ContractStaffing";
import ITStaffingSolutions from "../Services/ITStaffing";
import ExecutiveSearch from "../Services/ExecutiveSearch";
import SoftwareSolutions from "../Services/SoftwareSolutions";
import GlobalPlacements from "../Services/Outplacement";
import TalentAcquisition from "../Services/TalentManagement";
import HRConsulting from "../Services/HRSolutions";
import ContactUs from "../Contact/ContactForm";
import AboutUsPage from "../AboutUs/AboutUs";
import NotFoundPage from "../Others/NotFound";
import JobListings from "../Jobs/JobBasket";
import { useAppSelector } from "../Redux-Hooks/hooks";
import Unauthorized from "../Others/Unauthorized";
import { VerifyOtp } from "../Authentication/UserLogin/UserAuth";
import UserDashboard from "../User/Dashboard";
import Profile from "../User/Profile";
import PermanentStaffingSolution from "../Services/PermanentStaffing";
import RequireOtpVerification from "../User/RequireOtpVerification";
import GetInTouch from "../Contact/GetInTouch";
import CameraCapture from "../ChatBot/Scanner";
import BulkHiring from "../Services/BulkHiring";
import PayrollOutsource from "../Services/PayrollOutsource";
import TemporaryManpower from "../Services/TemporaryManpower";
import IndustryWise from "../Services/IndustryWise";
import Navblog from "../Navblog/Navblog";
import FetchParticularBlog from "../Navblog/BlogFolders/FetchParticularBlog";

const Routing: React.FC = () => {
  const { user, isUserAuth } = useAppSelector((state) => state.user);
  const isUser = isUserAuth && user?.userType === "User";

  const serviceRoutes = [
    { path: 'contract-staffing', component: ContractStaffing },
    { path: 'it-staffing', component: ITStaffingSolutions },
    { path: 'executive-search', component: ExecutiveSearch },
    { path: 'software-solutions', component: SoftwareSolutions },
    { path: 'outplacement', component: GlobalPlacements },
    { path: 'talent-management', component: TalentAcquisition },
    { path: 'hr-consultancy', component: HRConsulting },
    { path: 'contact/bulk-hiring', component: BulkHiring },
    { path: 'contact/payroll-outsource', component: PayrollOutsource },
    { path: 'contact/temporary-manpower', component: TemporaryManpower },
    { path: 'contact/industry-wise', component: IndustryWise },
    { path: 'permanent-staffing', component: PermanentStaffingSolution },
  ];

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/enquiries/employer" element={<ContactUs />} />
      <Route path="/enquiries/employee" element={<GetInTouch />} />
<<<<<<< HEAD


      <Route path="/navblog" element={<Navblog/>} />

        <Route path="/hospital" element={<Hospital />} />
        <Route  path="/hotel-hospitality"  element={<HotelAndHospitality />}  />
        <Route  path="/education-training"  element={<EducationTraining />}   />
        <Route path="/finance" element={<Finance />} />
        <Route path="/renewable-energy" element={<RenewableEnergy />} />
        <Route path="/insurance" element={<Insurance />} />
        <Route path="/ecommerce" element={<Ecommerce />} />
        <Route path="/retail" element={<Retail />} />
        <Route path="/real-estate" element={<RealEstate />} /> 

        <Route path="/bfsi" element={<BFSI/>} />
        <Route path="/engineering-manufacturing" element={<EngineeringManufacturing/>} />
        <Route path="/media-entertainment" element={<MediaEntertainment/>} />
        <Route path="/infrastructure" element={<Infrastructure/>} />
        <Route path="/fmcd" element={<FMCD/>} />
        <Route path="/telecom" element={<Telecom/>} />


        <Route path="/talentAquisition" element={<TalentAquisition/>} />
        <Route path="/manpowerPlanning" element={<ManpowerPlanning/>} />
        <Route path="/employeeEngagement" element={<EmployeeEngagement/>} />


        <Route path="/blog1" element={<Blog1/>} />
        <Route path="/blog2" element={<Blog2/>} />



      <Route path="/futuristicServiceInnovations" element={<FuturisticServicesInnovations/>} />
      <Route path="/gigeconomy" element={<GigEconomy/>} />
      <Route path="/skillassesment" element={<SkillAssesment/>} />
        

{/* 
      <Route path="/services"> */}
        <Route path="contract-staffing" element={<ContractStaffing />} />
        <Route path="it-staffing" element={<ITStaffingSolutions />} />
        <Route path="executive-search" element={<ExecutiveSearch />} />
        <Route path="software-solutions" element={<SoftwareSolutions />} />
        <Route path="outplacement" element={<GlobalPlacements />} />
        <Route path="talent-management" element={<TalentAcquisition />} />
        <Route path="hr-consultancy" element={<HRConsulting />} />
        <Route path="bulk-hiring" element={<BulkHiring/>} />
        <Route path="payroll-outsource" element={<PayrollOutsource/>} />
        <Route path="temporary-manpower" element={<TemporaryManpower/>} />
        <Route path="industry-wise-staffing" element={<IndustryWise/>} />
        <Route
          path="permanent-staffing"
          element={<PermanentStaffingSolution />}
        />
      {/* </Route> */}
=======
      <Route path="/navblog" element={<Navblog />} />
      
      <Route path="/services">
        {serviceRoutes.map(({ path, component: Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Route>

>>>>>>> 05e0032dd0264debf1ab4536307aeb8ec330a18e
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/about" element={<AboutUsPage />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/jobs" element={<JobListings />} />
      <Route
        path="/user/verify-otp/:email"
        element={isUser ? <VerifyOtp /> : <Unauthorized />}
      />
      <Route
        path="/user/dashboard/:email"
        element={
          <RequireOtpVerification>
            {isUser ? <UserDashboard /> : <Unauthorized />}
          </RequireOtpVerification>
        }
      />
      <Route path="/profile/:id" element={isUser ? <Profile /> : <Unauthorized />} />
      <Route path="/user/login" element={<CameraCapture />} />
      <Route path="blog/:id" element={<FetchParticularBlog />} />
    </Routes>
  );
};

export default Routing;
