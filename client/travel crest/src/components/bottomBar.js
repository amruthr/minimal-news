import React, { Component } from 'react';

import { Link, NavLink } from 'react-router-dom'
import {
  isBrowser, isMobile
} from "react-device-detect";
import { connect } from 'react-redux'
import Home from '../tabs/home'
import Invoices from '../tabs/Invoices'
import Items from '../tabs/items'
import Report from '../tabs/reports'

import { Affix,Layout, Menu , Button, PageHeader, Tabs} from 'antd';
class BottomBar extends Component {
  constructor(props) {
    super(props)
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      tab:'1',
      pack:'p'
    };
  }
  componentDidMount() {
    console.log("Mounting - "+this.props.tab)
  this.toggle(this.assignToKey(this.props.tab))
  }

  componentWillReceiveProps(props) {
   console.log(this.assignToKey(props.tab)+" -- "+this.state.tab)
}

assignToKey(tab){
  switch(tab){
    case 'packages': return('2');  break;
    case 'home':  return('1'); break;
    case 'users':  return('3'); break;
    case 'about':  return('4'); break;
    default : return('2')
 } 
}
 
   toggle(key){
     console.log("toggle called key- "+key)
     this.setState({
      tab: key
    })
     switch(key){
    case '1': window.history.pushState("Home", "Travel Crest", "/home") ; break;
    case '2': window.history.pushState("Home", "Travel Crest", `/${this.props.package?"package/":"packages/"}${this.props.package?this.props.package:this.props.packages?this.props.packages:''}`); break;
    case '3': window.history.pushState("Users", "Travel Crest", "/users")  ;break;
    case '4': window.history.pushState("About", "Travel Crest", "/about") ; break;
    case '5': window.history.pushState("Home", "Travel Crest", `/package/${this.props.package?this.props.package:''}`); break;
  } 
}

checknupdate(key){
if(this.state.tab != key){
  this.toggle(key)
}
} 

  render() {
    const { Header, Content, Footer, Sider } = Layout;
    const {isOpen} = this.state
    const { TabPane } = Tabs;
    const areastyle ={border:'none',margin:'0px',marginBottom:'80px'}
return (
   /*  <div style={{ bottom:'0px', margin:'0px 0px', background:'#fff', }} offsetBottom={0}> */
    <Tabs tabBarGutter={60} activeKey={this.state.tab} tabPosition="bottom" tabBarStyle={{display:'flex', background:'#fff', flexFlow:'row nowrap', width:'100%',bottom:'0px', justifyContent:'space-around', position:"fixed", margin:'0px'}}>{/* tab gutter should be kept n*10-10 n= no.of tabs*/}
    <TabPane  tab={<div style={{textAlign:'center'}} onClick={()=>this.toggle('1')} ><span className="fas fa-home"/><br/>Home{this.state.tab}</div>} key="1" style={areastyle} >
    <Invoices /> 
    </TabPane>
    <TabPane  tab={<div style={{textAlign:'center'}} onClick={()=>this.toggle('2')} ><span className="fas fa-umbrella-beach"/><br/>Packages</div>} key="2" style={areastyle}>
   <Home /> 
    </TabPane>
    <TabPane tab={<div style={{textAlign:'center'}} onClick={()=>this.toggle('3')} ><span className="fas fa-group"/><br/>Account</div>} key="3"  style={areastyle}>
    <Items/>
    </TabPane>
    <TabPane tab={<div style={{textAlign:'center'}} onClick={()=>this.toggle('4')} ><span className="fas fa-user"/><br/>User</div>} key="4"  style={areastyle}>
      <Report/>
    </TabPane> 
  </Tabs>
  /*   </div> */
    );
  }
};



export default BottomBar;
