import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, NavLink } from 'react-router-dom'
import {Button} from 'reactstrap';
import HeroBanner from '../components/Hero-banner';
import CarouselHomepage from '../components/Carousel-homepage';
import ShopByPrice from '../components/shop-by-price';
import HeadingStyle from '../components/headstyle';
import Particles from 'react-particles-js';
import ShowCategory from '../components/ShowCategory';
const styles = { background:'linear-gradient(17deg , aliceblue , smokewhite)',height: '85vh',width:'100%', margin: '0px', display: 'flex', flexDirection: 'column' , justifyContent: 'center' , alignItems: 'center'};
const SBPContainerStyles = {
  width: '100%',
  overflowX:'scroll',
};
const spanstyle={
  border:'solid 1px #376db5',
  background:'#376db5',
  borderRadius:'25px',
  margin:'10px 18px',
  height:'60px', width:'60px',
  padding:'6px 16px',
  lineHeight:'1.5',
  color:'#fff',
  fontSize:'30px'
}

const Homepage = () => (
  <div >
    <Helmet>
      <title>Travel Crest </title>
      <meta name="Travel Crest" content="Book international, pilgrimage, and other packages. Travel and related services, online ticket booking, Railway, Hotel booking, Sight seeing, Bus Booking, wanderlust, hiking , trekking, trips, drving, sight seeing" />
    </Helmet>
    <div>
      <CarouselHomepage/>
      <div className="animated wow bounce" style={{width:'100%' , textAlign:'center', padding:'30px 0px 30px 0px', background:'#140d2e00', display:'flex', flexFlow:'row wrap'}}>
        <Link to="#packages"><div style={spanstyle} className="fa fa-building" ></div></Link>
        <Link to="/services"><div style={spanstyle} className="fa fa-plane"></div></Link>
        <Link to="/services"><div style={spanstyle} className="fa fa-hotel"></div></Link>
        <Link to="/services"><div style={spanstyle} className="fa fa-instagram"></div></Link>
        </div>
   <ShowCategory/>
    </div>
  </div>
);

export default Homepage;