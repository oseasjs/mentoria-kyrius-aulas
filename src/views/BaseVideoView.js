import React from "react";
import { SiYoutube } from 'react-icons/si';
import axios from "axios";

// reactstrap components
import {
  Card,
  CardBody,
  Row,
  Col
} from "reactstrap";



class BaseVideoView extends React.Component {

  constructor(props) {
    super(props);
    this.state = { jsonArray: [] };
  }

  async componentDidMount() {
    await this.getJsonVideos(); 
  }

  getJsonVideos = async () => {
    
    const jsonFileName = this.props.location.pathname.split('/admin/')[1];
    const url = '../jsons/' + jsonFileName + '.json';

    await axios.get(url)
      .then( response => { 
        this.setState({ jsonArray: response.data });
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

  renderVideo(videoValue) {
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
                      src={videoValue.avatarUrl}
                    />                      
                  </a>
                  <h5 className="title">
                    <span>Canal: {videoValue.channelName}</span>
                    <br/>
                    <a href={videoValue.channelUrl} 
                      target="_blank"
                      style={{"font-size": "2.5rem"}}>
                      <SiYoutube />
                    </a> 
                  </h5>   
                  <h5 className="card-video-title" style={{"font-size": "1.2rem"}}>
                    <span className="card-video-title-span">{videoValue.title}</span>
                  </h5>               
                </div>
                <div className="card-description">
                  {videoValue.descriptionCheckList.map((d) => {
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
                <iframe src={"http://www.youtube.com/embed/" + videoValue.videoId + "?autoplay=0&amp;cc_load_policy=1&amp;controls=1&amp;disablekb=0&amp;enablejsapi=0&amp;fs=1&amp;iv_load_policy=1&amp;loop=0&amp;rel=0&amp;showinfo=1&amp;start=0&amp;wmode=transparent&amp;theme=dark&amp;mute=0"}
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

  renderText(textValue) {
    return (
      <Row>
        <Col md="3">
          <Card className="card-user" style={{"height":"557px"}}>
            <CardBody>
              NOT VIDEO
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card className="card-user" style={{"height":"557px"}}>
            <CardBody>
              NONE
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

          {this.state.jsonArray.map((json) => {
            return (this.renderRow(json))
          })}

        </div>
      </>

    );

  }

}

export default BaseVideoView;
