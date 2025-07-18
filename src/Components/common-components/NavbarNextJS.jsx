import Link from "next/link";
import { useRouter } from "next/router";
import logo from "../../assets/Altumind logo-01.webp";
import AltumindDark from "../../assets/AltumindDark.png";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../../pages/_app";

import MegaMenu from "./MegaMenu";
import MobileMenu from "./MobileMenu";

export const Navbardata = [
  {
    menu: "About",
    path: "/about",
    children: [
      {
        innerMenu: "About Altumind",
        path: "/about",
        children: [
          {
            name: "Mission and Vision",
            path: "/about/about-altumind/mission-and-vision",
          },
          {
            name: "Leadership",
            path: "/about/about-altumind/leadership",
          },
          {
            name: "Alliance",
            path: "/about/about-altumind/alliance",
          },
          {
            name: "Community Engagement",
            path: "/about/about-altumind/community-engagement",
          },
        ],
      },
    ],
  },
  {
    menu: "Services",
    path: "/services",
    children: [
      {
        innerMenu: "Experience Design Services",
        path: "/services/experience-design-services",
        children: [
          {
            name: "UI/UX/CX Design",
            path: "/experience-design-services/ui-ux-cx-design",
          },
        ],
      },
      {
        innerMenu: "Digital Development Services",
        path: "/services/digital-development-services",
        children: [
          {
            name: "Web Development",
            path: "/digital-development-services/web-development-consulting",
          },
          {
            name: "Mobile App Development",
            path: "/digital-development-services/mobile-app-design-development",
          },
          {
            name: "ERP Integration",
            path: "/digital-development-services/erp-integration-service",
          },
          {
            name: "Ecommerce Services",
            path: "/digital-development-services/ecommerce-services",
          },
        ],
      },
      {
        innerMenu: "AI Services",
        path: "/services/ai-services",
        children: [
          {
            name: "Chatbot Development",
            path: "/ai-services/chatbot-development-services",
          },
          {
            name: "RPA Services",
            path: "/ai-services/rpa-services",
          },
        ],
      },
      {
        innerMenu: "Quality Assurance Services",
        path: "/services/quality-assurance-services",
        children: [
          {
            name: "Automation Testing",
            path: "/quality-assurance-services/automation-testing-services",
          },
          {
            name: "Security Testing",
            path: "/quality-assurance-services/security-testing-services",
          },
          {
            name: "Performance Testing",
            path: "/quality-assurance-services/performance-testing-services",
          },
          {
            name: "Functional Testing",
            path: "/quality-assurance-services/functional-testing-services",
          },
          {
            name: "QA Consulting",
            path: "/quality-assurance-services/quality-assurance-consulting",
          },
        ],
      },
      {
        innerMenu: "Digital Marketing Services",
        path: "/services/digital-marketing-services",
        children: [
          {
            name: "Marketing Optimization",
            path: "/digital-marketing-services/optimization-services",
          },
          {
            name: "Branding & Design",
            path: "/digital-marketing-services/branding-design-services",
          },
          {
            name: "Marketing Services",
            path: "/digital-marketing-services/integrated-digital-marketing-services",
          },
        ],
      },
      {
        innerMenu: "Data Analytics Services",
        path: "/services/data-analytics-services",
        children: [
          {
            name: "Business Intelligence",
            path: "/data-analytics-services/business-intelligence-consulting",
          },
          {
            name: "Marketing Intelligence",
            path: "/data-analytics-services/marketing-intelligence-solutions",
          },
          {
            name: "Digital Intelligence",
            path: "/data-analytics-services/digital-intelligence-services",
          },
          {
            name: "Customer 360",
            path: "/data-analytics-services/customer-360-analytics",
          },
          {
            name: "Sales Intelligence",
            path: "/data-analytics-services/sales-intelligence-solutions",
          },
        ],
      },
      {
        innerMenu: "Operations & Managed Services",
        path: "/services/operations-managed-services",
        children: [
          {
            name: "Product Innovation",
            path: "/operations-managed-services/product-development-and-innovation",
          },
          {
            name: "Website Operations",
            path: "/operations-managed-services/website-management",
          },
          {
            name: "Cloud Management",
            path: "/operations-managed-services/cloud-management-solutions",
          },
          {
            name: "Maintenance & Support",
            path: "/operations-managed-services/maintenance-support-services",
          },
        ],
      },
      {
        innerMenu: "Digital Strategy Services",
        path: "/services/digital-strategy-services",
        children: [
          {
            name: "Digital Experience",
            path: "/digital-strategy-services/digital-experience",
          },
          {
            name: "Digital Modernization",
            path: "/digital-strategy-services/digital-modernization",
          },
          {
            name: "Digital Audit",
            path: "/digital-strategy-services/digital-audit",
          },
          {
            name: "Product Incubation",
            path: "/digital-strategy-services/product-incubation",
          },
          {
            name: "Digital Build",
            path: "/digital-strategy-services/digital-build",
          },
        ],
      },
      {
        innerMenu: "Cloud Strategy & Engineering Services",
        path: "/services/cloud-strategy-engineering-services",
        children: [
          {
            name: "Cloud Migration",
            path: "/cloud-strategy-engineering-services/cloud-migration-services",
          },
          {
            name: "Cloud Application Development",
            path: "/cloud-strategy-engineering-services/cloud-application-development-services",
          },
        ],
      },
    ],
  },
  {
    menu: "Industries",
    path: "/industries",
    children: [
      {
        innerMenu: "BFSI & Fintech",
        path: "/industries/bfsi-fintech",
      },
      {
        innerMenu: "Healthcare",
        path: "/industries/healthcare",
      },
      {
        innerMenu: "Edtech",
        path: "/industries/edtech",
      },
      {
        innerMenu: "Internet & SaaS",
        path: "/industries/internet-saas",
      },
      {
        innerMenu: "Digital Commerce",
        path: "/industries/digital-commerce",
      },
      {
        innerMenu: "Green & Sustainability",
        path: "/industries/green-sustainability",
      },
    ],
  },
  {
    menu: "Portfolio",
    path: "/portfolio",
  },
  {
    menu: "Career",
    path: "/career",
    children: [
      {
        innerMenu: "Open Roles",
        path: "/career/open-roles",
      },
      {
        innerMenu: "Life at Altumind",
        path: "/career/life-at-altumind",
      },
    ],
  },
];

const Navbar = () => {
  const router = useRouter();
  const { theme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleDropdownToggle = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const handleNavigation = (path) => {
    router.push(path);
    setIsOpen(false);
    setActiveDropdown(null);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <img
                className="h-8 w-auto"
                src={theme === "dark" ? AltumindDark : logo}
                alt="Altumind"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {Navbardata.map((item, index) => (
                <div key={index} className="relative group">
                  <Link
                    href={item.path}
                    className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                  >
                    {item.menu}
                  </Link>
                  {item.children && (
                    <MegaMenu items={item.children} />
                  )}
                </div>
              ))}
              <Link
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none focus:text-blue-600 dark:focus:text-blue-400"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <MobileMenu
          items={Navbardata}
          onNavigate={handleNavigation}
          activeDropdown={activeDropdown}
          onDropdownToggle={handleDropdownToggle}
        />
      )}
    </nav>
  );
};

export default Navbar;