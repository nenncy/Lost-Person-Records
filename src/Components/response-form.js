import React, { Component, useState } from 'react';
import axios from 'axios';
import { Container, Row } from 'react-bootstrap';

const CreateResponse = () => {
  const [user, setUser] = useState({
    msg: '',
    contact: '',
    username: '',
    location: '',
    found: '',
  });

  let name, value;
  const Handleinput = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const postdata = async (e) => {
    e.preventDefault();
    const { msg, username, contact, location, found } = user;

    const res = await fetch('/response/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        msg,
        contact,
        username,
        location,
        found,
      }),
    });
    const data = await res.json();
    if (data.status === 422 || !data) {
      window.alert('invalid');
    } else {
      window.alert(' succesufull');
      console.log('success');

      window.location = '/';
    }
  };

  return (
    <Container className='center'>
      <Row className='content'>
        <div className='col-md-6 mb-3 mx-auto'>
          <h3>Add Response</h3>
          <form method='POST'>
            <div className='form-group row'>
              <label>User </label>
              <input
                type='text'
                name='username'
                className='form-control'
                value={user.username}
                placeholder='Your Name'
                onChange={Handleinput}
              />
            </div>

            <div className='form-group row'>
              <label>Found </label>
              <input
                type='text'
                name='found'
                className='form-control'
                value={user.found}
                placeholder='Found Name'
                onChange={Handleinput}
              />
            </div>
            <div className='form-group row'>
              <label>Message </label>
              <input
                type='text'
                name='msg'
                className='form-control'
                placeholder='Enter Message'
                value={user.msg}
                onChange={Handleinput}
              />
            </div>
            <div className='form-group row'>
              <label>Location </label>
              <input
                type='text'
                name='location'
                placeholder='Enter Location'
                className='form-control'
                value={user.location}
                onChange={Handleinput}
              />
            </div>
            <div className='form-group row'>
              <label>Contact Number </label>
              <input
                type='text'
                name='contact'
                className='form-control'
                value={user.contact}
                placeholder='Your Contact Number'
                onChange={Handleinput}
              />
            </div>

            <div className='form-group'>
              <input
                type='submit'
                value='Submit'
                className='btn btn-primary'
                onClick={postdata}
              />
            </div>
          </form>
        </div>
      </Row>
    </Container>
  );
};

export default CreateResponse;
