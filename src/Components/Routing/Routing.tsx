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
import BFSI from "../ServingIndustry/IndustrySectionsFolder/BFSI";
import Ecommerce from "../ServingIndustry/IndustrySectionsFolder/Ecommerce";
import EducationTraining from "../ServingIndustry/IndustrySectionsFolder/EducationTraining";
import Finance from "../ServingIndustry/IndustrySectionsFolder/Finance";
import FMCD from "../ServingIndustry/IndustrySectionsFolder/FMCD";
import Hospital from "../ServingIndustry/IndustrySectionsFolder/Hospital";
import HotelAndHospitality from "../ServingIndustry/IndustrySectionsFolder/HotelAndHospitality";
import Insurance from "../ServingIndustry/IndustrySectionsFolder/Insurance";
import MediaEntertainment from "../ServingIndustry/IndustrySectionsFolder/MediaEntertainment";
import RealEstate from "../ServingIndustry/IndustrySectionsFolder/RealEstate";
import RenewableEnergy from "../ServingIndustry/IndustrySectionsFolder/RenewableEnergy";
import Retail from "../ServingIndustry/IndustrySectionsFolder/Retail";
import Telecom from "../ServingIndustry/IndustrySectionsFolder/Telecom";

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

  const servingIndustry = [
    { path: 'bfsi', component: BFSI },
    { path: 'ecommerce', component: Ecommerce },
    { path: 'education-training', component: EducationTraining },
    { path: 'finance', component: Finance },
    { path: 'renewable-energy', component: RenewableEnergy },
    { path: 'talent-management', component: FMCD },
    { path: 'hospital', component: Hospital },
    { path: 'hotel-hospitality', component: HotelAndHospitality },
    { path: 'telecom', component: Telecom },
    { path: 'retail', component: Retail },
    { path: 'insurance', component: Insurance },
    { path:'real-estate',component:RealEstate},
    { path: 'media-entertainment', component: MediaEntertainment },
  ];

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/enquiries/employer" element={<ContactUs />} />
      <Route path="/enquiries/employee" element={<GetInTouch />} />
      <Route path="/navblog" element={<Navblog />} />
      
      <Route path="/">
        {servingIndustry.map(({ path, component: Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Route>
      <Route path="/">
        {serviceRoutes.map(({ path, component: Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Route>



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
