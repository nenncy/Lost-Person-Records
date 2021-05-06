import React, { useEffect, useState, Component  } from 'react'
import './cards/card.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShowMoreText from 'react-show-more-text';
import {Card , Col} from "react-bootstrap";
import Moment from 'react-moment';

import { Link } from 'react-router-dom';
import 'moment-timezone';

const mystyle = {
  color: "thistle",
  backgroundColor: "white",
  padding: "10px",
  fontFamily: "Arial",
  textAlign:"center",
  fontWeight:"bold",
  fontSize:"2em"
};

const Home2 = () => {

  const executeOnClick = (isExpanded)=>{
    console.log(isExpanded);
}
  
  
  const [user, setUsers] = useState([])

   const getUser = async ()=>{
       const response= await fetch('http://localhost:5000/data');
      
      setUsers( await response.json());
      
   }
   useEffect(() => {
      getUser();
  }, []);

  
   
   return (
      <>
        <h1 style={mystyle}>List of Happy Stories</h1>
        <div className="container-fluid " >
        <div className="row text-left">
        <div className="cards-container">
          {
            user.map((CurElem) => {
              return(
                <div>
                    
                  <div className="col-10 col-md-4 mx-auto" key={CurElem._id}>
                  <Card style={{  width: '18rem', backgroundColor:"thistle"}} className="d-flex align-items-center">
                   <Col >
                  <Card.Img  style={{maxHeight:'220px', paddingTop:"3%"}} variant="top" src={CurElem.photo} />
                  </Col>
                  <Card.Body>

                    

                    <Card.Text style={{fontFamily:"sans-serif"}}><span style={{fontWeight:"bold"}}>Name :</span> {CurElem.username}</Card.Text>
                    
                      <Card.Text><span style={{fontWeight:"bold"}}>Age :</span> {CurElem.age}</Card.Text>
                      <Card.Text> <span style={{fontWeight:"bold"}}>Location : </span> {CurElem.location} </Card.Text>
                      <Card.Text> <span style={{fontWeight:"bold"}}>Date : </span>
                      <Moment format="YYYY/MM/DD"> 
                        {CurElem.date}
                      </Moment>
                    </Card.Text>

                    <ShowMoreText
                /* Default options */
                lines={1}
                more='Show more'
                less='Show less'
                className='content-css'
                anchorClass='my-anchor-css-class'
                onClick={executeOnClick}
                expanded={false}
                width={280}
            >
                {CurElem.desc}
            </ShowMoreText>
          
                </Card.Body>

                  <Card.Text>
                  
                  </Card.Text>
                  
                </Card>
                </div>
              <br/>
              </div>
            
            
           )
         })

     }   
       </div>
      </div>
      </div>   
      </>
   )
}

class Home extends Component {
      render() {
          return(
             <div className="container">
             
               <div className="row row-header">
                   <p style={{textAlign:"left", fontSize:"20px"}}>Through This application, police station can seek help of other prople to finf missing people, children founf on road side can be instantly contacted and sent to the nearbby police station and moreover police can upload the missing people recored so that other people can help if they have seen the person.</p>
                  <p style={{textAlign:"left" , color:"purple" , fontStyle:"italic" ,fontSize:"20px"}}><strong> " The main advantage of this will we: </strong> It is easier as well as quick process to find missing person than it is today, records of the missing people will be maintained and the children lost and left on the road streets will be immediately reached in safe hands. "</p>
               </div>

               <Home2 />
             </div>
           );
      }
}


export default Home;
