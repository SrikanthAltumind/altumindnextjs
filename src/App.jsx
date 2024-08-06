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
import Portfolio from "./pages/Portfolio"
import Insights from "./pages/Insights"
import CommunityEngagement from "./pages/CommunityEngagement"
import LifeAtAltumind from "./pages/LifeAtAltumind"
import Alliance from "./pages/Alliance"
import ExperienceDesign from "./pages/ExperienceDesign"

const router = createBrowserRouter([
  {
    element: <AppLayout />,
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
        path: "/bfsi-finance",
        element: <BFSIAndFinance />,
      },
      {
        path: "/healthcare",
        element: <Healthcare />,
      },
      {
        path: "/ed-tech",
        element: <EdTech />,
      },
      {
        path: "/internet",
        element: <Internet />,
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
    ],
  },
]);

function App() {
  return <RouterProvider router={router}/>
}

export default App
