import React, {Component} from 'react';
import Food from './food';
import About from './About';
import SearchFood from './SearchFood';
import Dog from './Dog';
import Contact from './Contact';
import {Route, Switch, Link} from 'react-router-dom';
// import {navbar, navbar-toggler, nav-item navlink} from 'bootstrap/dist/css/bootstrap.min.css';
class NavBar extends Component{
    render() {
      return (
       <div>
       <nav>
        <Link to="/">About</Link>
        <Link to="/dog">Dog</Link>
        <Link to="/contact">Contact</Link>
        <Link to='/search'>SearchFood</Link>
       </nav>
        <Switch>
        <Route  exact path='/dog' render={()=><Dog/>} />
        <Route exact path= '/' render ={()=><About/>}/>
        <Route exact path='/food/:foodName' render={(routeProps)=><Food {...routeProps} />} />
        <Route exact path='/search' render={()=><SearchFood  />} />
        <Route exact path = '/contact' render={()=><Contact/>}/>
        </Switch>
       </div>
      )
    }
}

export default  NavBar;