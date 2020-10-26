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
import Environment from "views/Environment.js";
import PageVideoView from "views/PageVideoView.js";
import Blank from "views/Blank.js";

import Dashboard from "views/Dashboard.js";
import Icons from "views/Icons.js";
import Map from "views/Map.js";
import Notifications from "views/Notifications.js";
import Rtl from "views/Rtl.js";
import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
import UserProfile from "views/UserProfile.js";

var routes = [
  {
    path: "/environment",
    name: "Configuração",
    rtlName: "",
    icon: "tim-icons icon-laptop",
    component: Environment,
    layout: "/admin"
  },
  {
    path: "/beginning",
    name: "Primeiros Passos",
    rtlName: "",
    icon: "tim-icons icon-satisfied",
    component: PageVideoView,
    layout: "/admin"
  },
  {
    path: "/basic",
    name: "Básico",
    rtlName: "",
    icon: "tim-icons icon-send",
    component: PageVideoView,
    layout: "/admin"
  },
  {
    path: "/java",
    name: "Linguagem Java",
    rtlName: "",
    icon: "tim-icons icon-key-25",
    component: PageVideoView,
    layout: "/admin"
  },
  {
    path: "/intermadiate-know",
    name: "Intermediário",
    rtlName: "",
    icon: "tim-icons icon-components",
    component: PageVideoView,
    layout: "/admin"
  },
  {
    path: "/advanced",
    name: "Avançado",
    rtlName: "",
    icon: "tim-icons icon-spaceship",
    component: PageVideoView,
    layout: "/admin"
  },
  {
    path: "/career",
    name: "Carreira",
    rtlName: "",
    icon: "tim-icons icon-trophy",
    component: PageVideoView,
    layout: "/admin"
  },
  {
    path: "/slack",
    name: "Slack",
    rtlName: "",
    icon: "tim-icons icon-chat-33",
    component: PageVideoView,
    layout: "/admin"
  },
  {
    path: "/trello",
    name: "Trello",
    rtlName: "",
    icon: "tim-icons icon-pin",
    component: PageVideoView,
    layout: "/admin"
  },
  {
    path: "/icons",
    name: "Icons",
    rtlName: "الرموز",
    icon: "tim-icons icon-atom",
    component: PageVideoView,
    layout: "/admin"
  },
  



  {
    /*

      {
        path: "/notifications",
        name: "Notifications",
        rtlName: "إخطارات",
        icon: "tim-icons icon-bell-55",
        component: Notifications,
        layout: "/admin"
      },
      {
        path: "/icons",
        name: "Icons",
        rtlName: "الرموز",
        icon: "tim-icons icon-atom",
        component: Icons,
        layout: "/admin"
      },
      
      {
        path: "/dashboard",
        name: "Dashboard",
        rtlName: "لوحة القيادة",
        icon: "tim-icons icon-chart-pie-36",
        component: Dashboard,
        layout: "/admin"
      },
      {
        path: "/icons",
        name: "Icons",
        rtlName: "الرموز",
        icon: "tim-icons icon-atom",
        component: Icons,
        layout: "/admin"
      },
      {
        path: "/map",
        name: "Map",
        rtlName: "خرائط",
        icon: "tim-icons icon-pin",
        component: Map,
        layout: "/admin"
      },
      {
        path: "/notifications",
        name: "Notifications",
        rtlName: "إخطارات",
        icon: "tim-icons icon-bell-55",
        component: Notifications,
        layout: "/admin"
      },
      {
        path: "/user-profile",
        name: "User Profile",
        rtlName: "ملف تعريفي للمستخدم",
        icon: "tim-icons icon-single-02",
        component: UserProfile,
        layout: "/admin"
      },
      {
        path: "/tables",
        name: "Table List",
        rtlName: "قائمة الجدول",
        icon: "tim-icons icon-puzzle-10",
        component: TableList,
        layout: "/admin"
      },
      {
        path: "/typography",
        name: "Typography",
        rtlName: "طباعة",
        icon: "tim-icons icon-align-center",
        component: Typography,
        layout: "/admin"
      },
      {
        path: "/rtl-support",
        name: "RTL Support",
        rtlName: "ار تي ال",
        icon: "tim-icons icon-world",
        component: Rtl,
        layout: "/rtl"
      }

  */}
  
  
];
export default routes;
