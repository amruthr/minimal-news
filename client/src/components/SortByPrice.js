import React, { Component } from 'react';
import {Button} from 'reactstrap';
class App extends Component {
	render() {
		return (
			<div style={{color:'white',backgroundImage:'linear-gradient(188deg , #000,#4b0000,  #f00, #f00, #f88, #fff, #fff)',padding:'20px',height:'350vh'}}>
<img src="/images/logo.png" style={{width:'10%'}}/> My India Offers
<div className="animated wow slideInUp" style={{color:'#fff',marginTop:'10vh', fontSize:'38px', fontWeight:'bolder', fontFamily:'Montserrat', width:'90%'}}>Get the best offers in nearby Stores</div>
			<hr style={{background:'grey', margin:'40px 4px 40px 4px', width:'5vh', height:'1.5vh'}}/>
			<p style={{fontSize:'16px', margin:'0px 4px 40px 4px'}}>Great deals are a just a swipe away with My India Offers. Download Now </p>
			<Button size="lg" style={{borderBottom:'solid 2px #FFF'}}>Register Now</Button>				
			<div id="products" className="wow animated slideInRight" style={{width:'100%', display:'flex', flexFlow:'row no wrap', overflow:'scroll', marginTop:'10vh'}}>
				<div style={{background:'#000', margin:'20px', padding:'10px', borderRadius:'20px', height:'35vh', color:'#fff'}}> <img src="https://image.freepik.com/free-photo/swiss-watches-black-background_99272-36.jpg"  style={{width:'200px'}}/></div>
				<div style={{background:'#fff', margin:'20px', padding:'10px', borderRadius:'20px', height:'35vh', color:'#fff'}}> <img src="https://image.freepik.com/free-vector/house-searching-concept-illustration_114360-385.jpg" style={{width:'200px'}} /></div>
				<div style={{background:'#000', margin:'20px', padding:'10px', borderRadius:'20px', height:'35vh', color:'#fff'}}> <img src="https://image.freepik.com/free-vector/set-white-silhouette-car_73458-357.jpg" style={{width:'200px'}} /></div>
			</div>
			<div id="numbers" className="container animated wow fadeIn" style={{display:'flex', flexFlow:'Row no wrap'}}>
				<div className="vendor wow animated fadeIn" style={{ background:'#f00', width:'100%', color:'#fff', padding:'51px', fontSize:'40px'}}>
				<p>Customers Served:</p><hr style={{background:'#fff'}} />
			{/* 	<CountUp delay={1}  end={14} style={{color:'#fff'}} />
				<p>Partner stores:</p><hr style={{background:'#fff'}} />
				<CountUp delay={1}  end={14} style={{color:'#fff'}} /> */}
				</div>
				<div className="vendor wow animated fadeIn" style={{ background:'#f00', width:'100%', color:'#fff', padding:'51px', fontSize:'40px'}}>

				</div>

			</div>
		
</div>
		);
	}
}
export default App