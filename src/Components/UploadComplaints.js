import React, { Component , useState } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Form, Input,  Row} from 'reactstrap';
import { Container } from 'react-bootstrap';

const UploadComplaints =()=> {
  const [newUser, setNewUser] = useState(
    {
        name: '',
        age: '',
         date:'',
         photo:'',
         gender:'',
         pname: '',
         pstation: '',
         state:'',
         city:'',
         description:''
    }
);
  
const handleChange = (e) => {
  setNewUser({...newUser, [e.target.name]: e.target.value});
}


 const onChangeDate=(date)=> {
    setNewUser({...newUser, date: date});
  }

const  onChangePhoto=(e)=>{
    setNewUser({...newUser, photo: e.target.files[0]});
  }

  const onSubmit=(e)=> {
    e.preventDefault();
    const formData = new FormData();

    formData.append('photo', newUser.photo);
    formData.append('age', newUser.age);
    formData.append('name', newUser.name);
    formData.append('state', newUser.state);
    formData.append('city',newUser.city);
    formData.append('date',newUser.date);
    formData.append('gender',newUser.gender);
    formData.append('pname',newUser.pname);
    formData.append('pstation',newUser.pstation);
    formData.append('description',newUser.description)

    console.log(formData);

    axios.post('http://localhost:5000/complaint/addcomplaint', formData)
      .then(res => console.log(res));

   // window.location = '/';
  }

  

    return (
      <>
      <Container className="center">
           <Row className="content">
           <div className="col-md-6 mb-3 mx-auto">
          <h3>Add Complain</h3>
          <form method="POST" onSubmit={onSubmit} encType='multipart/form-data'>
          <div className="form-group row"> 
                  <label htmlFor="pname">Police Officer Name </label>
                  <input  type="text"
                      required
                      name="pname"
                      className="form-control"
                      placeholder="Police Officer Name"
                      value={newUser.pname}
                      onChange={handleChange}
                      />
                </div>
                <div className="form-group row">
                <label>Police Station </label>
                <input 
                    type="text" 
                    placeholder="Police Station Name"
                    name="pstation"
                    className="form-control"
                    value={newUser.pstation}
                      onChange={handleChange}
                    />
              </div>

                <div className="col-12">
                  <h6><strong>Complaint Details</strong></h6>
                </div>
                  <div className="form-group row"> 
                <label>Name </label>
                <input  type="text"
                    required
                    name="name"
                    placeholder="Enter Name"
                    className="form-control"
                    value={newUser.name}
                    onChange={handleChange}
                    />
              </div>
              <div className="form-group row"> 
                <label> Image  </label><br/>
                <input 
                      type="file" 
                      accept=".png, .jpg, .jpeg"
                      name="photo"
                      onChange={onChangePhoto}
                  />
                  </div>
              <div className="form-group row"> 
                <label>Age </label>
                <input  type="text"
                    required
                    name="age"
                    placeholder="Enter Age"
                    className="form-control"
                    value={newUser.age}
                    onChange={handleChange}
                    />
              </div>
              <div className="form-group row "> 
              <label htmlFor="state">State</label>
              <input  type="text"
                    required
                    name="state"
                    placeholder="Enter State"
                    className="form-control"
                    value={newUser.state}
                    onChange={handleChange}
                    />            
              </div>
              <div className="form-group row">
                       <label htmlFor="city">Select Your City/Town/Village</label>
                                  <Input type="select" name="city" id="city" value={newUser.city} onChange={handleChange}>
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
                <label> Gender </label>
                
                  <Input  type="select" name="gender" id="gender" value={newUser.gender}
                        onChange={handleChange}>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                </Input>
              </div>
              <div className="form-group row">
                <label>Date  </label><br/>
                <div>
                <DatePicker
                    selected={newUser.date}
                    
                    onChange={onChangeDate}
                    dateFormat="yyyy/mm/dd"
                    showYearDropdown
                    showMonthDropdown
                    scrollableYearDropdown
                    scrollableMonthYearDropdown
                  />
                </div>
              </div>
              <div className="form-group row">
                        <label htmlFor="desc">Description</label>
                            <Input type="textarea" id="policestation" name="description"
                        
                                   value={newUser.description}
                                   onChange={handleChange} 
                                   className="form-control" placeholder="Description"
                            />          
                    </div>

        <div className="form-group ">
          <input type="submit" value="Create Complaint" className="btn btn-primary"  />
        </div>
      </form>
        </div>
        </Row> 
      </Container>
    </>
    )
  }





export default UploadComplaints;