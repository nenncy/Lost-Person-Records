
import React, { useContext, useState } from 'react';
import { Form, Row, Input} from 'reactstrap';
import { Container } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import { UserContext} from "./MainComponent";

const Login_Admin = () => {

    const { state, dispatch } = useContext(UserContext);


    const history= useHistory();
    
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const [city, setCity]=useState('');
    const [pstation , setPstation]=useState('');

    const loginadmin = async (e) => {

        e.preventDefault();
        const res= await fetch('/adminsignin',{
            method:"POST",
            headers:{
                "content-Type":"application/json"

            },
            body:JSON.stringify({
                email,password, pstation, city
            })

        });

        //storing the data he get
        const data = res.json();
        if(res.status===400|| !data)
        {
            window.alert("Invalid Credentials")
        }
        else{
          dispatch({type: "ADMIN", pa yload: true})
           window.alert("Login Succesufull");
           console.log("success");

           history.push("/");
        }
    }

    return(
        <>
            <Container>
              <Row>

                <div className="col-md-6 mb-3 mx-auto">
                  <h2 className="signup-text mb-3">Admin Login</h2>
                    <Form method="POST" className="register-form mx-auto" id="register-form">

                            <div className="form-group row"> 
                                <label htmlFor="email">Email Address</label>
                                <input 
                                        type="text" name="email"  autoComplete="off"
                                        value={email}
                                        onChange={(e)=> setEmail(e.target.value)}
                                        placeholder="Your Email" className="form-control"
                                        
                                ></input>
                            </div>

                            <div className="form-group row"> 
                                <label htmlFor="password">Password</label>
                                <input 
                                        type="text" name="password"  autoComplete="off"
                                        value={password}
                                        onChange={(e)=> setPassword(e.target.value)}
                                        placeholder="Your Passwprd" className="form-control"
                                ></input>
                            </div>

                    <div className="form-group row">
                       <label htmlFor="city">Select Your City/Town/Village</label>
                                  <Input type="select" name="city" id="city" value={city} onChange={(e)=> setCity(e.target.value)} >
                                      <option value="AHMEDABAD">AHMEDABAD</option>
                                      <option value="SURAT">SURAT</option>
                                      <option value="RAJKOT">RAJKOT</option>
                                      <option value="VADODARA">VADODARA</option>
                                      <option value="GANDHINAGR">GANDHINAGR</option>
                                      <option value="BHAVNAGAR">BHAVNAGAR</option>
                                      <option value="JAMNAGAR">JAMNAGAR</option>
                                      <option value="JUNAGADH">JUNAGADH</option>
                                      <option value="ANAND">ANAND</option>
                                      <option value="BHARUCH">BHARUCH</option>
                                      <option value="PROBANDAR">PORBANDAR</option>
                                      <option value="ANKLESHWAR">ANKLESHWAR</option>
                                      <option value="VAPI">VAPI</option>
                                      <option value="DHOLERA">DHOLERA</option>
                                      <option value="PATAN">PATAN</option>
                                      <option value="NAVSARI">NAVSARI</option>
                                      <option value="MEHSANA">MEHSANA</option>
                                      <option value="GANDHIDHAM">GANDHIDHAM</option>
                                      <option value="NADIAD">NADIAD</option>
                                      <option value="VERAVAL">VERAVAL</option>
                                      <option value="DAHOD">DAHOD</option>
                                      <option value="MORBI">MORBI</option>
                                      <option value="PALANPUR">PALANPUR</option>
                                      <option value="GODHRA">GODHRA</option>
                                      <option value="VALSAD">VALSAD</option>
                                      <option value="VADODARA">VADODARA</option>
                                      <option value="BOTAD">BOTAD</option>
                                      <option value="GONDAL">GONDAL</option>
                                      <option value="PALITANA">PALITANA</option>
                                      <option value="KHAMBHAI">KHAMBHAT</option>
                                      <option value="KALOL">KALOL</option>
                                      <option value="KHEDA">KHEDA</option>
                                      <option value="DEESA">DEESA</option>
                                      <option value="ADALAJ">ADALAJ</option>
                                      <option value="DWARKA">DWARKA</option> 
                                      <option value="SIDDHPUR">SIDDHPUR</option>
                                      <option value="WANKANER">WANKANER</option>
                                      <option value="SANAND">SANAND</option>
                                      <option value="KANDALA">KANDLA</option>
                                      <option value="VISNAGAR">VISNAGAR</option>
                                      <option value="MODASA">MODASA</option>
                                      <option value="JETPUR">JETPUR</option>
                                      <option value="KESHOD">KESHOD</option>
                                      <option value="SIHOR">SIHOR</option>
                                      <option value="HALOL">HALOL</option>
                                      <option value="MANDAVI">MANDAVI</option>
                                      <option value="CHAMPANER">CHAMPANER</option>
                                      <option value="BARDOLI">BARDOLI</option>
                                      <option value="AMERELI">AMERELI</option>
                                      <option value="IDAR">IDAR</option>
                                </Input>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="policestation">Police Station</label>
                            <input type="policestation" id="policestation" name="pstation"
                                   value={pstation}
                                   onChange={(e)=> setPstation(e.target.value)}
                                   className="form-control" placeholder="Police Station"
                            />          
                    </div>



                            <div className="btn-class">
                                <input type="submit" name="login"  autoComplete="off"  className="btn-class-form btn btn-primary" value="Login" onClick={loginadmin} ></input>
                            </div>

                            <div className="m-4">
                                 <h6> Not yet Registered? <NavLink to="/Signup_admin"> Sign Up </NavLink></h6>
                            </div>

                           

                    </Form>
                </div>
              </Row>
            </Container>
        </>
    )
}


export default Login_Admin;
