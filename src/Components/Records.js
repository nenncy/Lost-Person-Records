import React, { useEffect, useState } from 'react';
import './cards/card.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container, Row, Col, CardColumns } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { getSuggestedQuery } from '@testing-library/dom';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import 'moment-timezone';
import ShowMoreText from 'react-show-more-text';

import axios from 'axios';
const mystyle = {
  color: 'thistle',
  backgroundColor: 'white',
  padding: '10px',
  fontFamily: 'Arial',
  textAlign: 'center',
  fontSize: '2em',
  fontWeight: 'bold',
};

const ViewRecord = () => {
  const executeOnClick = (isExpanded) => {
    console.log(isExpanded);
  };

  const [user, setUsers] = useState([]);

  const getUser = async () => {
    const response = await fetch('http://localhost:5000/complaint');

    setUsers(await response.json());
  };
  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <h1 style={mystyle}>List of Complaints</h1>
      <div className='container-fluid '>
        <div className='row text-left'>
          <div className='cards-container'>
            {user.map((CurEle) => {
              return (
                <div>
                  <div className='col-10 col-md-4 mt-5' key={CurEle._id}>
                    <Card
                      style={{ width: '19rem', backgroundColor: 'thistle' }}
                      className='d-flex align-items-center'
                    >
                      <Col>
                        <Card.Img
                          style={{ maxHeight: '230px', paddingTop: '3%' }}
                          width='30'
                          hieght='30'
                          variant='top'
                          src={CurEle.photo}
                        />
                      </Col>
                      <Card.Body>
                        <Card.Text
                          style={{
                            textAlign: 'left',
                            fontFamily: 'sans-serif',
                          }}
                        >
                          <span style={{ fontWeight: 'bold' }}>Name : </span>{' '}
                          {CurEle.name}
                        </Card.Text>

                        <Card.Text>
                          <span style={{ fontWeight: 'bold' }}>Age : </span>{' '}
                          {CurEle.age}
                        </Card.Text>
                        <Card.Text>
                          <span style={{ fontWeight: 'bold' }}>
                            Police Station :{' '}
                          </span>{' '}
                          {CurEle.pstation}
                        </Card.Text>
                        <Card.Text>
                          <span style={{ fontWeight: 'bold' }}>Gender : </span>{' '}
                          {CurEle.gender}
                        </Card.Text>
                        <Card.Text>
                          <span style={{ fontWeight: 'bold' }}>City : </span>{' '}
                          {CurEle.city}
                        </Card.Text>

                        <Card.Text>
                          {' '}
                          <span style={{ fontWeight: 'bold' }}>Date :</span>
                          <Moment format='YYYY/MM/DD'>{CurEle.date}</Moment>
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
                          {CurEle.description}
                        </ShowMoreText>
                      </Card.Body>
                      <Card.Text>
                        <Link to='/response' className='btn btn-primary'>
                          {' '}
                          Add Response
                        </Link>
                      </Card.Text>
                      <Card.Text></Card.Text>
                    </Card>
                  </div>
                  <br />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default ViewRecord;
