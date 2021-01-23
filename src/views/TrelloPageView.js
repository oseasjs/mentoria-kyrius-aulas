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
import React from "react";
import { SiTrello } from "react-icons/si";

// reactstrap components
import {
  Card,
  CardBody,
  Row,
  Col
} from "reactstrap";

class TrelloPageView extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col>
              <Card>
                <CardBody>
                  <img src="/mentoria-kyrius-aulas/trello.png" alt="Trello da Mentoria" />
                </CardBody>                
              </Card>
            </Col>
            <Col md="3">
              <Card className="card-user">
                <CardBody>
                  
                  <div className="author">
                    <div className="block block-one" />
                    <div className="block block-two" />
                    <div className="block block-three" />
                    <div className="block block-four" />
                    <a href="#" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="avatar"
                        src="/mentoria-kyrius-aulas/yoda.png"
                      />                      
                    </a>
                    <h5 className="title">
                      
                      <span>Trello: Kyrius</span>
                      <br/>
                      <br/>
                      
                      <a href="https://trello.com/b/R1wOBbVP/kyrius"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{"font-size": "2.5rem", "color": "#094c72"}}>
                          <SiTrello />
                      </a>
                    </h5>   
                    <h5 className="card-video-title" style={{"font-size": "1.2rem"}}>
                      <a href="https://trello.com/b/R1wOBbVP/kyrius"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{"font-size": "2.5rem", "color": "white"}}>
                        <span className="card-video-title-span">Entrar no Trello da Mentoria</span>
                      </a>                    
                    </h5>               
                  </div>
                  <div className="card-description">
                    
                  </div>
                  
                </CardBody>                
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default TrelloPageView;
