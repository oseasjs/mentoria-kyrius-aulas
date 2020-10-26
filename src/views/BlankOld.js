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



class Blank extends React.Component {

  constructor(props) {
    super(props); 

    // console.log(props.location.pathname.split('/admin/')[1]);

    // this.processJson();   
  }

  processJson() {
    
    console.log('### processJson');

    axios.get('../jsons/environment.json') // JSON File Path 
      .then( response => { 

        // console.log('environment: ', response.data);

        this.setState({ 
          videoValues: response.data 
        }); 

        console.log(this.state.videoValues);

    }) 
    .catch(function (error) { 
      console.log(error); 
    });   

  }

  printJsonValues() {
    console.log('### printJsonValues');
    // console.log(this.state);
  }

  render() {
    
    return (
      
      <>        
        <div className="content">
          {this.printJsonValues()}
        </div>
      </>

    );

  }

}

export default Blank;
