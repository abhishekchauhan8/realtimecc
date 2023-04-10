import { NavLink } from "react-router-dom";
import { useState } from "react";

import { FaBars, FaHome, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BiAnalyse, BiSearch } from "react-icons/bi";
import { BiCog } from "react-icons/bi";
import { AiFillHeart, AiTwotoneFileExclamation } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";

import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
import "./sidebar.css";
import React from "react";
const routes = [
  {
    path: "/rtd-coe/products-aveva_pi/overview",
    name: "Overview",
    icon: <FaHome />,
  },
  {
    path: "/rtd-coe/products-aveva_pi/architecture",
    name: "Architecture",
    icon: <FaUser />,
  },
  {
    path: "/rtd-coe/products-aveva_pi/architecture-documents",
    name: "Architecture Documents",
    icon: <FaUser />,
  },
  {
    path: "/rtd-coe/products-aveva_pi/tools",
    name: "PI Tools",
    icon: <AiTwotoneFileExclamation />,
    subRoutes: [
      {
        path: "/rtd-coe/products-aveva_pi/tools/pivision",
        name: "PI Vision",
        icon: <FaUser />,
      },
      {
        path: "/rtd-coe/products-aveva_pi/tools/piprocessbook",
        name: "PI Processbook",
        icon: <FaMoneyBill />,
      },
      {
        path: "/rtd-coe/products-aveva_pi/tools/pimanuallogger",
        name: "PI Manual Logger",
        icon: <FaMoneyBill />,
      },
      {
        path: "/rtd-coe/products-aveva_pi/tools/piclienttools",
        name: "PI Client Tools",
        icon: <FaMoneyBill />,
      },
      {
        path: "/rtd-coe/products-aveva_pi/tools/piadmintools",
        name: "PI Admin Tools",
        icon: <FaMoneyBill />,
      },
      {
        path: "/rtd-coe/products-aveva_pi/tools/pismt",
        name: "PI SMT",
        icon: <FaMoneyBill />,
      },
    ],
  },
  {
    path: "/rtd-coe/products-aveva_pi/connectivityTools",
    name: "PI Connectivity Tools",
    icon: <AiTwotoneFileExclamation />,
    subRoutes: [
      {
        path: "/rtd-coe/products-aveva_pi/connectivityTools/pisdk",
        name: "PI SDK",
        icon: <FaUser />,
      },
      {
        path: "/rtd-coe/products-aveva_pi/connectivityTools/piafsdk",
        name: "PI AF SDK",
        icon: <FaMoneyBill />,
      },
      {
        path: "/rtd-coe/products-aveva_pi/connectivityTools/piwebapi",
        name: "PI Web API",
        icon: <FaMoneyBill />,
      },
      {
        path: "/rtd-coe/products-aveva_pi/connectivityTools/streamsets",
        name: "Streamsets",
        icon: <FaMoneyBill />,
      },
      {
        path: "/rtd-coe/products-aveva_pi/connectivityTools/opcua",
        name: "OPC UA",
        icon: <FaMoneyBill />,
      },
      {
        path: "/rtd-coe/products-aveva_pi/connectivityTools/sisdsl",
        name: "SIS DSL",
        icon: <FaMoneyBill />,
      },
      {
        path: "/rtd-coe/products-aveva_pi/connectivityTools/db",
        name: "ODBC/JDBC/OLEDB",
        icon: <FaMoneyBill />,
      },
    ],
  },
  {
    path: "/rtd-coe/products-aveva_pi/dataAndAnalyticsTools",
    name: "PI Data & Analytics Tools",
    icon: <AiTwotoneFileExclamation />,
    subRoutes: [
      {
        path: "/rtd-coe/products-aveva_pi/dataAndAnalyticsTools/tct",
        name: "TCT",
        icon: <FaUser />,
      },
      {
        path: "/rtd-coe/products-aveva_pi/dataAndAnalyticsTools/ssip",
        name: "SSIP",
        icon: <FaMoneyBill />,
      },
      {
        path: "/rtd-coe/products-aveva_pi/dataAndAnalyticsTools/seeq",
        name: "Seeq",
        icon: <FaMoneyBill />,
      },
      {
        path: "/rtd-coe/products-aveva_pi/dataAndAnalyticsTools/customHierarchies",
        name: "Custom Hierarchies",
        icon: <FaMoneyBill />,
      },
    ],
  },
  {
    path: "/rtd-coe/products-aveva_pi/documentation&settings",
    name: "PI Documentation & Settings",
    icon: <AiTwotoneFileExclamation />,
    subRoutes: [
      {
        path: "/rtd-coe/products-aveva_pi/documentation&settings/pisdk",
        name: "Standards & Cookbooks ",
        icon: <FaUser />,
      },
      {
        path: "/rtd-coe/products-aveva_pi/documentation&settings/piafsdk",
        name: "PI Wiki Pages",
        icon: <FaMoneyBill />,
      },
      {
        path: "/rtd-coe/products-aveva_pi/documentation&settings/piwebapi",
        name: "Quality COntrol & Assurance",
        icon: <FaMoneyBill />,
      },
      {
        path: "/rtd-coe/products-aveva_pi/documentation&settings/streamsets",
        name: "Enhancements Revised",
        icon: <FaMoneyBill />,
      },
      {
        path: "/rtd-coe/products-aveva_pi/documentation&settings/piadmintools",
        name: "PI Firewall Rules",
        icon: <FaMoneyBill />,
      },
      {
        path: "/rtd-coe/products-aveva_pi/documentation&settings/opcua",
        name: "PI Release Updates",
        icon: <FaMoneyBill />,
      },
      {
        path: "/rtd-coe/products-aveva_pi/documentation&settings/sisdsl",
        name: "PowerBI Reports",
        icon: <FaMoneyBill />,
      },
      {
        path: "/rtd-coe/products-aveva_pi/documentation&settings/db",
        name: "ODBC/JDBC/OLEDB",
        icon: <FaMoneyBill />,
      },
    ],
  },
  {
    path: "/rtd-coe/products-aveva_pi/others",
    name: "Others",
    icon: <AiTwotoneFileExclamation />,
    subRoutes: [
      {
        path: "/rtd-coe/products-aveva_pi/tools/pisdk",
        name: "CoE Library",
        icon: <FaUser />,
      },
      {
        path: "/rtd-coe/products-aveva_pi/tools/piafsdk",
        name: "CoE Decision Tracker",
        icon: <FaMoneyBill />,
      },
      {
        path: "/rtd-coe/products-aveva_pi/tools/piwebapi",
        name: "CoE Project Register 2019",
        icon: <FaMoneyBill />,
      },
      {
        path: "/rtd-coe/products-aveva_pi/tools/streamsets",
        name: "CoE Project Register 2020",
        icon: <FaMoneyBill />,
      },
      {
        path: "/rtd-coe/products-aveva_pi/tools/piadmintools",
        name: "CoE Project Register 2021",
        icon: <FaMoneyBill />,
      },
      {
        path: "/rtd-coe/products-aveva_pi/tools/opcua",
        name: "CoE Project Register 2022",
        icon: <FaMoneyBill />,
      },
      {
        path: "/rtd-coe/products-aveva_pi/tools/db",
        name: "PITS FAQs",
        icon: <FaMoneyBill />,
      },
    ],
  },
  // {
  //   path: "/login",
  //   name: "Login",
  //   icon: <BiAnalyse />,
  // },
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "280px" : "45px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo hey"
                >
                  AVEVA PI
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>

          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  exact
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>

        <main>{children}</main>
      </div>
    </>
  );
};

