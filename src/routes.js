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
import VideoPageView from "views/VideoPageView.js";
import SlackPageView from "views/SlackPageView.js";
import TrelloPageView from "views/TrelloPageView.js";

var routes = [
  {
    path: "/environment",
    name: "Ambiente",
    rtlName: "",
    icon: "tim-icons icon-laptop",
    component: VideoPageView,
    layout: "/mentoria-kyrius-aulas/admin"
  },
  {
    path: "/beginning",
    name: "Primeiros Passos",
    rtlName: "",
    icon: "tim-icons icon-satisfied",
    component: VideoPageView,
    layout: "/mentoria-kyrius-aulas/admin"
  },
  {
    path: "/basic",
    name: "Básico",
    rtlName: "",
    icon: "tim-icons icon-send",
    component: VideoPageView,
    layout: "/mentoria-kyrius-aulas/admin"
  },
  {
    path: "/java",
    name: "Linguagem Java",
    rtlName: "",
    icon: "tim-icons icon-key-25",
    component: VideoPageView,
    layout: "/mentoria-kyrius-aulas/admin"
  },
  {
    path: "/intermediate",
    name: "Intermediário",
    rtlName: "",
    icon: "tim-icons icon-components",
    component: VideoPageView,
    layout: "/mentoria-kyrius-aulas/admin"
  },
  {
    path: "/advanced",
    name: "Avançado",
    rtlName: "",
    icon: "tim-icons icon-spaceship",
    component: VideoPageView,
    layout: "/mentoria-kyrius-aulas/admin"
  },
  {
    path: "/career",
    name: "Carreira",
    rtlName: "",
    icon: "tim-icons icon-trophy",
    component: VideoPageView,
    layout: "/mentoria-kyrius-aulas/admin"
  },
  {
    path: "/slack",
    name: "Slack",
    rtlName: "",
    icon: "slack",
    component: SlackPageView,
    layout: "/mentoria-kyrius-aulas/admin"
  },
  {
    path: "/trello",
    name: "Trello",
    rtlName: "",
    icon: "trello",
    component: TrelloPageView,
    layout: "/mentoria-kyrius-aulas/admin"
  }
  
];
export default routes;
