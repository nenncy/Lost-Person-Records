import React, { Component, useState } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import { Form, Input, Row } from 'reactstrap';
import 'react-datepicker/dist/react-datepicker.css';

import { Container } from 'react-bootstrap';

const CreateData = () => {
  const [newUser, setNewUser] = useState({
    username: '',
    desc: '',
    location: '',
    date: '',
    photo: '',
  });

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const onChangeDate = (date) => {
    setNewUser({ ...newUser, date: date });
  };

  const onChangePhoto = (e) => {
    setNewUser({ ...newUser, photo: e.target.files[0] });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append('photo', newUser.photo);
    formData.append('desc', newUser.desc);
    formData.append('username', newUser.username);
    formData.append('location', newUser.location);
    formData.append('date', newUser.date);

    console.log(JSON.stringify(formData));

    axios
      .post('http://localhost:5000/data/add', formData)
      .then((res) => console.log(res));
  };

  return (
    <Container className='center'>
      <Row className='content'>
        <div className='col-md-6 mb-3 mx-auto'>
          <h3>Create Happy Stories</h3>
          <form method='POST' onSubmit={onSubmit} encType='multipart/form-data'>
            <div className='form-group row'>
              <label htmlFor='username'>Username</label>
              <input
                type='text'
                required
                name='username'
                placeholder='Enter Name'
                className='form-control'
                value={newUser.username}
                onChange={handleChange}
              />
            </div>
            <div className='form-group row'>
              <label htmlFor='image'>
                Image :{' '}
                <span>
                  <br />
                </span>
              </label>
              <input
                required
                type='file'
                accept='.png, .jpg, .jpeg'
                name='photo'
                onChange={onChangePhoto}
              />
            </div>

            <div className='form-group row'>
              <label>Location </label>
              <input
                type='text'
                name='location'
                placeholder='Your Location'
                className='form-control'
                value={newUser.location}
                onChange={handleChange}
              />
            </div>
            <div className='form-group row'>
              <label>
                Date: <br />
              </label>
              <div>
                <DatePicker
                  selected={newUser.date}
                  onChange={onChangeDate}
                  dateFormat='yyyy/MM/dd'
                  showYearDropdown
                  showMonthDropdown
                  scrollableYearDropdown
                  scrollableMonthYearDropdown
                />
              </div>
            </div>
            <div className='form-group row'>
              <label htmlFor='desc'>Description</label>
              <Input
                type='textarea'
                id='policestation'
                name='desc'
                value={newUser.desc}
                onChange={handleChange}
                className='form-control'
                placeholder='Description'
              />
            </div>

            <div className='form-group'>
              <input
                type='submit'
                value='Create List'
                className='btn btn-primary'
              />
            </div>
          </form>
        </div>
      </Row>
    </Container>
  );
};

export default CreateData;
