import React, { createContext, useReducer } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Login_Admin from './login_Admin';
import Signup_admin from './Signup_admin';
import Login_User from './login_User';
import Signup_User from './signup_user';
import Stats from './StatisticsComponent';
import Logout from './Logout';
import UploadComplaints from './UploadComplaints';
import CreateData from './adddata';
import ViewComplaint from './viewcomplaints';
import MapContainer from './contact';
import ViewRecord from './Records';
import CreateResponse from './response-form';
import ViewResponse from './viewreponse';
import HomeAdmin from './Homeadmin';

//importing router applications
import { Switch, Route, Redirect } from 'react-router-dom';
import { initialstate, reducer } from './reducer/usereducer';
import EditData from './editdata';

export const UserContext = createContext();

const Main = () => {
  const [state, dispatch] = useReducer(reducer, initialstate);
  //initialstate value will be stored in state.

  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
        <div>
          <Header />
          <Switch>
            <Route path='/Home' component={Home} />
            <Route path='/HomeAdmin' component={HomeAdmin} />
            <Route exact path='/login_Admin' component={Login_Admin} />
            <Route exact path='/signup_admin' component={Signup_admin} />
            <Route exact path='/login_User' component={Login_User} />
            <Route exact path='/signup_user' component={Signup_User} />
            <Route exact path='/stats' component={Stats} />
            <Route exact path='/viewcomplaint' component={ViewComplaint} />
            <Route exact path='/contactus' component={MapContainer} />
            <Route exact path='/records' component={ViewRecord} />
            <Route exact path='/addstories' component={CreateData} />
            <Route exact path='/upComplaints' component={UploadComplaints} />
            <Route exact path='/logout' component={Logout} />
            <Route exact path='/viewreponse' component={ViewResponse} />
            <Route exact path='/response' component={CreateResponse} />
            <Route
              exact
              path='/editComplaint/:id'
              component={UploadComplaints}
            />
            <Route exact path='/editStories/:id' component={EditData} />
            <Redirect to='/Home' />
          </Switch>
          <Footer />
        </div>
      </UserContext.Provider>
    </>
  );
};

export default Main;
