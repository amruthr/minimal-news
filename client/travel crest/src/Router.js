import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Empty from './components/Empty';
import Loadable from 'react-loadable';
import LoadingGif from './components/Loading-gif'
import Topbar from './components/navbar';
import BottomBar from './components/bottomBar';
import Footer from './components/Footer';
import './style/transition.css';


const Loading = () => <div style={{height: '1000px', }}><LoadingGif/></div>;

const ItemContainer = Loadable({
  loader: () => import('./containers/Item-container'),
  loading: Loading
});

const MainPageContainer = Loadable({
  loader: () => import('./containers/Main-container'),
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

const HomepageContainer = Loadable({
  loader: () => import('./containers/Homepage-container'),
  loading: Loading
});

const ItemsListContainer = Loadable({
  loader: () => import('./containers/Items-list-container'),
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
    <Topbar title="Travel Crest" />
      <Switch>
         <Route exact path='/' component={MainPageContainer} />
          <Route exact path='/:tab' component={MainPageContainer} />
          <Route exact path='/packages/:packages' component={MainPageContainer} />
          <Route exact path='/package/:package' component={MainPageContainer} />
       {/* <Route exact path='/productslist' component={ItemsListContainer} />
        <Route exact path='/item/:id/:item' component={ItemContainer} />
        <Route exact path='/checkout' component={CheckoutContainer} />
        <Route exact path='/cart' component={CartContainer} />*/}
       {/*  <Route exact path='/package/:gender' component={ItemContainer} />
        <Route exact path='/packages/:gender' component={ItemsListGenderHomepage} />  */}
       {/*  <Route component={Empty}/> */}
      </Switch>
      
  </div>
);

export default Router;
