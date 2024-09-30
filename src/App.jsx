import {
  RouterProvider,
  createBrowserRouter,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import { AppLayout } from "./Layouts/AppLayout";
import Contact from "./pages/Contact";
import Industry from "./pages/Industry";
import BFSIAndFinance from "./pages/BFSIAndFinance";
import Portfolio from "./pages/Portfolio";
import Career from "./pages/Career";
import OpenRoles from "./pages/OpenRoles";
import CommunityEngagement from "./pages/CommunityEngagement";
import LifeAtAltumind from "./pages/LifeAtAltumind";
import Alliance from "./pages/Alliance";
import ExperienceDesign from "./pages/ExperienceDesign";
import AIandAutomation from "./pages/AIandAutomation";
import QAandTesting from "./pages/QAandTesting";
import DigitalMarketingServices from "./pages/DigitalMarketingServices";
import TechnologyAndEngineering from "./pages/TechnologyAndEngineering";
import DataAnalytics from "./pages/DataAnalytics";
import ManagedOperations from "./pages/ManagedOperations";
import Services from "./pages/Services";
import DigitalStrategy from "./pages/DigitalStrategy";
import CloudServices from "./pages/CloudServices";
import MissionAndVision from "./pages/MissionAndVision";
import Leadership from "./pages/Leadership";
import AboutUs from "./pages/AboutUs";
import Error404 from "./pages/Error404";
import DigitalCommerce from "./pages/DigitalCommerce";
import Privacy from "./pages/Privacy";
import Insights from "./pages/Insights";
import Testing from "./pages/Testing";
import WIP from "./pages/WIP";
import { useEffect } from "react";
import Terms from "./pages/Terms";
import SuccessStory from "./pages/SuccessStory";
import Blogs from "./pages/Blogs";
import IndividualBlogPage from "./pages/IndividualBlogPage";
import JobDetails from "./pages/JobDetails";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const router = createBrowserRouter([
  {
    element: (
      <>
        <ScrollToTop />
        <AppLayout />
      </>
    ),

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "*",
        element: <Error404 />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/industries",
        element: <Industry />,
      },
      {
        path: "/industries/bfsi-fintech",
        element: <BFSIAndFinance />,
      },
      {
        path: "/industries/healthcare",
        element: <BFSIAndFinance />,
      },
      {
        path: "/industries/edtech",
        element: <BFSIAndFinance />,
      },
      {
        path: "/industries/internet-saas",
        element: <BFSIAndFinance />,
      },
      {
        path: "/career",
        element: <Career />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/career/open-roles",
        element: <OpenRoles />,
      },
      {
        path: "/insights",
        element: <Insights />,
      },
      {
        path: "/about/about-altumind/community-engagement",
        element: <CommunityEngagement />,
      },
      {
        path: "/career/life-at-altumind",
        element: <LifeAtAltumind />,
      },
      {
        path: "/about/about-altumind/alliance",
        element: <Alliance />,
      },
      {
        path: "/services/experience-design",
        element: <ExperienceDesign />,
      },
      {
        path: "/services/experience-design/*",
        element: <WIP />,
      },
      {
        path: "/testing",
        element: <Testing />,
      },
      {
        path: "/services/ai-automation",
        element: <AIandAutomation />,
      },
      {
        path: "/services/ai-automation/*",
        element: <WIP />,
      },
      {
        path: "/services/quality-assurance",
        element: <QAandTesting />,
      },
      {
        path: "/services/digital-marketing",
        element: <DigitalMarketingServices />,
      },
      {
        path: "/services/digital-marketing/*",
        element: <WIP />,
      },
      {
        path: "/services/technology-and-engineering",
        element: <TechnologyAndEngineering />,
      },
      {
        path: "/services/data-analytics",
        element: <DataAnalytics />,
      },
      {
        path: "/services/data-analytics/*",
        element: <WIP />,
      },
      {
        path: "/services/managed-operations",
        element: <ManagedOperations />,
      },
      {
        path: "/services/managed-operations/*",
        element: <WIP />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/services/digital-strategy-consulting",
        element: <DigitalStrategy />,
      },
      {
        path: "/services/cloud",
        element: <CloudServices />,
      },
      {
        path: "/services/cloud/*",
        element: <WIP />,
      },
      {
        path: "/about/about-altumind/mission-and-vision",
        element: <MissionAndVision />,
      },
      {
        path: "/about/about-altumind/leadership",
        element: <Leadership />,
      },
      {
        path: "/services/it-services-consulting",
        element: <WIP />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/industries/digital-commerce",
        element: <BFSIAndFinance />,
      },
      {
        path: "/industries/green-sustainability",
        element: <BFSIAndFinance />,
      },
      {
        path: "/wip",
        element: <WIP />,
      },
      {
        path: "/mission-and-vision",
        element: <MissionAndVision />,
      },
      {
        path: "/leadership",
        element: <Leadership />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/industries/digital-commerce",
        element: <DigitalCommerce />,
      },
      {
        path: "/privacy",
        element: <Privacy />,
      },
      {
        path: "/terms",
        element: <Terms />,
      },
      {
        path: "/portfolio/sukhiba",
        element: <SuccessStory />,
      },
      {
        path: "/portfolio/secpod",
        element: <SuccessStory />,
      },
      {
        path: "/portfolio/united-finance",
        element: <SuccessStory />,
      },
      {
        path: "/insights/blogs",
        element: <Blogs />,
      },
      {
        path: "/portfolio/enphase",
        element: <SuccessStory />,
      },
      {
        path: "/terms",
        element: <Terms />,
      },
      {
        path: "insights/blog/:id/:blogName",
        element: <IndividualBlogPage />,
      },
      {
        path: "/services/quality-assurance/*",
        element: <WIP />,
      },
      {
        path: "/services/technology-and-engineering/*",
        element: <WIP />,
      },
      {
        path: "/portfolio/:storyId",
        element: <SuccessStory />,
      },
      {
        path: "/jobs/:jobId/:jobName",
        element: <JobDetails />,
      },
    ],
  },
]);

function App() {
  console.log("updated on: 27/9/24 UCCN");
  return <RouterProvider router={router} />;
}

export default App;
