import PropTypes, { object } from 'prop-types';
import React, { Component , useState, useEffect }  from 'react';
import { Link } from 'react-router-dom';
import { isBrowser, isMobile } from "react-device-detect";
import axios from 'axios'
/* import LoadingGif from './Loading-gif'; */

import Stories   from 'react-insta-stories';
import moment from 'moment';
import { 
  Container,
  Row,
  Col
} from 'reactstrap';

class  shopByPrice extends Component {

    constructor(props){
      super(props);
      this.state={
        newsList:'',
        data:'',
        index:0,
        input:'',
        pause:false,
        url:''
      }
    }

    OutlineThis = (url)=>{
     this.setState({data:"https://outline.com/"+url})    
     window.history.pushState("", "", "/article?q="+url)
    }
    changeinput = (e)=>this.setState({input:e.target.value})
    
    
     componentDidMount() {
      let search = window.location.search;
      let params = new URLSearchParams(search);
      let article_id = params.get('q')
       article_id && this.setState({data:"https://outline.com/"+article_id});
       let url;      
       const business = "http://newsapi.org/v2/top-headlines?country=in&country=us&pageSize=9&category=mangalore&sortBy=popularity"
      const main= "https://newsapi.org/v2/top-headlines?country=in&pageSize=9"
      const tech = "http://newsapi.org/v2/top-headlines?country=in&pageSize=9&category=technology&sortBy=popularity"
      const entertainment = "http://newsapi.org/v2/top-headlines?country=in&pageSize=9&category=entertainment&sortBy=popularity"
      const sports= "https://newsapi.org/v2/top-headlines?country=in&pageSize=9&category=sports"
      const politics = "http://newsapi.org/v2/top-headlines?country=in&pageSize=9&category=politics&sortBy=popularity"
      const space = "http://newsapi.org/v2/top-headlines?country=in&pageSize=9&category=space&sortBy=popularity"
      const category = this.props.match.params.category
      switch (category){
        case '': url=main;
        break;
        case 'tech': url = tech;
        break;
        case 'business': url=business;
        break;
        case 'entertainment': url=entertainment;
        break;
        case 'sports': url = sports;
        break;
        case 'politics': url=politics;
        break;
        case 'space': url=space;
        break;
        default: url=main/* "https://newsapi.org/v2/top-headlines?country=in&q="+category+"&apiKey=00363e55f431462aaa8b75ad39a326b7" */
      }
      axios.get(url,{
          headers:{Authorization: 'Bearer 00363e55f431462aaa8b75ad39a326b7'}
        })
        .then((data)=>{
          console.log(data.data.articles);
         
          data.data.articles &&  this.setState({url: data.data.articles.map((item, index)=>({url:item.url}))})


         data.data.articles  && this.setState({            
            newsList: data.data.articles.map((item, index)=>({
             content:
             ({action, isPaused}) => {
              const handleClick=(e)=>{ action(isPaused ? 'play': 'pause') }
              const pauseStory = ()=>action(isPaused ? 'play': 'pause')
              return (                          
             <div  onClick={handleClick} style={{width:'100vw', background:'#fff'}}>
            <h2 style={{color:'#000',margin:'30px 10px 15px 10px', fontFamily:'Jost, sans-serif'}} className="wow animated fadeIn">{item.title.slice(0, item.title.lastIndexOf("-"))}</h2>            
            <img className="wow animated fadeIn" style={{width:'96vw',overflow:'hidden',margin:'2vw 2vw'}} src={item.urlToImage}/>
              <p style={{color:'#000',margin:'10px', width:'fit-content',}}>{item.author} • {moment(item.publishedAt).startOf('hour').fromNow() }</p>
            <p className="wow animated fadeIn" style={{color:'#000',margin:'10px', fontFamily:'Jost, sans-serif',lineHeight:'2'}}>{item.content && item.content.slice(0, item.content.lastIndexOf("["))}</p>
            <div className="wow animated fadeIn" style={{animationDuration:'0.2s' , position:'fixed',color:'#fff', fontSize:'19px',textAlign:'center',
             zIndex:'1001', bottom:'0px',width:'100%',
             height:'100px', backgroundImage:'linear-gradient(to bottom, #fff0, lightgray)'}}>
              <p style={{fontSize: '21px',
               width: 'maxContent',color:'gray',
               background: '#fff',
               padding: '10px', zIndex:'1001',
               borderRadius: '49px',               
               margin: '2vh 15vh 27vh 15vh',
                fontFamily:'Montserrat', textAlign:'center',
                 userSelect:'none'}} 
               onClick={()=>this.OutlineThis(item.url) }> see more</p>
            </div> 
            </div>
                          )
             }
            ,
            duration: item.content && item.content.length>100? 2500+item.title.length*50 : 1500+item.title.length*50,
              url: item.url,              
            }))
          });  

          console.log(this.state.newsList)
          this.setState({
            newsList: this.state.newsList.concat({
              content:
              ({action, isPaused}) => {
               const handleClick=(e)=>{e.preventDefault(); action(isPaused ? 'play': 'pause') }                    
               const cards={
                 background:'white',
                 padding:'10px',
                 fontSize:'1.5rem',
                 width:'100%',
                 margin:'10px 0px',
                 textAlign:'center',
                 height:'auto',
                 border:'none',
                 boxShadow:'0px 2px 20px lightgrey'
               }
   return (                                         
              <div onClick={()=>handleClick} style={{width:'100%',background:'#fefefe',userSelect:'none', display:'flex', flexFlow:'column wrap',padding:'10vw', zIndex:'1000'  }}>
                <p className="animated wow slideInUp" style={{color:'#000',margin:'10px',textAlign:'center', width:'100%', fontFamily:'Jost, sans-serif'}}>Thats a wrap for now. 🤷‍♂️</p>
                <div style={cards} className="wow animated slideInUp card" onClick={()=>window.location.href="/entertainment"}>🎭 Entertainment</div>
                <div style={cards} className="wow animated slideInUp card" onClick={()=>window.location.href="/tech"}>💻 Technology</div>
                <div style={cards} className="wow animated slideInUp card" onClick={()=>window.location.href="/business"}>📈 Business</div>
                <div style={cards} className="wow animated slideInUp card" onClick={()=>window.location.href="/sports"}>🏏 Sports ⚽</div>
                <div style={cards} className="wow animated slideInUp card" onClick={()=>window.location.href="/space"}>🚀 Space </div>
                <div style={cards} className="wow animated slideInUp card" onClick={()=>window.location.href="/politics"}>💩 Politics</div>
                <div style={cards} className="wow animated slideInUp card row flex-row align-items-baseline" ><input type="text" placeholder="Search for your own news..." onChange={this.changeinput} className="col-10"/><div onClick={()=>window.location.href="/"+this.state.input} className="fa fa-arrow-right col-2"/></div>

                </div>
               )
              }
            })
          })
        })                       
    }
dataflush = ()=>{
  this.setState({data:''})
}
changeIndex = () =>{
//this.setState({index:this.state.index+1})
//alert(this.state.index)
}
    
  render() {
  /*   const {newsList} = this.state;
    console.log(newsList.articles)   */
    const stories = [
     ];
     const width = window.innerWidth
    return(
      <div style={{width:'100%'}}>

    <Stories style={{width:'100vh'}}
                stories={ this.state.newsList || stories}                                    
                defaultInterval={3500}
                
				width={width}
        height={768}       
        
     /> 

 {this.state.data!="" &&
<div> <iframe className="wow animated fadeIn" src={this.state.data} style={{width:'100%', height:'100vh', top:'0px', position:'absolute', zIndex:'1002',overflowY:'scroll'}}/>
 <span className="fa fa-close" style={{position:'absolute', color:'#000', fontSize:'30px', top:'20px', right:'10px', zIndex:'1003'}} onClick={()=>this.dataflush()} /> 
 </div> } 
 
 
   </div>
    )
  }
} 

export default shopByPrice;