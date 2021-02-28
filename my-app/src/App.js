import './App.css';
import {Route, withRouter} from "react-router-dom";
import React, {Component} from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings"
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import {initializeApp} from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';
import withSuspense from './hoc/withSuspense'

const DialogsContainer = React.lazy(() => import ('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import ('./components/Profile/ProfileContainer'));


class App extends Component {

  componentDidMount () {
    this.props.initializeApp();
  }
render () {
  if(!this.props.initialized) {
    return <Preloader />
  }


  return (

      <div className="app-wrapper">
      <HeaderContainer />
       <Navbar />
       <div className="app-wrapper-content">    
       <Route path="/profile/:userId?" render={withSuspense(ProfileContainer)}/>
       <Route path="/dialogs" render={withSuspense(DialogsContainer)}/>
       <Route path="/users" render={() => <UsersContainer />}/>
       <Route path="/login" render={() => <Login />}/>
       <Route path="/news" render={() => <News />}/>
       <Route path="/music" render={() => <Music />}/>
       <Route path="/settings" render={() => <Settings />}/>
       </div>
    </div>

    );  
  }; 
}

const mapStateToProps = (state) => ({
  initialized:state.app.initialized
})

export default compose (withRouter, 
  connect (mapStateToProps, {initializeApp}))(App);
