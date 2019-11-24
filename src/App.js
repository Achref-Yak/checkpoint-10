import React from 'react';
import logo from './logo.svg';
import Menu from './menu';
import me from '../src/pic2.png';
import './App.css';
import './style.css';
import {Route,Link,Switch, BrowserRouter} from "react-router-dom";


 

   

export default class App extends React.Component {

   Home = ()=>{
    return (<div>
      <h1>Home page</h1>
     
    </div>)
  }
  
   MyProfile = ()=>{
    return (<div>
      <h1>This is my profile</h1>
      
      <Link to="/">Go back to home</Link>
    </div>)
  }
  
   MyFriends = ()=>{
    return (<div>
      <h1>My friends</h1>
      <ul>
        <li><h3>Narimene Ouhida</h3></li>
        <li><h3>Ghassen Charradi</h3></li>
        <li><h3>Sana</h3></li>
        <li><h3>Chamseddine Bouhouch</h3></li>
        <li><h3>Imen Kaouane</h3></li>
        <li><h3>Adam Kefi</h3></li>
        <li><h3>Lajmi ahmed</h3></li>
      </ul>
      
      <Link to="/">Go back to home</Link>
    </div>)
  }
 
 


  render() {
    return (
       <BrowserRouter>
       <div className="page">
       <Menu/>
       <div className="section">  
       <Switch>          
          <Route path="/" exact component={this.Home} />
          <Route path="/profile" exact component={this.MyProfile} />
          <Route path="/friends" exact component={this.MyFriends} />
        
       </Switch>
       </div>
       
       </div>
        
       </BrowserRouter>
    );

  }

}
