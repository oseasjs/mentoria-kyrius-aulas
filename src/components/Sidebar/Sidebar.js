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
/*eslint-disable*/

import { SiLinkedin, SiGithub, SiMedium, SiTrello, SiSlack } from 'react-icons/si';
import React from "react";
import { NavLink, Link } from "react-router-dom";
// nodejs library to set properties for components
import { PropTypes } from "prop-types";

// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";

// reactstrap components
import { Nav } from "reactstrap";

var ps;

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.activeRoute.bind(this);
  }
  // verifies if routeName is the one active (in browser input)
  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  }
  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(this.refs.sidebar, {
        suppressScrollX: true,
        suppressScrollY: false
      });
    }
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
    }
  }
  linkOnClick = () => {
    document.documentElement.classList.remove("nav-open");
  };
  renderIcon = (_prop) => {

    // console.log('### renderIcon');

    return (<i className={""+_prop.icon+""} />);


    // if (_prop.reactIcon) {

    //   if (_prop.reactIcon === 'trello') {
    //     return (<SiTrello />);
    //   }
    //   if (_prop.reactIcon === 'slack') {
    //     return (<SiSlack />);
    //   }

    //   return null;
      
    // }
    // else {
    //   return (_prop.reactIcon);
    // }

  }
  render() {
    const { bgColor, routes, rtlActive, logo } = this.props;
    let logoImg = null;
    let logoText = null;
    if (logo !== undefined) {
      if (logo.outterLink !== undefined) {
        logoImg = (
          <a
            href={logo.outterLink}
            className="simple-text logo-mini"
            
            onClick={this.props.toggleSidebar}
          >
            <div className="logo-img">
              <img src={logo.imgSrc} alt="react-logo" />
            </div>
          </a>
        );
        logoText = (
          <a
            href={logo.outterLink}
            className="simple-text logo-normal"
            onClick={this.props.toggleSidebar}
          >
            {logo.text}
          </a>
        );
      } else {
        logoImg = (
          <Link
            to={logo.innerLink}
            className="simple-text logo-mini"
            onClick={this.props.toggleSidebar}
          >
            <div className="logo-img">
              <img src={logo.imgSrc} alt="react-logo" />
            </div>
          </Link>
        );
        logoText = (
          <Link
            to={logo.innerLink}
            className="simple-text logo-normal"
            onClick={this.props.toggleSidebar}
          >
            {logo.text}
          </Link>
        );
      }
    }
    return (
      <div className="sidebar" data={bgColor}>
        <div className="sidebar-wrapper" ref="sidebar">
          {logoImg !== null || logoText !== null ? (
            <div className="logo">
              {logoImg}
              {logoText}
            </div>
          ) : null}
          <Nav>
            {routes.map((prop, key) => {
              if (prop.redirect) return null;
              return (
                <li
                  className={
                    this.activeRoute(prop.path) +
                    (prop.pro ? " active-pro" : "")
                  }
                  key={key}
                >
                  <NavLink
                    to={prop.layout + prop.path}
                    className="nav-link"
                    activeClassName="active"
                    onClick={this.props.toggleSidebar}
                  >
                    {
                      prop.icon === 'slack' ? <i><SiSlack /></i> : prop.icon === 'trello' ? <i><SiTrello /></i> : <i className={prop.icon} />
                    }
                    
                    <p>{prop.name}</p>
                  </NavLink>
                </li>
              );
            })}

            <li className="active-pro" style={{"font-size":"1.5rem"}}>
              <div style={{"margin-left": "15px", "width": "90%"}}>
                <div style={{"float": "left", "margin-right": "15px"}}>
                  <a href="https://www.linkedin.com/company/kyrius-mentoria" 
                    target="_blank"
                    style={{"color":"white"}}>
                    <SiLinkedin />
                  </a>
                </div>
                <div style={{"float": "left", "margin-right": "15px"}}>
                  <a href="https://github.com/oseasjs/kyrius" 
                    target="_blank"
                    style={{"color":"white"}}>
                    <SiGithub />
                  </a>
                </div>
                <div>
                  <a href="https://medium.com/@oseasjs/mentoria-desenvolvedor-java-parte-1-9f2b58e51aaa" 
                    target="_blank"
                    style={{"color":"white"}}>
                    <SiMedium />
                  </a>
                </div>
              </div>              
            </li>
                        
          </Nav>          
        </div>
      </div>
    );
  }
}

Sidebar.defaultProps = {
  rtlActive: false,
  bgColor: "primary",
  routes: [{}]
};

Sidebar.propTypes = {
  // if true, then instead of the routes[i].name, routes[i].rtlName will be rendered
  // insde the links of this component
  rtlActive: PropTypes.bool,
  bgColor: PropTypes.oneOf(["primary", "blue", "green"]),
  routes: PropTypes.arrayOf(PropTypes.object),
  logo: PropTypes.shape({
    // innerLink is for links that will direct the user within the app
    // it will be rendered as <Link to="...">...</Link> tag
    innerLink: PropTypes.string,
    // outterLink is for links that will direct the user outside the app
    // it will be rendered as simple <a href="...">...</a> tag
    outterLink: PropTypes.string,
    // the text of the logo
    text: PropTypes.node,
    // the image src of the logo
    imgSrc: PropTypes.string
  })
};

export default Sidebar;
