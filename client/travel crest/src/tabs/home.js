import React, { Component } from 'react';
import { Switch, Route , Router ,Link, NavLink } from 'react-router-dom'
import {
  isBrowser, isMobile
} from "react-device-detect";
import { connect } from 'react-redux'
import { Affix,Layout, Menu , Button, PageHeader, Tabs, Card} from 'antd';
import {Bar} from 'react-chartjs-2'
import BarGraph from '../components/BarGraph'
import Post from '../components/Post'
import ShowCategory from '../components/ShowCategory'
import BannerCard from '../components/BannerCard'
import ItemsListGenderHomepage from '../components/Items-list-gender-homepage'
import ItemContainer from '../containers/Item-container'
import Empty from '../components/Empty'
class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
      totaldue:'',
      upcomingdue:'20000',
      loading:true
    };
  }
  componentDidMount() {
      this.setState({totaldue:'35000'})
  }
  render() {
    const { Header, Content, Footer, Sider } = Layout;
    const {isOpen} = this.state
    const { TabPane } = Tabs;
    const areastyle ={height:'80vh', border:'solid 1px black',}
   
return (
    <div>
<Switch>
    <Route exact path='/packages/:gender' component={ItemsListGenderHomepage} />
    <Route exact path='/package/:gender' component={ItemContainer} />
    <Route exact path='/' component={ShowCategory} />
    <Route exact path='/packages' component={ShowCategory} />
    <Route exact path='/package' component={ShowCategory} />
    <Route component={Empty} />
    </Switch>
</div>

    );
  }
};



export default Home;
