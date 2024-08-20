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

const router = createBrowserRouter([
  {
    element:<AppLayout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/industries",
        element:<Industry/>
      },
      {
        path:"/bfsi-finance",
        element:<BFSIAndFinance/>
      },
      {
        path:"/healthcare",
        element:<Healthcare/>
      },
      {
        path:"/ed-tech",
        element:<EdTech/>
      },
      {
        path:"/internet",
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
        path:"/community-engagement",
        element:<CommunityEngagement/>
      },
      {
        path:"/life-at-altumind",
        element:<LifeAtAltumind/>
      },
      {
        path:"/alliance",
        element:<Alliance/>
      },
      {
        path:"/experience-design",
        element:<ExperienceDesign/>
      },
      {
        path:"/ai-automation",
        element:<AIandAutomation/>
      },
      {
        path:"/qa-testing",
        element:<QAandTesting/>
      },
      {
        path:"/digital-marketing-services",
        element:<DigitalMarketingServices/>
      },
      {
        path:"/technology-engineering",
        element:<TechnologyAndEngineering/>
      },
      {
        path:"/data-analytics",
        element:<DataAnalytics/>
      },
      {
        path:"/managed-operations",
        element:<ManagedOperations/>
      },
      {
        path:"/services",
        element:<Services/>
      },
      {
        path:"/digital-strategy-consulting",
        element:<DigitalStrategy/>
      },
      {
        path:"/cloud-services",
        element:<CloudServices/>
      },
    ],
    
  }
])

function App() {
  return <RouterProvider router={router}/>
}

export default App
