/*!

=========================================================
* Black Dashboard React v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import CommonPageView from "views/CommonPageView.js";
import Dashboard from "views/Dashboard";
import Icons from "views/Icons";
import Notifications from "views/Notifications";
import Typography from "views/Typography";
import UserProfile from "views/UserProfile";
import TableList from "views/TableList";
import Map from "views/Map";

var routes = [
  {
    path: "/environment",
    name: "Ambiente",
    rtlName: "",
    icon: "tim-icons icon-laptop",
    component: CommonPageView,
    layout: "/mentoria-kyrius-aulas/admin"
  },
  {
    path: "/beginning",
    name: "Primeiros Passos",
    rtlName: "",
    icon: "tim-icons icon-satisfied",
    component: CommonPageView,
    layout: "/mentoria-kyrius-aulas/admin"
  },
  {
    path: "/basic",
    name: "Básico",
    rtlName: "",
    icon: "tim-icons icon-send",
    component: CommonPageView,
    layout: "/mentoria-kyrius-aulas/admin"
  },
  {
    path: "/java",
    name: "Linguagem Java",
    rtlName: "",
    icon: "tim-icons icon-key-25",
    component: CommonPageView,
    layout: "/mentoria-kyrius-aulas/admin"
  },
  {
    path: "/intermediate",
    name: "Intermediário",
    rtlName: "",
    icon: "tim-icons icon-components",
    component: CommonPageView,
    layout: "/mentoria-kyrius-aulas/admin"
  },
  {
    path: "/advanced",
    name: "Avançado",
    rtlName: "",
    icon: "tim-icons icon-spaceship",
    component: CommonPageView,
    layout: "/mentoria-kyrius-aulas/admin"
  },
  {
    path: "/career",
    name: "Carreira",
    rtlName: "",
    icon: "tim-icons icon-trophy",
    component: CommonPageView,
    layout: "/mentoria-kyrius-aulas/admin"
  },
  {
    path: "/slack",
    name: "Slack",
    rtlName: "",
    icon: "tim-icons icon-chat-33",
    component: CommonPageView,
    layout: "/mentoria-kyrius-aulas/admin"
  },
  {
    path: "/trello",
    name: "Trello",
    rtlName: "",
    icon: "tim-icons icon-pin",
    component: CommonPageView,
    layout: "/mentoria-kyrius-aulas/admin"
  },
  


  /*
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/mentoria-kyrius-aulas/admin"
  },
  {
    path: "/icons",
    name: "Icons",
    rtlName: "الرموز",
    icon: "tim-icons icon-atom",
    component: Icons,
    layout: "/mentoria-kyrius-aulas/admin"
  },
  {
    path: "/map",
    name: "Map",
    rtlName: "خرائط",
    icon: "tim-icons icon-pin",
    component: Map,
    layout: "/mentoria-kyrius-aulas/admin"
  },
  {
    path: "/notifications",
    name: "Notifications",
    rtlName: "إخطارات",
    icon: "tim-icons icon-bell-55",
    component: Notifications,
    layout: "/mentoria-kyrius-aulas/admin"
  },
  {
    path: "/user-profile",
    name: "User Profile",
    rtlName: "ملف تعريفي للمستخدم",
    icon: "tim-icons icon-single-02",
    component: UserProfile,
    layout: "/mentoria-kyrius-aulas/admin"
  },
  {
    path: "/tables",
    name: "Table List",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-puzzle-10",
    component: TableList,
    layout: "/mentoria-kyrius-aulas/admin"
  },
  {
    path: "/typography",
    name: "Typography",
    rtlName: "طباعة",
    icon: "tim-icons icon-align-center",
    component: Typography,
    layout: "/mentoria-kyrius-aulas/admin"
  },
  */
  
  
];
export default routes;
