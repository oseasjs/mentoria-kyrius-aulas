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
import BaseVideoView from "./BaseVideoView";

class Blank extends BaseVideoView {

  constructor(props) {
    super(props);     
  }

}

export default Blank;
