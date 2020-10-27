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
import React from "react";
// used for making the prop types of this component
import PropTypes from "prop-types";
import { SiLinkedin, SiMedium, SiGithub, SiReact, SiNodeDotJs, SiGithubactions } from 'react-icons/si';

// reactstrap components
import { Container, Row, Nav, NavItem, NavLink } from "reactstrap";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <Container fluid>
          <Nav>
            <NavItem>
              <NavLink href="https://reactjs.org/" target="_blank"><SiReact /></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://nodejs.org" target="_blank"><SiNodeDotJs /></NavLink>              
            </NavItem>            
            <NavItem>
              <NavLink href="https://pages.github.com/" target="_blank"><SiGithubactions /></NavLink>              
            </NavItem>            
          </Nav>
          <div className="copyright">
            © {new Date().getFullYear()} made with{" "}
            <i className="tim-icons icon-heart-2" /> by{": "}
            <a
              href="https://www.linkedin.com/company/kyrius-mentoria"
              target="_blank"
            >
              Mentoria | Kyrius
            </a>{" "}            
          </div>
        </Container>
      </footer>
    );
  }
}

export default Footer;
