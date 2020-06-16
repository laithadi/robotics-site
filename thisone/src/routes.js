import HomePage from "views/HomePage.js";
import Projects from "views/Projects.js";
import AboutUs from "views/AboutUs.js";
import JoinTheTeam from "views/JoinTheTeam.js";
import Sponsership from "views/Sponsership.js";
import MeetTheTeam from "views/MeetTheTeam.js";
import Events from "views/Events.js";
import ContactUs from "views/ContactUs.js";

var routes = [
  {
    path: "/homepage",
    name: "Home Page",
    icon: "nc-icon nc-bank",
    component: HomePage,
    layout: "/admin",
  },
  {
    path: "/aboutus",
    name: "About Us",
    icon: "nc-icon nc-alert-circle-i",
    component: AboutUs,
    layout: "/admin",
  },
  {
    path: "/meettheteam",
    name: "Meet The Team",
    icon: "nc-icon nc-badge",
    component: MeetTheTeam,
    layout: "/admin",
  },
  {
    path: "/projects",
    name: "Projects",
    icon: "nc-icon nc-ruler-pencil",
    component: Projects,
    layout: "/admin",
  },
  {
    path: "/events",
    name: "Events",
    icon: "nc-icon nc-planet",
    component: Events,
    layout: "/admin",
  },
  {
    path: "/sponsership",
    name: "Sponsership",
    icon: "nc-icon nc-briefcase-24",
    component: Sponsership,
    layout: "/admin",
  },
  {
    path: "/jointheteam",
    name: "Join The Team",
    icon: "nc-icon nc-favourite-28",
    component: JoinTheTeam,
    layout: "/admin",
  },
  {
    pro: true,
    path: "/contactus",
    name: "Contact Us",
    icon: "nc-icon nc-send",
    component: ContactUs,
    layout: "/admin",
  },
];
export default routes;
