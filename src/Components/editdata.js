import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Container } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import { Input } from 'reactstrap';

const EditData = () => {
  const [newUser, setNewUser] = useState({
    username: '',
    // age: '',
    location: '',
    date: '',
    photo: '',
    desc: '',
  });
  const params = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const res = await axios.get(`http://localhost:5000/data/${params.id}`);
      const data = res.data;
      setNewUser({
        username: data.username,
        // age: String(data.age),
        location: data.location,
        date: new Date(data.date),
        photo: data.photo,
        desc: data.desc,
      });
      setLoading(false);
    };

    getData();
  }, [params.id]);
  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const onChangeDate = (date) => {
    setNewUser({ ...newUser, date: date });
  };

  const onChangePhoto = (e) => {
    setNewUser({ ...newUser, photo: e.target.files[0] });
  };
  const history = useHistory();

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = newUser;

    await axios.put('http://localhost:5000/data/update/' + params.id, formData);
    history.goBack();
  };

  return (
    <Container>
      <h3>Create New Log</h3>
      <form method='POST' onSubmit={onSubmit} encType='multipart/form-data'>
        <div className='form-group'>
          <label>Username: </label>
          <input
            type='text'
            required
            name='username'
            className='form-control'
            value={newUser.username}
            onChange={handleChange}
          />
        </div>
        <div className='form-group'>
          <label>Photo :</label>
          <br />
          {newUser.photo.length > 0 ? newUser.photo.split('images/')[1] : ''}
          <input
            type='file'
            accept='.png, .jpg, .jpeg'
            name='photo'
            onChange={onChangePhoto}
          />
        </div>
        {/* <div className='form-group'>
          <label>Age </label>
          <input
            type='text'
            required
            name='age'
            className='form-control'
            value={newUser.age}
            onChange={handleChange}
          />
        </div> */}
        <div className='form-group'>
          <label>Location </label>
          <input
            type='text'
            name='location'
            className='form-control'
            value={newUser.location}
            onChange={handleChange}
          />
        </div>
        <div className='form-group'>
          <label>Date: </label>
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
          <input type='submit' value='Edit List' className='btn btn-primary' />
        </div>
      </form>
    </Container>
  );
};

export default EditData;
