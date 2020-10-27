import React from "react";
import { SiMedium, SiSlack, SiYoutube } from 'react-icons/si';
import axios from "axios";

// reactstrap components
import {
  Card,
  CardBody,
  Row,
  Col,
  CardHeader,
  CardTitle
} from "reactstrap";



class BasePageView extends React.Component {

  constructor(props) {
    super(props);
    this.state = { jsonClassContent: {items: []} };
  }

  async componentDidMount() {
    await this.getJsonClassContent(); 
  }

  getJsonClassContent = async () => {
    
    const jsonFileName = this.props.location.pathname.split('/admin/')[1];
    const url = '/mentoria-kyrius-aulas/jsons/' + jsonFileName + '.json';

    await axios.get(url)
      .then( response => { 
        this.setState({ jsonClassContent: response.data });

        console.log(this.state.jsonClassContent.items);

    }) 
    .catch(function (error) { 
      console.log(error); 
    });

  }

  getBaseUrl() {
    if (!this.props.route || !this.props.routes || !this.props.location) {
      throw new Error("Missing props from React router.")
    }
    var route = this.props.route
    var routeDepth = this.props.routes.indexOf(route)
    return this.props.location.pathname.split("/").slice(0, routeDepth+1).join("/")
  }

  renderRow(json) {
    if (json.type === 'video') {
      return this.renderVideo(json);
    }
    if (json.type === 'text') {
      return this.renderText(json);
    }
  }

  renderVideo(jsonVideoContent) {
    return (
      <Row>
          <Col md="3">
            <Card className="card-user" style={{"height":"557px"}}>
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
                      src={jsonVideoContent.avatarUrl}
                    />                      
                  </a>
                  <h5 className="title">
                    <span>Canal: {jsonVideoContent.channelName}</span>
                    <br/>
                    <a href={jsonVideoContent.channelUrl} 
                      target="_blank"
                      style={{"font-size": "2.5rem"}}>
                       {this.renderIcon(jsonVideoContent)}
                    </a> 
                  </h5>   
                  <h5 className="card-video-title" style={{"font-size": "1.2rem"}}>
                    <span className="card-video-title-span">{jsonVideoContent.title}</span>
                  </h5>               
                </div>
                <div className="card-description">
                  {jsonVideoContent.descriptionCheckList.map((d) => {
                    return (
                      <div style={{"margin-left":"20px", "margin-top": "5px"}}>
                        <i className="tim-icons icon-check-2" />
                        {" " + d.description}
                        <br/>
                      </div>
                    )
                  })}                        
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card className="card-user">
              <CardBody width="100">
                <iframe src={"https://www.youtube.com/embed/" + jsonVideoContent.id + "?autoplay=0&amp;cc_load_policy=1&amp;controls=1&amp;disablekb=0&amp;enablejsapi=0&amp;fs=1&amp;iv_load_policy=1&amp;loop=0&amp;rel=0&amp;showinfo=1&amp;start=0&amp;wmode=transparent&amp;theme=dark&amp;mute=0"}
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                  allowfullscreen="" tabindex="-1" frameborder="0"
                  style={{"width": "100%", "height":"520px"}}>
                </iframe>
              </CardBody>
            </Card>
          </Col>
        </Row>
    )
  }

  renderIcon(jsonContent) {

    if (jsonContent.iconType === 'slack') {
      return (<SiSlack/>);
    }
    else if (jsonContent.iconType === 'medium') {
      return (<SiMedium/>);
    }
    else if (jsonContent.iconType === 'youtube') {
      return (<SiYoutube/>);
    }
    else {
      return "";
    }

  }

  renderText(jsonTextContent) {
    return (
      <Row>
        <Col md="3">
          <Card className="card-user" style={{"height":"300px"}}>
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
                      src={jsonTextContent.avatarUrl}
                    />                      
                  </a>
                  <h5 className="title">
                    <span>{jsonTextContent.channelName}</span>
                    <br/>
                    <a href={jsonTextContent.channelUrl} 
                      target="_blank"
                      style={{"font-size": "2.5rem"}}>
                        {this.renderIcon(jsonTextContent)}
                    </a>
                  </h5>   
                  <h5 className="card-video-title" style={{"font-size": "1.2rem"}}>
                    <span className="card-video-title-span">{jsonTextContent.title}</span>
                  </h5>               
                </div>
                <div className="card-description">
                  
                </div>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card style={{"height":"300px"}}>
            <CardBody>

              <div >
                <h5>
                  {jsonTextContent.descriptionCheckList.map((d) => {
                      return (
                        <div style={{"margin-left":"20px", "margin-top": "20px"}}>
                          {d.description}
                          <br/>
                        </div>
                      )
                    })}  
                </h5>
              </div>
              
            </CardBody>
          </Card>
        </Col>
      </Row>
    )
  }

  render() {
    
    return (
      
      <>      
        <div className="content">

          <Row>
            <Col>
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">{this.state.jsonClassContent.title}</CardTitle>
                </CardHeader>
                <CardBody>
                  {this.state.jsonClassContent.description}
                </CardBody>
              </Card>
            </Col>
          </Row>

          {this.state.jsonClassContent.items.map((json) => {
            return (this.renderRow(json))
          })}

        </div>
      </>

    );

  }

}

export default BasePageView;
