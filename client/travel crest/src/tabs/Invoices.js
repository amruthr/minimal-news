import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom'
import {
  isBrowser, isMobile
} from "react-device-detect";
import { connect } from 'react-redux'
import { Affix,Layout, Menu , Button, PageHeader, Tabs, Card} from 'antd';
import Post from '../components/Post'
class Invoices extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
      loading:true,
      
    };
  }
  componentDidMount() {

  }
  render() {
    const { Header, Content, Footer, Sider } = Layout;
    const {isOpen} = this.state
    const { TabPane } = Tabs;
    const areastyle ={height:'80vh', border:'solid 1px black',}

return (
    <div style={{backdropFilter:'blur(7px)', width:'100%'}}>
    <div style={{backgroundImage:'url("https://image.freepik.com/free-vector/trip-concept-illustration_114360-1247.jpg")', color:'#fff', fontSize:'50px', height:'100vh', backgroundPositionX:'center', backgrondRepeat:'no-repeat', backgroundSize: 'contain' ,backgroundAttachment: 'fixed' }}/ >
    <div style={{color:'dodgerblue', fontSize:'50px', height:'70vh',}}>Go See the World</div>

    {Post("International Packages","/packages/International",null,"teal", "dodgerblue")}
    {Post("Pilgrimage","/packages/kerala", null,"lightgreen", "lime")}
    {Post("Services","/services",null,"#fff", "#fff")}
    </div>

    );
  }
};



export default Invoices;
