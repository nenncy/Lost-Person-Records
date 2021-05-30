import React, { useEffect, useState, useCallback } from 'react';
import './cards/card.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container, Row, Col, Modal, CardColumns } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { getSuggestedQuery } from '@testing-library/dom';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import ShowMoreText from 'react-show-more-text';

import 'moment-timezone';

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

const ViewComplaint = () => {
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
  // eslint-disable-next-line
  const deleteComplaint = async (id) => {
    console.log(id);
    const res = await axios.delete(`http://localhost:5000/complaint/${id}`);
  };

  useEffect(() => {
    getUser();
  }, [deleteComplaint]);
  return (
    <>
      <h1 style={mystyle}>List of Complaints</h1>
      <div className='container-fluid '>
        <div className='row text-left'>
          <div className='cards-container'>
            {user.map((CurElem) => {
              return (
                <div>
                  <div className='col-10 col-md-4 mt-5' key={CurElem._id}>
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
                          src={CurElem.photo}
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
                          {CurElem.name}
                        </Card.Text>

                        <Card.Text>
                          <span style={{ fontWeight: 'bold' }}>Age : </span>{' '}
                          {CurElem.age}
                        </Card.Text>
                        <Card.Text>
                          <span style={{ fontWeight: 'bold' }}>
                            Police Station :{' '}
                          </span>{' '}
                          {CurElem.pstation}
                        </Card.Text>
                        <Card.Text>
                          <span style={{ fontWeight: 'bold' }}>Gender : </span>{' '}
                          {CurElem.gender}
                        </Card.Text>
                        <Card.Text>
                          <span style={{ fontWeight: 'bold' }}>City : </span>{' '}
                          {CurElem.city}
                        </Card.Text>

                        <Card.Text>
                          {' '}
                          <span style={{ fontWeight: 'bold' }}>Date :</span>
                          <Moment format='YYYY/MM/DD'>{CurElem.date}</Moment>
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
                          {CurElem.description}
                        </ShowMoreText>

                        <Card.Text>
                          <span style={{ fontWeight: 'bold' }}> </span>{' '}
                        </Card.Text>
                      </Card.Body>
                      <Card.Text>
                        <Link
                          style={{ color: 'black' }}
                          to={'/editComplaint/' + CurElem._id}
                        >
                          <span> Edit</span>
                        </Link>{' '}
                        |{' '}
                        <Button
                          style={{ color: 'black' }}
                          onClick={() => deleteComplaint(CurElem._id)}
                        >
                          {' '}
                          Delete
                        </Button>
                        {/* <Link to={'/delete/' + CurElem._id}></Link> */}
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
export default ViewComplaint;
