import React from "react";
import RealTimeNavbar from "./realtime/RealTimeNavbar";
import RealTimeDataNavbar from "./realtimedata/RealTimeDataNavbar";

export default function Navbar() {
  if (window !== "undefined") {
    // your document or window manipulation

    // window.location.href

    var route = window.location.href;
    console.log("Route: " + route);

    var sub_routes = route.split("/");
    console.log("Route Break-up: " + sub_routes);

    // Route: http://localhost:8000/
    // Route Break-up: http:,,localhost:8000,

    var navbarToBeMapped = "realtime";

    if (sub_routes.length > 3) {
      navbarToBeMapped = sub_routes[3];
    } else {
      navbarToBeMapped = "realtime";
    }

    // switch (localStorage.getItem("cc")) {}

    switch (navbarToBeMapped) {
      // case "realtime":
      //   return (
      //     <nav id="navbar" class="navbar">
      //       <RealTimeNavbar />
      //       <i class="bi bi-list mobile-nav-toggle"></i>
      //     </nav>
      //   );
      case "realtimedata":
        return (
          <nav id="navbar" class="navbar">
            <RealTimeDataNavbar />
            <i class="bi bi-list mobile-nav-toggle"></i>
          </nav>
        );
      case "monitoring":
        return (
          <nav id="navbar" class="navbar">
            <RealTimeNavbar />
            <i class="bi bi-list mobile-nav-toggle"></i>
          </nav>
        );
      case "deod":
        return (
          <nav id="navbar" class="navbar">
            <RealTimeDataNavbar />
            <i class="bi bi-list mobile-nav-toggle"></i>
          </nav>
        );
      case "labs-r&d-ai":
        return (
          <nav id="navbar" class="navbar">
            <RealTimeNavbar />
            <i class="bi bi-list mobile-nav-toggle"></i>
          </nav>
        );
      case "energycomponents":
        return (
          <nav id="navbar" class="navbar">
            <RealTimeDataNavbar />
            <i class="bi bi-list mobile-nav-toggle"></i>
          </nav>
        );
      case "assetmanagementsystems":
        return (
          <nav id="navbar" class="navbar">
            <RealTimeNavbar />
            <i class="bi bi-list mobile-nav-toggle"></i>
          </nav>
        );
      case "advancedprocesses":
        return (
          <nav id="navbar" class="navbar">
            <RealTimeDataNavbar />
            <i class="bi bi-list mobile-nav-toggle"></i>
          </nav>
        );
      default:
        return (
          <nav id="navbar" class="navbar">
            <RealTimeNavbar />
            <i class="bi bi-list mobile-nav-toggle"></i>
          </nav>
        );
    }
  }
}

// import React from "react";
// import RealTimeNavbar from "./realtime/RealTimeNavbar";
// import RealTimeDataNavbar from "./realtimedata/RealTimeDataNavbar";

// export default function Navbar() {
//   // window.location.href

//   var route = window.location.href;
//   console.log("Route: " + route);

//   var sub_routes = route.split("/");
//   console.log("Route Break-up: " + sub_routes);

//   // Route: http://localhost:8000/
//   // Route Break-up: http:,,localhost:8000,

//   var navbarToBeMapped = "realtime";

//   if (sub_routes.length > 3) {
//     navbarToBeMapped = sub_routes[3];
//   } else {
//     navbarToBeMapped = "realtime";
//   }

//   // switch (localStorage.getItem("cc")) {}

//   switch (navbarToBeMapped) {
//     // case "realtime":
//     //   return (
//     //     <nav id="navbar" class="navbar">
//     //       <RealTimeNavbar />
//     //       <i class="bi bi-list mobile-nav-toggle"></i>
//     //     </nav>
//     //   );
//     case "realtimedata":
//       return (
//         <nav id="navbar" class="navbar">
//           <RealTimeDataNavbar />
//           <i class="bi bi-list mobile-nav-toggle"></i>
//         </nav>
//       );
//     case "monitoring":
//       return (
//         <nav id="navbar" class="navbar">
//           <RealTimeNavbar />
//           <i class="bi bi-list mobile-nav-toggle"></i>
//         </nav>
//       );
//     case "deod":
//       return (
//         <nav id="navbar" class="navbar">
//           <RealTimeDataNavbar />
//           <i class="bi bi-list mobile-nav-toggle"></i>
//         </nav>
//       );
//     case "labs-r&d-ai":
//       return (
//         <nav id="navbar" class="navbar">
//           <RealTimeNavbar />
//           <i class="bi bi-list mobile-nav-toggle"></i>
//         </nav>
//       );
//     case "energycomponents":
//       return (
//         <nav id="navbar" class="navbar">
//           <RealTimeDataNavbar />
//           <i class="bi bi-list mobile-nav-toggle"></i>
//         </nav>
//       );
//     case "assetmanagementsystems":
//       return (
//         <nav id="navbar" class="navbar">
//           <RealTimeNavbar />
//           <i class="bi bi-list mobile-nav-toggle"></i>
//         </nav>
//       );
//     case "advancedprocesses":
//       return (
//         <nav id="navbar" class="navbar">
//           <RealTimeDataNavbar />
//           <i class="bi bi-list mobile-nav-toggle"></i>
//         </nav>
//       );
//     default:
//       return (
//         <nav id="navbar" class="navbar">
//           <RealTimeNavbar />
//           <i class="bi bi-list mobile-nav-toggle"></i>
//         </nav>
//       );
//   }
// }
