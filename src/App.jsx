import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import {AppLayout} from "./Layouts/AppLayout"
import Contact from "./pages/Contact"
import Industry from "./pages/Industry"
import BFSIAndFinance from "./pages/BFSIAndFinance"
import Healthcare from "./pages/Healthcare"
import EdTech from "./pages/EdTech"
import Internet from "./pages/Internet"
import Career from "./pages/Career"
import OpenRoles from "./pages/OpenRoles"
import CommunityEngagement from "./pages/CommunityEngagement"
import LifeAtAltumind from "./pages/LifeAtAltumind"
import Alliance from "./pages/Alliance"
import ExperienceDesign from "./pages/ExperienceDesign"
import AIandAutomation from "./pages/AIandAutomation"
import QAandTesting from "./pages/QAandTesting"
import DigitalMarketingServices from "./pages/DigitalMarketingServices"
import TechnologyAndEngineering from "./pages/TechnologyAndEngineering"
import DataAnalytics from "./pages/DataAnalytics"
import ManagedOperations from "./pages/ManagedOperations"
import Services from "./pages/Services"
import DigitalStrategy from './pages/DigitalStrategy'
import CloudServices from "./pages/CloudServices"
import MissionAndVision from "./pages/MissionAndVision"
import Leadership from "./pages/Leadership"
import AboutUs from "./pages/AboutUs"
import Error404 from "./pages/Error404"
import DigitalCommerce from "./pages/DigitalCommerce"
import Privacy from "./pages/Privacy"
import Terms from "./pages/Terms"
import SuccessStories from "./pages/SuccessStories"

const router = createBrowserRouter([
  {
    element:<AppLayout/>,
   
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"*",
        element:<Error404 />
        },
      {
        path:"/contact-us",
        element:<Contact/>
      },
      {
        path:"/industries",
        element:<Industry/>
      },
      {
        path:"/industries/bfsi-fintech",
        element:<BFSIAndFinance/>
      },
      {
        path:"/industries/healthcare",
        element:<Healthcare/>
      },
      {
        path:"/industries/edtech",
        element:<EdTech/>
      },
      {
        path:"/industries/internet-saas",
        element:<Internet/>
      },
      {
        path:"/career",
        element:<Career/>
      },
      {
        path:"/career/open-roles",
        element:<OpenRoles/>
      },
      {
        path:"/about-us/community-engagement",
        element:<CommunityEngagement/>
      },
      {
        path:"/career/life-at-altumind",
        element:<LifeAtAltumind/>
      },
      {
        path:"/about-us/alliance",
        element:<Alliance/>
      },
      {
        path:"/services/experience-design",
        element:<ExperienceDesign/>
      },
      {
        path:"/services/ai-and-automation",
        element:<AIandAutomation/>
      },
      {
        path:"/services/quality-assurance",
        element:<QAandTesting/>
      },
      {
        path:"/services/digital-marketing",
        element:<DigitalMarketingServices/>
      },
      {
        path:"/services/technology-and-engineering",
        element:<TechnologyAndEngineering/>
      },
      {
        path:"/services/data-analytics",
        element:<DataAnalytics/>
      },
      {
        path:"/services/managed-operations",
        element:<ManagedOperations/>
      },
      {
        path:"/services",
        element:<Services/>
      },
      {
        path:"/services/digital-strategy",
        element:<DigitalStrategy/>
      },
      {
        path:"/services/cloud",
        element:<CloudServices/>
      },
      {
        path:"/about-us/mission-and-vision",
        element:<MissionAndVision/>
      },
      {
        path:"/about-us/leadership",
        element:<Leadership/>
      },
      {
        path:"/about-us",
        element:<AboutUs/>
      },
      {
        path:"/industries/digital-commerce",
        element:<DigitalCommerce/>
      },
      {
        path:"/privacy",
        element:<Privacy/>
      },
      {
        path:"/terms",
        element:<Terms/>
      },
      {
        path:"/portfolio/:storyId",
        element:<SuccessStories/>
      },
    ],
    
  }
])

function App() {
  return <RouterProvider router={router}/>
}

export default App
