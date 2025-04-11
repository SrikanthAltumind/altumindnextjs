import { RouterProvider, createBrowserRouter,} from "react-router-dom";
import { lazy, Suspense } from "react";
import { AppLayout } from "./Layouts/AppLayout";

import Error404 from "./pages/Error404";
// const Home = lazy(() => import("./pages/Home"));
const Contact = lazy(() => import("./pages/Contact"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Privacy = lazy(() => import("./pages/Privacy"));
// const Insights = lazy(() => import("./pages/Insights"));
const Terms = lazy(() => import("./pages/Terms"));
const CustomWebDev = lazy(() => import("./pages/CustomWebDev"));
const SuccessStory = lazy(() => import("./pages/SuccessStory"));
// const Blogs = lazy(() => import("./pages/Blogs"));
// const IndividualBlogPage = lazy(() => import("./pages/IndividualBlogPage"));
const Agiliti = lazy(() => import("./pages/Agiliti"));
// Industry Routes
const Industry = lazy(() => import("./pages/Industry"));
const BFSIAndFinance = lazy(() => import("./pages/BFSIAndFinance"));
// career Routes
const Career = lazy(() => import("./pages/Career"));
const OpenRoles = lazy(() => import("./pages/OpenRoles"));
const LifeAtAltumind = lazy(() => import("./pages/LifeAtAltumind"));
// const JobDetails = lazy(() => import("./pages/JobDetails"));
// const ApplyNow = lazy(() => import("./pages/ApplyNow"));
// About Routes
const CommunityEngagement = lazy(() => import("./pages/CommunityEngagement"));
const Alliance = lazy(() => import("./pages/Alliance"));
const MissionAndVision = lazy(() => import("./pages/MissionAndVision"));
const Leadership = lazy(() => import("./pages/Leadership"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
// services Routes
const ExperienceDesign = lazy(() => import("./pages/ExperienceDesign"));
const AIandAutomation = lazy(() => import("./pages/AIandAutomation"));
const QAandTesting = lazy(() => import("./pages/QAandTesting"));
const DigitalMarketingServices = lazy(() => import("./pages/DigitalMarketingServices"));
const TechnologyAndEngineering = lazy(() => import("./pages/TechnologyAndEngineering"));
const DataAnalytics = lazy(() => import("./pages/DataAnalytics"));
const ManagedOperations = lazy(() => import("./pages/ManagedOperations"));
const Services = lazy(() => import("./pages/Services"));
const DigitalStrategy = lazy(() => import("./pages/DigitalStrategy"));
const CloudServices = lazy(() => import("./pages/CloudServices"));
const UIUXCXDesign = lazy(() => import("./pages/UIUXCXDesign"));
const WebDevelopment = lazy(() => import("./pages/WebDevelopment"));
const MobileAppDevelopment = lazy(() => import("./pages/MobileAppDevelopment"));
const ERPIntegration = lazy(() => import("./pages/ERPIntegration"));
const EcommerceServices = lazy(() => import("./pages/EcommerceServices"));
const CloudMigration = lazy(() => import("./pages/CloudMigration"));
const CloudApp = lazy(() => import("./pages/CloudApp"));
const MarketingOptimization = lazy(() => import("./pages/MarketingOptimization"));
const MarketingIntelligence = lazy(() => import("./pages/MarketingIntelligence"));
const BusinessIntelligence = lazy(() => import("./pages/BusinessIntelligence"));
const Customer360 = lazy(() => import("./pages/Customer360"));
const DigitalIntelligence = lazy(() => import("./pages/DigitalIntelligence"));
const SalesIntelligence = lazy(() => import("./pages/SalesIntelligence"));
const DigitalProductInnovation = lazy(() => import("./pages/DigitalProductInnovation"));
const WebsiteOperationsManagement = lazy(() => import("./pages/WebsiteOperationsManagement"));
const CloudManagement = lazy(() => import("./pages/CloudManagement"));
const SoftwareMaintenanceSupport = lazy(() => import("./pages/SoftwareMaintenanceSupport"));
const BrandingAndDesign = lazy(() => import("./pages/BrandingAndDesign"));
const MarketingServices = lazy(() => import("./pages/MarketingServices"));
const AIAndChatBotServices = lazy(() => import("./pages/AIAndChatBotServices"));
const RPAServices = lazy(() => import("./pages/RPAServices"));
const AutomationTesting = lazy(() => import("./pages/AutomationTesting"));
const SecurityTesting = lazy(() => import("./pages/SecurityTesting"));
const PerformanceTesting = lazy(() => import("./pages/PerformanceTesting"));
const QAConsultingService = lazy(() => import("./pages/QAConsultingService"));
const DigitalExperienceEngagement = lazy(() => import("./pages/DigitalExperienceEngagement"));
const DigitalModernization = lazy(() => import("./pages/DigitalModernization"));
const DigitalAudit = lazy(() => import("./pages/DigitalAudit"));
const IncubationOfNewProducts = lazy(() => import("./pages/IncubationOfNewProducts"));
const DigitalBuild = lazy(() => import("./pages/DigitalBuild"));
const FunctionalTesting = lazy(() => import("./pages/FunctionalTesting"));
// extra
import Testing from "./pages/Testing";
import WIP from "./pages/WIP";
import Loader from "./Components/common-components/Loader";
import JobDetailsUpdated from "./pages/JobDetailsUpdated";
import JobApplicationForm from "./pages/JobApplicationForm";
import Home from "./pages/Home"
import L3Services from "./pages/L3Services";

// import DigitalCommerce from "./pages/DigitalCommerce";

export const routes = [
  { path: "/", element: <Home /> },
  { path: "/contact", element: <Contact /> },
  { path: "/custom-website-development", element: <CustomWebDev /> },
  { path: "/agiliti-hire-dedicated-developers", element: <Agiliti /> },
  { path: "/industries", element: <Industry /> },
  { path: "/industries/bfsi-fintech", element: <BFSIAndFinance /> },
  { path: "/industries/healthcare", element: <BFSIAndFinance /> },
  { path: "/industries/edtech", element: <BFSIAndFinance /> },
  { path: "/industries/internet-saas", element: <BFSIAndFinance /> },
  { path: "/career", element: <Career /> },
  { path: "/portfolio", element: <Portfolio /> },
  { path: "/career/open-roles", element: <OpenRoles /> },
  // { path: "/insights", element: <Insights /> },
  { path: "/about/about-altumind/community-engagement", element: <CommunityEngagement /> },
  { path: "/career/life-at-altumind", element: <LifeAtAltumind /> },
  { path: "/about/about-altumind/alliance", element: <Alliance /> },
  { path: "/services/experience-design-services", element: <ExperienceDesign /> },
  { path: "/experience-design-services/:id", element: <UIUXCXDesign /> }, // Dynamic route
  { path: "/digital-development-services/web-development-consulting", element: <WebDevelopment /> },
  { path: "/digital-development-services/mobile-app-design-development", element: <MobileAppDevelopment /> },
  { path: "/digital-development-services/erp-integration-service", element: <ERPIntegration /> },
  { path: "/digital-development-services/ecommerce-services", element: <EcommerceServices /> },
  { path: "/testing", element: <Testing /> },
  { path: "/services/ai-services", element: <AIandAutomation /> },
  { path: "/ai-services/chatbot-development-services", element: <AIAndChatBotServices /> },
  { path: "/ai-services/rpa-services", element: <RPAServices /> },
  { path: "/services/quality-assurance-services", element: <QAandTesting /> },
  { path: "/quality-assurance-services/automation-testing-services", element: <AutomationTesting /> },
  { path: "/quality-assurance-services/security-testing-services", element: <SecurityTesting /> },
  { path: "/quality-assurance-services/performance-testing-services", element: <PerformanceTesting /> },
  { path: "/quality-assurance-services/functional-testing-services", element: <FunctionalTesting /> },
  { path: "/quality-assurance-services/quality-assurance-consulting", element: <QAConsultingService /> },
  { path: "/services/digital-marketing-services", element: <DigitalMarketingServices /> },
  { path: "/digital-marketing-services/optimization-services", element: <MarketingOptimization /> },
  { path: "/digital-marketing-services/branding-design-services", element: <BrandingAndDesign /> },
  { path: "/digital-marketing-services/integrated-digital-marketing-services", element: <MarketingServices /> },
  { path: "/services/digital-development-services", element: <TechnologyAndEngineering /> },
  { path: "/services/data-analytics-services", element: <DataAnalytics /> },
  { path: "/data-analytics-services/business-intelligence-consulting", element: <BusinessIntelligence /> },
  { path: "/data-analytics-services/marketing-intelligence-solutions", element: <MarketingIntelligence /> },
  { path: "/data-analytics-services/digital-intelligence-services", element: <DigitalIntelligence /> },
  { path: "/data-analytics-services/customer-360-analytics", element: <Customer360 /> },
  { path: "/data-analytics-services/sales-intelligence-solutions", element: <SalesIntelligence /> },
  { path: "/services/operations-managed-services", element: <ManagedOperations /> },
  { path: "/operations-managed-services/product-development-and-innovation", element: <DigitalProductInnovation /> },
  { path: "/operations-managed-services/website-management", element: <WebsiteOperationsManagement /> },
  { path: "/operations-managed-services/cloud-management-solutions", element: <CloudManagement /> },
  { path: "/operations-managed-services/maintenance-support-services", element: <SoftwareMaintenanceSupport /> },
  { path: "/services", element: <Services /> },
  { path: "/services/digital-strategy-services", element: <DigitalStrategy /> },
  { path: "/digital-strategy-services/digital-experience", element: <DigitalExperienceEngagement /> },
  { path: "/digital-strategy-services/digital-modernization", element: <DigitalModernization /> },
  { path: "/digital-strategy-services/digital-audit", element: <DigitalAudit /> },
  { path: "/digital-strategy-services/product-incubation", element: <IncubationOfNewProducts /> },
  { path: "/digital-strategy-services/digital-build", element: <DigitalBuild /> },
  { path: "/services/cloud-strategy-engineering-services", element: <CloudServices /> },
  { path: "/cloud-strategy-engineering-services/cloud-migration-services", element: <CloudMigration /> },
  { path: "/cloud-strategy-engineering-services/cloud-application-development-services", element: <CloudApp /> },
  { path: "/about/about-altumind/mission-and-vision", element: <MissionAndVision /> },
  { path: "/about/about-altumind/leadership", element: <Leadership /> },
  { path: "/services/it-services-consulting", element: <WIP /> },
  { path: "/about", element: <AboutUs /> },
  { path: "/industries/digital-commerce", element: <BFSIAndFinance /> },
  { path: "/industries/green-sustainability", element: <BFSIAndFinance /> },
  { path: "/privacy", element: <Privacy /> },
  { path: "/terms", element: <Terms /> },
  { path: "/portfolio/sukhiba", element: <SuccessStory /> },
  { path: "/portfolio/secpod", element: <SuccessStory /> },
  { path: "/portfolio/united-finance", element: <SuccessStory /> },
  { path: "/portfolio/enphase", element: <SuccessStory /> },
  { path: "/portfolio/:storyId", element: <SuccessStory /> }, // Dynamic route
  { path: "/jobs/:jobId/:jobName", element: <JobDetailsUpdated /> }, // Dynamic route
  { path: "/jobs/:jobName/ApplyNow", element: <JobApplicationForm/> }, // Dynamic route
  // { path: "/insights/blogs", element: <Blogs /> },
  // { path: "/callback", element: <Blogs /> },
  // { path: "/insights/blog/:id/:blogName", element: <IndividualBlogPage /> }, // Dynamic route
  { path: "/digital-development-services/web-development-consulting/:pagename" , element:<L3Services/>},
  { path: "/digital-development-services/mobile-app-design-development/:pagename" , element:<L3Services/>},
  { path: "/digital-marketing-services/integrated-digital-marketing-services/:pagename" , element:<L3Services/>},
  { path: "/digital-marketing-services/optimization-services/:pagename" , element:<L3Services/>},
  // not allowed to index
  { path: "*", element: <Error404 /> }
];


const router = createBrowserRouter([
  {
    element: (
      <>
        {/* <ScrollToTop /> */}
        <Suspense fallback={<Loader/>}>
        <AppLayout />
        </Suspense>
      </>
    ),
    
    children: routes
    // children: 
    // [
    //   {
    //     path: "/",
    //     element: <Home />,
    //   },
    //   {
    //     path: "*",
    //     element: <Error404 />,
    //   },
    //   {
    //     path: "/contact",
    //     element: <Contact />,
    //   },
    //   {
    //     path: "/custom-website-development",
    //     element: <CustomWebDev />,
    //   },
    //   {
    //     path: "/agiliti-hire-dedicated-developers",
    //     element: <Agiliti />,
        
    //   },
    //   {
    //     path: "/industries",
    //     element: <Industry />,
    //   },
    //   {
    //     path: "/industries/bfsi-fintech",
    //     element: <BFSIAndFinance />,
    //   },
    //   {
    //     path: "/industries/healthcare",
    //     element: <BFSIAndFinance />,
    //   },
    //   {
    //     path: "/industries/edtech",
    //     element: <BFSIAndFinance />,
    //   },
    //   {
    //     path: "/industries/internet-saas",
    //     element: <BFSIAndFinance />,
    //   },
    //   {
    //     path: "/career",
    //     element: <Career />,
    //   },
    //   {
    //     path: "/portfolio",
    //     element: <Portfolio />,
    //   },
    //   {
    //     path: "/career/open-roles",
    //     element: <OpenRoles />,
    //   },
    //   {
    //     path: "/insights",
    //     element: <Insights />,
    //   },
    //   {
    //     path: "/about/about-altumind/community-engagement",
    //     element: <CommunityEngagement />,
    //   },
    //   {
    //     path: "/career/life-at-altumind",
    //     element: <LifeAtAltumind />,
    //   },
    //   {
    //     path: "/about/about-altumind/alliance",
    //     element: <Alliance />,
    //   },
    //   {
    //     path: "/services/experience-design",
    //     element: <ExperienceDesign />,
    //   },
    //   {
    //     path: "/services/experience-design/:id",
    //     element: <UIUXCXDesign />,
    //   },
    //   {
    //     path: "/services/technology-and-engineering/web-development",
    //     element: <WebDevelopment />,
    //   },
    //   {
    //     path: "/services/technology-and-engineering/mobile-app-development",
    //     element: <MobileAppDevelopment />,
    //   },
    //   {
    //     path: "/services/technology-and-engineering/erp-integration",
    //     element: <ERPIntegration />,
    //   },
    //   {
    //     path: "/services/technology-and-engineering/ecommerce-services",
    //     element: <EcommerceServices/>,
    //   },

    //   // {
    //   //   path: "/services/experience-design/*",
    //   //   element: <WIP />,
    //   // },
    //   {
    //     path: "/testing",
    //     element: <Testing />,
    //   },
    //   {
    //     path: "/services/ai-automation",
    //     element: <AIandAutomation />,
    //   },
    //   {
    //     path: "/services/ai-automation/conversational-ai-chatbot",
    //     element: <AIAndChatBotServices />,
    //   },
    //   {
    //     path: "/services/ai-automation/rpa",
    //     element: <RPAServices />,
    //   },
    //   // {
    //   //   path: "/services/ai-automation/*",
    //   //   element: <WIP />,
    //   // },
    //   {
    //     path: "/services/quality-assurance",
    //     element: <QAandTesting />,
    //   },
    //   {
    //     path: "/services/quality-assurance/automation-testing",
    //     element: <AutomationTesting/>,
    //   },
    //   {
    //     path: "/services/quality-assurance/security-testing",
    //     element: <SecurityTesting />,
    //   },
    //   {
    //     path: "/services/quality-assurance/performance-testing",
    //     element: <PerformanceTesting />,
    //   },
    //   {
    //     path: "/services/quality-assurance/qa-consulting",
    //     element: <QAConsultingService />,
    //   },
    //   {
    //     path: "/services/digital-marketing",
    //     element: <DigitalMarketingServices />,
    //   },
    //   {
    //     path: "/services/digital-marketing/marketing-optimization",
    //     element: <MarketingOptimization />,
    //   },
    //   {
    //     path: "/services/digital-marketing/branding-design",
    //     element: <BrandingAndDesign />,
    //   },
    //   {
    //     path: "/services/digital-marketing/marketing-services",
    //     element: <MarketingServices />,
    //   },
      
    //   // {
    //   //   path: "/services/digital-marketing/*",
    //   //   element: <WIP />,
    //   // },
    //   {
    //     path: "/services/technology-and-engineering",
    //     element: <TechnologyAndEngineering />,
    //   },
    //   {
    //     path: "/services/data-analytics",
    //     element: <DataAnalytics />,
    //   },
    //   // {
    //   //   path: "/services/data-analytics/*",
    //   //   element: <WIP />,
    //   // },
    //   {
    //     path: "/services/data-analytics/business-intelligence",
    //     element: <BusinessIntelligence />,
    //   },
    //   {
    //     path: "/services/data-analytics/marketing-intelligence",
    //     element: <MarketingIntelligence />,
    //   },
    //   {
    //     path: "/services/data-analytics/digital-intelligence",
    //     element: <DigitalIntelligence />,
    //   },
    //   {
    //     path: "/services/data-analytics/customer-360",
    //     element: <Customer360/>,
    //   },
    //   {
    //     path: "/services/data-analytics/sales-intelligence",
    //     element: <SalesIntelligence />,
    //   },
    //   {
    //     path: "/services/managed-operations",
    //     element: <ManagedOperations />,
    //   },
    //   {
    //     path: "/services/managed-operations/product-innovation-management",
    //     element: <DigitalProductInnovation />,
    //   },
    //   {
    //     path: "/services/managed-operations/website-operations-management",     
    //     element: <WebsiteOperationsManagement />,
    //   },
    //   {
    //     path: "/services/managed-operations/cloud-management",     
    //     element: <CloudManagement />,
    //   },
    //   {
    //     path: "/services/managed-operations/software-maintenance-support",     
    //     element: <SoftwareMaintenanceSupport />,
    //   },
    //   // {
    //   //   path: "/services/managed-operations/*",
    //   //   element: <WIP />,
    //   // },
    //   {
    //     path: "/services",
    //     element: <Services />,
    //   },
    //   {
    //     path: "/services/digital-strategy-consulting",
    //     element: <DigitalStrategy />,
    //   },
    //   {
    //     path: "/services/digital-strategy-consulting/digital-experience-engagement",
    //     element: <DigitalExperienceEngagement />,
    //   },
    //   {
    //     path: "/services/digital-strategy-consulting/digital-modernization",
    //     element: <DigitalModernization />,
    //   },
    //   {
    //     path: "/services/digital-strategy-consulting/digital-audits",
    //     element: <DigitalAudit />,
    //   },
    //   {
    //     path: "/services/digital-strategy-consulting/incubation-products-services",
    //     element: <IncubationOfNewProducts />,
    //   },
    //   {
    //     path: "/services/digital-strategy-consulting/digital-build",
    //     element: <DigitalBuild />,
    //   },
    //   {
    //     path: "/services/cloud",
    //     element: <CloudServices />,
    //   },
    //   {
    //     path:"/services/cloud/cloud-migration",
    //     element:<CloudMigration/>
    //   },
    //   {
    //     path:"/services/cloud/cloud-app-services",
    //     element:<CloudApp/>
    //   },
    //   // {
    //   //   path: "/services/cloud/*",
    //   //   element: <WIP />,
    //   // },
    //   {
    //     path: "/about/about-altumind/mission-and-vision",
    //     element: <MissionAndVision />,
    //   },
    //   {
    //     path: "/about/about-altumind/leadership",
    //     element: <Leadership />,
    //   },
    //   {
    //     path: "/services/it-services-consulting",
    //     element: <WIP />,
    //   },
    //   {
    //     path: "/about",
    //     element: <AboutUs />,
    //   },
    //   {
    //     path: "/industries/digital-commerce",
    //     element: <BFSIAndFinance />,
    //   },
    //   {
    //     path: "/industries/green-sustainability",
    //     element: <BFSIAndFinance />,
    //   },
    //   {
    //     path: "/wip",
    //     element: <WIP />,
    //   },
    //   // {
    //   //   path: "/mission-and-vision",
    //   //   element: <MissionAndVision />,
    //   // },
    //   // {
    //   //   path: "/leadership",
    //   //   element: <Leadership />,
    //   // },
    //   // {
    //   //   path: "/about",
    //   //   element: <AboutUs />,
    //   // },
    //   // {
    //   //   path: "/industries/digital-commerce",
    //   //   element: <DigitalCommerce />,
    //   // },
    //   {
    //     path: "/privacy",
    //     element: <Privacy />,
    //   },
    //   {
    //     path: "/terms",
    //     element: <Terms />,
    //   },
    //   {
    //     path: "/portfolio/sukhiba",
    //     element: <SuccessStory />,
    //   },
    //   {
    //     path: "/portfolio/secpod",
    //     element: <SuccessStory />,
    //   },
    //   {
    //     path: "/portfolio/united-finance",
    //     element: <SuccessStory />,
    //   },
    //   {
    //     path: "/insights/blogs",
    //     element: <Blogs />,
    //   },
    //   {
    //     path: "/portfolio/enphase",
    //     element: <SuccessStory />,
    //   },
    //   {
    //     path: "/terms",
    //     element: <Terms />,
    //   },
    //   {
    //     path: "insights/blog/:id/:blogName",
    //     element: <IndividualBlogPage />,
    //   },
    //   {
    //     path: "/services/quality-assurance/*",
    //     element: <WIP />,
    //   },
    //   // {
    //   //   path: "/services/technology-and-engineering/*",
    //   //   element: <WIP />,
    //   // },
    //   {
    //     path: "/portfolio/:storyId",
    //     element: <SuccessStory />,
    //   },
    //   {
    //     path: "/jobs/:jobId/:jobName",
    //     element: <JobDetails />,
    //   },
    // ],
  },
]);

console.log('build  deployed march 6 12:00' , )

function App() {
  return <RouterProvider router={router} />;
}

export default App;
