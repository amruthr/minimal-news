import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Empty from './components/Empty';
import Loadable from 'react-loadable';
import LoadingGif from './components/Loading-gif'
import NavbarContainer from './containers/Navbar-container';
import Footer from './components/Footer';
import './style/transition.css';


const Loading = () => <div style={{height: '1000px', }}><LoadingGif/></div>;

const ItemContainer = Loadable({
  loader: () => import('./containers/Item-container'),
  loading: Loading
});

const CheckoutContainer = Loadable({
  loader: () => import('./containers/Checkout-container'),
  loading: Loading
});

const CartContainer = Loadable({
  loader: () => import('./containers/Cart-container'),
  loading: Loading
});

const news = Loadable({
  loader: () => import('./components/shop-by-price'),
  loading: Loading
});

const inrest = Loadable({
  loader: () => import('./components/SortByPrice'),
  loading: Loading
});

const story = Loadable({
  loader: () => import('./components/story'),
  loading: Loading
});

const ItemsListGenderHomepage = Loadable({
  loader: () => import('./components/Items-list-gender-homepage'),
  loading: Loading
});

const AdminContainer = Loadable({
  loader: () => import('./containers/Admin-container'),
  loading: Loading
});

const Secret = Loadable({
  loader: () => import('./components/Secret'),
  loading: Loading
});

const Register = Loadable({
  loader: () => import('./components/register'),
  loading: Loading
});

const confirm = Loadable({
  loader: () => import('./components/confirm'),
  loading: Loading
});

const Router = () => (
  <div>
    {/* <NavbarContainer /> */}
      <Switch>
         <Route exact path='/' component={news} />
         <Route exact path='/article' component={news} />
         <Route exact path='/:category' component={news} />
         <Route exact path='/story' component={story} />
       {/*  <Route exact path='/checkout' component={CheckoutContainer} />
        <Route exact path='/cart' component={CartContainer} />*/}
        {/* <Route exact path='/package/:gender' component={ItemContainer} />
        <Route exact path='/packages/:gender' component={ItemsListGenderHomepage} /> 
        <Route exact path='/admin' component={AdminContainer} /> 
        <Route exact path='/dashboard' component={Secret} /> 
        <Route exact path='/register' component={Register} />
        <Route exact path='/confirm' component={confirm} />   */}
        <Route component={Empty}/>
      </Switch>
   {/*  <Footer /> */}
  </div>
);

export default Router;
