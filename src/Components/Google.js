import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';

class Google extends Component {
  
      responseGoogle = (response) => {
         console.log(response);
         console.log(response.profileObj);
      }

      render() {
           return(
              <div className="container">
                 <GoogleLogin
                  clientId="758553502903-507je8pnemom2o0e48b28qvlrppmv4ag.apps.googleusercontent.com"
                  buttonText="Login"
                  onSuccess={this.responseGoogle}
                  onFailure={this.responseGoogle}
                  cookiePolicy={'single_host_origin'} /> 
              </div>
           );
      }
}

export default Google;
