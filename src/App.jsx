import { RouterProvider, createBrowserRouter, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import { AppLayout } from "./Layouts/AppLayout";
import Contact from "./pages/Contact";
import Industry from "./pages/Industry";
import BFSIAndFinance from "./pages/BFSIAndFinance";
// import Healthcare from "../unnecessary-code/Healthcare";
// import EdTech from "../unnecessary-code/EdTech";
// import Internet from "../unnecessary-code/Internet";
import Career from "./pages/Career";
import OpenRoles from "./pages/OpenRoles";
import Portfolio from "./pages/Portfolio";
import Insights from "./pages/Insights";
import CommunityEngagement from "./pages/CommunityEngagement";
import LifeAtAltumind from "./pages/LifeAtAltumind";
import Alliance from "./pages/Alliance";
import ExperienceDesign from "./pages/ExperienceDesign";
import Testing from "./pages/Testing";
import AIandAutomation from "./pages/AIandAutomation";
import QAandTesting from "./pages/QAandTesting";
import DigitalMarketingServices from "./pages/DigitalMarketingServices";
import TechnologyAndEngineering from "./pages/TechnologyAndEngineering";
import DataAnalytics from "./pages/DataAnalytics";
import ManagedOperations from "./pages/ManagedOperations";
import Services from "./pages/Services";
import DigitalStrategy from "./pages/DigitalStrategy";
import CloudServices from "./pages/CloudServices";
import WIP from "./pages/WIP";
import Leadership from "./pages/Leadership";
import MissionAndVision from "./pages/MissionAndVision";
import AboutUs from "./pages/AboutUs";
import { useEffect } from "react";

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
        path: "/testing",
        element: <Testing />,
      },
      {
        path: "/services/ai-and-chat-bot",
        element: <AIandAutomation />,
      },
      {
        path: "services/quality-assurance-quality-control",
        element: <QAandTesting />,
      },
      {
        path: "/services/digital-marketing",
        element: <DigitalMarketingServices />,
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
        path: "/services/managed-operations",
        element: <ManagedOperations />,
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
        path: "/services/cloud-automation",
        element: <CloudServices />,
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
    ],
  },
]);

function App() {
  
  console.log("updated on: 23rd Aug 2024")
  return <RouterProvider router={router} />;
}

export default App;