export default SideBar;

// <div className="search">
//             <div className="search_icon">
//               <BiSearch />
//             </div>
//             <AnimatePresence>
//               {isOpen && (
//                 <motion.input
//                   initial="hidden"
//                   animate="show"
//                   exit="hidden"
//                   variants={inputAnimation}
//                   type="text"
//                   placeholder="Search"
//                 />
//               )}
//             </AnimatePresence>
//           </div>

// import React from "react";
// import "./sidebar.css";

// import { GiWindTurbine } from "react-icons/gi";
// import { AiFillHome } from "react-icons/ai";
// import { MdOutlineAutoGraph } from "react-icons/md";

// const Sidebar = () => {
//   return (
//     <div className="sidebar grid">
//       <div className="logoDiv flex">
//         <img src="shell_logo.png" alt="Image Name" />
//         <h2>SEPT</h2>
//       </div>

//       <div className="menuDiv">
//         <h3 className="divTitle">Quick Menu</h3>
//         <ul className="menuLists grid">
//           <li className="listItem">
//             <a href="#" className="menuLink flex">
//               <AiFillHome className="icon" />
//               <span className="smallText">Dashboard</span>
//             </a>
//           </li>

//           <li className="listItem">
//             <a href="#" className="menuLink flex">
//               <GiWindTurbine className="icon" />
//               <span className="smallText">Turbines</span>
//             </a>
//           </li>

//           <li className="listItem">
//             <a href="#" className="menuLink flex">
//               <MdOutlineAutoGraph className="icon" />
//               <span className="smallText">Graphs</span>
//             </a>
//           </li>
//         </ul>
//       </div>

//       <div className="settingDiv">
//         <h3 className="divTitle">Settings</h3>
//         <ul className="menuLists grid">
//           <li className="listItem">
//             <a href="#" className="menuLink flex">
//               <AiFillHome className="icon" />
//               <span className="smallText">Dashboard</span>
//             </a>
//           </li>

//           <li className="listItem">
//             <a href="#" className="menuLink flex">
//               <GiWindTurbine className="icon" />
//               <span className="smallText">Turbines</span>
//             </a>
//           </li>

//           <li className="listItem">
//             <a href="#" className="menuLink flex">
//               <MdOutlineAutoGraph className="icon" />
//               <span className="smallText">Graphs</span>
//             </a>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
