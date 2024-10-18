// routing.tsx
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
import {
  AdminLogin,
  ForgotPassword,
  Register,
} from "../Authentication/AdminLogin/AdminAuth";
import Dashboard from "../Admin/Dashboard";
import { useAppSelector } from "../Redux-Hooks/hooks";
import Unauthorized from "../Others/Unauthorized";
import AddJob from "../Admin/AdddJobs";
import JobsList from "../Admin/ViewJobs";
import EditJob from "../Admin/EditJob";
import { VerifyOtp } from "../Authentication/UserLogin/UserAuth";
import UserDashboard from "../User/Dashboard";
import Profile from "../User/Profile";
import PermanentStaffingSolution from "../Services/PermanentStaffing";
import RequireOtpVerification from "../User/RequireOtpVerification"; // Adjust the path as needed
import ViewQueries from "../Admin/Queries";
import ViewApplications from "../Admin/Applications";
import GetInTouch from "../Contact/GetInTouch";
import CameraCapture from "../ChatBot/Scanner";
import Hospital from "../ServingIndustry/IndustrySectionsFolder/Hospital";
import HotelAndHospitality from "../ServingIndustry/IndustrySectionsFolder/HotelAndHospitality";
import EducationTraining from "../ServingIndustry/IndustrySectionsFolder/EducationTraining";
import Finance from "../ServingIndustry/IndustrySectionsFolder/Finance";
import RenewableEnergy from "../ServingIndustry/IndustrySectionsFolder/RenewableEnergy";
import Insurance from "../ServingIndustry/IndustrySectionsFolder/Insurance";
import Ecommerce from "../ServingIndustry/IndustrySectionsFolder/Ecommerce";
import Retail from "../ServingIndustry/IndustrySectionsFolder/Retail";
import RealEstate from "../ServingIndustry/IndustrySectionsFolder/RealEstate";
import GigEconomy from "../ServingIndustry/FuturisticServicesFolder/GigEconomy";
import SkillAssesment from "../ServingIndustry/FuturisticServicesFolder/SkillAssesment";
import FuturisticServicesInnovations from "../ServingIndustry/FuturisticServicesFolder/FuturisticServicesInnovations";
import BFSI from "../ServingIndustry/IndustrySectionsFolder/BFSI";
import EngineeringManufacturing from "../ServingIndustry/IndustrySectionsFolder/EngineeringManufacturing";
import Infrastructure from "../ServingIndustry/IndustrySectionsFolder/Infrastructure";
import FMCD from "../ServingIndustry/IndustrySectionsFolder/FMCD";
import Telecom from "../ServingIndustry/IndustrySectionsFolder/Telecom";
import MediaEntertainment from "../ServingIndustry/IndustrySectionsFolder/MediaEntertainment";
import TalentAquisition from "../BlogSection/BlogFolder/TalentAquisition";
import ManpowerPlanning from "../BlogSection/BlogFolder/ManpowerPlanning";
import EmployeeEngagement from "../BlogSection/BlogFolder/EmployeeEngagement";
import PayrollOutsource from "../Services/PayrollOutsource";
import TemporaryManpower from "../Services/TemporaryManpower";
import IndustryWise from "../Services/IndustryWise";
import Navblog from "../Navblog/Navblog";
import BulkHiring from "../Services/BulkHiring";
import Blog1 from "../Navblog/BlogFolders/Blog1";
import Blog2 from "../Navblog/BlogFolders/Blog2";

const Routing: React.FC = () => {
  const { admin, isAuth } = useAppSelector((state) => state.admin);
  const isAdmin = isAuth && admin?.userType === "Admin";
  const { user, isUserAuth } = useAppSelector((state) => state.user);
  const isUser = isUserAuth && user?.userType === "User";

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/enquiries/employer" element={<ContactUs />} />
      <Route path="/enquiries/employee" element={<GetInTouch />} />


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
        


      <Route path="/services">
        <Route path="contract-staffing" element={<ContractStaffing />} />
        <Route path="it-staffing" element={<ITStaffingSolutions />} />
        <Route path="executive-search" element={<ExecutiveSearch />} />
        <Route path="software-solutions" element={<SoftwareSolutions />} />
        <Route path="outplacement" element={<GlobalPlacements />} />
        <Route path="talent-management" element={<TalentAcquisition />} />
        <Route path="hr-consultancy" element={<HRConsulting />} />
        <Route path="contact" element={<BulkHiring/>} />
        <Route path="contact" element={<PayrollOutsource/>} />
        <Route path="contact" element={<TemporaryManpower/>} />
        <Route path="contact" element={<IndustryWise/>} />
        <Route
          path="permanent-staffing"
          element={<PermanentStaffingSolution />}
        />
      </Route>
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/about" element={<AboutUsPage />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/jobs" element={<JobListings />} />
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin/forgot-password" element={<ForgotPassword />} />
      <Route path="/admin/register" element={<Register />} />
      <Route
        path="/admin/dashboard"
        element={isAdmin ? <Dashboard /> : <Unauthorized />}
      />
      <Route
        path="/admin/add-job"
        element={isAdmin ? <AddJob /> : <Unauthorized />}
      />
      <Route
        path="/admin/view-jobs"
        element={isAdmin ? <JobsList /> : <Unauthorized />}
      />
      <Route
        path="/jobs/edit/:id"
        element={isAdmin ? <EditJob /> : <Unauthorized />}
      />
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
      <Route
        path="/profile/:id"
        element={isUser ? <Profile /> : <Unauthorized />}
      />
      <Route
        path="/admin/view-queries"
        element={isAdmin ? <ViewQueries /> : <Unauthorized />}
      />
      <Route
        path="/admin/applications"
        element={isAdmin ? <ViewApplications /> : <Unauthorized />}
      />
      <Route path="/user/login" element={<CameraCapture />} />
    </Routes>
  );
};

export default Routing;