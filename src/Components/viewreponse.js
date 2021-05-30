import React, { useEffect, useState } from 'react';
import './cards/card.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { getSuggestedQuery } from '@testing-library/dom';
import Moment from 'react-moment';
import { Link, useParams } from 'react-router-dom';
import 'moment-timezone';

import axios from 'axios';
const mystyle = {
  color: 'black',
  backgroundColor: 'white',
  padding: '10px',
  fontFamily: 'Arial',
  textAlign: 'center',
  fontSize: '2em',
};

const ViewResponse = () => {
  const [user, setUsers] = useState([]);

  const getUser = async () => {
    const response = await fetch('http://localhost:5000/response');

    setUsers(await response.json());
  };
  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <h1 style={mystyle}>Response From User</h1>
      <div className='container-fluid '>
        <div className='row text-left'>
          <div className='cards-container'>
            {user.map((CurElem) => {
              return (
                <div>
                  <div className='col-10 col-md-4 mt-5' key={CurElem._id}>
                    <Card
                      style={{
                        height: '22rem',
                        width: '18rem',
                        backgroundColor: 'thistle',
                      }}
                      className='d-flex align-items-center'
                    >
                      <Card.Body>
                        <Card.Text style={{ fontFamily: 'sans-serif' }}>
                          {' '}
                          <span style={{ fontWeight: 'bold' }}>
                            User :
                          </span>{' '}
                          {CurElem.username}
                        </Card.Text>
                        <Card.Text>
                          {' '}
                          <span style={{ fontWeight: 'bold' }}>Found : </span>
                          {CurElem.found}
                        </Card.Text>
                        <Card.Text style={{ fontFamily: 'sans-serif' }}>
                          {' '}
                          <span style={{ fontWeight: 'bold' }}>
                            Message :
                          </span>{' '}
                          {CurElem.msg}
                        </Card.Text>
                        <Card.Text>
                          {' '}
                          <span style={{ fontWeight: 'bold' }}>
                            Location :{' '}
                          </span>
                          {CurElem.location}
                        </Card.Text>
                        <Card.Text>
                          {' '}
                          <span style={{ fontWeight: 'bold' }}>Contact : </span>
                          {CurElem.contact}
                        </Card.Text>

                        <Card.Text>
                          {' '}
                          <span style={{ fontWeight: 'bold' }}>Date : </span>
                          <Moment format='YYYY/MM/DD'>{CurElem.date}</Moment>
                        </Card.Text>
                      </Card.Body>
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
export default ViewResponse;
