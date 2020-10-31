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
import { SiSlack } from "react-icons/si";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  FormGroup,
  Form,
  Input,
  Row,
  Col
} from "reactstrap";

class SlackPageView extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col>
              <Card>
                <CardBody>
                  <img src="/mentoria-kyrius-aulas/slack.png" />
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
                      <span>Slack: Kyrius</span>
                      <br/>
                      <br/>
                      <a href="https://join.slack.com/t/kyrius/shared_invite/enQtOTY2NDQ2NjI3ODk1LTMzZDRhZTRkMTliMDg4YzViODU1NTFlOTBiODk3MTM3MzU5YTI0MmZhODE5MmNhMTgyN2EyNmU2OGU0OTFkYmQ"
                        target="_blank"
                        style={{"font-size": "2.5rem"}}>
                          <SiSlack />
                      </a>
                    </h5>   
                    <h5 className="card-video-title" style={{"font-size": "1.2rem"}}>
                      <a href="https://join.slack.com/t/kyrius/shared_invite/enQtOTY2NDQ2NjI3ODk1LTMzZDRhZTRkMTliMDg4YzViODU1NTFlOTBiODk3MTM3MzU5YTI0MmZhODE5MmNhMTgyN2EyNmU2OGU0OTFkYmQ"
                        target="_blank"
                        style={{"font-size": "2.5rem", "color": "white"}}>
                        <span className="card-video-title-span">Entrar no Slack da Mentoria</span>
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

export default SlackPageView;
