import React, { useState } from 'react';
import { Form, Input,  Row, Container } from 'reactstrap';
import { useHistory } from 'react-router-dom';

const Signup_admin = () => {

    const history= useHistory();
    const [admin, setAdmin] = useState({
        name: "", 
        email: "",
        password: "",
        pstation: "",
        city: ""
    });

    let name, value;
  
    const handleInputs = (e) => {
      console.log(e);
  
      name = e.target.name;
      value= e.target.value;
  
      setAdmin({ ...admin, [name]:value });
  
    }

    const PostData = async (e) => {
  
      e.preventDefault();
      const { name, email, password, pstation, city } = admin;
      
      console.log(name);
      const res = await fetch('/registeradmin', {
        method:"POST",
        headers: {
          "Content-Type": "application/json"
        },
        
        body:JSON.stringify({
          name,
          email,
          password,
          pstation,
          city
        })
      });
  
      const data = await res.json();
  
      if(data.status === 422 || !data) {
        window.alert("Invalid registration");
        console.log("Invalid Registration");
      }
      else {
        window.alert("Registeration Successfull");
  
        history.push('/login_Admin');
      }
    }

    return(
      <>
        <Container className="center">
           <Row className="content">
               
               <div className="col-md-6 mb-3 mx-auto">
                  <h2 className="signup-text mb-3">Sign Up as Admin</h2>
                  <Form method="POST" className="register-form mx-auto" id="register-form">
   
                       <div className="form-group row"> 
                           <label htmlFor="name">Your Name</label>
                           <input 
                                type="text" name="name" 
                                value={admin.name}
                                onChange={handleInputs}
                                placeholder="Your Name" className="form-control"
                           ></input>
                       
                       </div>
   
                       <div className="form-group row"> 
                       <label htmlFor="email">Email Address</label>
                       <input 
                               type="text" name="email" 
                               value={admin.email}
                               onChange={handleInputs}                           
                               placeholder="Your Email" className="form-control"
                       ></input>
                       </div>
   
                       <div className="form-group row"> 
                       <label htmlFor="password">Password</label>
                       <input 
                               type="text" name="password"  
                               value={admin.password}
                               onChange={handleInputs}                           
                               placeholder="Your Password" className="form-control"
                       ></input>
                       </div>

                       <div className="form-group row">
                       <label htmlFor="city">Select Your City/Town/Village</label>
                                  <Input type="select" name="city" id="city" value={admin.city} onChange={handleInputs}>
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
                                 
                                   value={admin.pstation}
                                   onChange={handleInputs} 
                                   className="form-control" placeholder="Police Station"
                            />          
                    </div>

                   <div className="btn-class">
                        <input type="submit" name="signup"  className="btn-class-form btn btn-primary" value="Register" onClick={PostData}></input>
                   </div>
   
                  </Form>
               </div>
           </Row>
        </Container>
      </>
    )
}

export default Signup_admin;
