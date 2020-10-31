import React from "react";
import YoutubeModal from "react-youtube-modal";
import { SiMedium, SiSlack, SiYoutube } from 'react-icons/si';
import axios from "axios";

// reactstrap components
import {
  Card,
  CardBody,
  Row,
  Col,
  CardHeader,
  CardTitle,
  Modal,
  Button,  
} from "reactstrap";

class CommonPageView extends React.Component {

  constructor(props) {
    super(props);
    this.state = { jsonClassContent: {items: []}, teste: 'teste', show: false, selectedJsonVideo: {}};
  }

  async componentDidMount() {
    await this.getJsonClassContent(); 
  }

  getJsonClassContent = async () => {
    
    const jsonFileName = this.props.location.pathname.split('/admin/')[1];
    const url = '/mentoria-kyrius-aulas/jsons/' + jsonFileName + '.json';

    await axios.get(url)
      .then( response => { 
        this.setState({jsonClassContent: response.data});
    }) 
    .catch(function (error) { 
      console.log(error); 
    });

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
            <Card className="card-user">
              <CardBody>
                <div className="author">
                  <div className="block block-one" />
                  <div className="block block-two" />
                  <div className="block block-three" />
                  <div className="block block-four" />
                  <a href={jsonVideoContent.channelUrl} 
                    target="_blank">
                    <img
                      alt="..."
                      className="avatar"
                      src={jsonVideoContent.avatarUrl}
                    />                      
                  </a>
                  <h5 className="title">
                    <div>
                      <a href={jsonVideoContent.channelUrl} 
                        target="_blank"
                        style={{"font-size": "1rem"}}>
                        Canal: {jsonVideoContent.channelName}
                      </a>
                    </div>
                  </h5>
                  <YoutubeModal videoId={jsonVideoContent.id} height="520" width="60%">
                    <div className="card-youtube-video">
                      {this.renderIcon(jsonVideoContent)}
                    </div>
                  </YoutubeModal>
                </div>                
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card className="card-user">
              <CardBody>

                <h5 className="card-video-title" >
                  <span className="card-video-title-span">{jsonVideoContent.title}</span>
                </h5>
                
                <div className="card-description">
                  {jsonVideoContent.descriptionCheckList.map((d) => {
                    return (
                      <div style={{"marginLeft":"20px", "marginTop": "5px"}}>
                        <i className="tim-icons icon-check-2" />
                        {" " + d.description}
                        <br/>
                      </div>
                    )
                  })}                        
                </div>
                <br/>
              </CardBody>
            </Card>
          </Col>
          <Col md="2">
            <Card className="card-user" >
              <CardBody style={{"text-align": "center"}}>
                <div >
                  <i className="tim-icons icon-time-alarm" 
                    style={{"font-size": "2.5rem", "margin-top": "20px"}}/>
                </div>
                <div className="card-description">
                  <span>
                    Tempo {': ' + jsonVideoContent.duration}
                  </span>
                </div>
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
          <Card className="card-user" >
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

                  <a href={jsonTextContent.channelUrl} 
                    target="_blank"
                    style={{"font-size": "1rem"}}>
                    Canal: {jsonTextContent.channelName}
                  </a>
                                    
                </h5>   
                <a href={jsonTextContent.channelUrl} 
                  target="_blank"
                  style={{"font-size": "2.5rem"}}>
                    {this.renderIcon(jsonTextContent)}
                </a>
                                             
              </div>
              <div className="card-description">
                
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card className="card-user" >
            <CardBody>

              <h5 className="card-video-title" style={{"font-size": "1.2rem"}}>
                <span className="card-video-title-span">{jsonTextContent.title}</span>
              </h5>  

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
        <Col md="2">
            <Card className="card-user" >
              <CardBody style={{"text-align": "center"}}>
                <div >
                  <i className="tim-icons icon-time-alarm" 
                    style={{"font-size": "2.5rem", "margin-top": "20px"}}/>
                </div>
                <div className="card-description">
                  <span>
                    Tempo {': ' + jsonTextContent.duration}
                  </span>
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

export default CommonPageView;
