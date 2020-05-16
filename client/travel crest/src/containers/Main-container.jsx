import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Link, NavLink } from 'react-router-dom';
import {
  isMobile
} from "react-device-detect";
import {Button} from 'antd';
import 'antd/dist/antd.css';
import BottomBar from '../components/bottomBar';
class Homepage extends Component {

render() {

  return(
  <div >
    <Helmet>
      <title>Travel Crest</title>
      <meta name="Project RN" content="meta " />
    </Helmet>{console.log(this.props.match.params.tab)}
    <BottomBar tab={this.props.match.params.tab}
               package ={this.props.match.params.package}
               packages ={this.props.match.params.packages}/>
  </div>
)
} //render
} //class
export default Homepage;