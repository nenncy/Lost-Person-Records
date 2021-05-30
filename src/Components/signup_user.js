import React, { useState } from 'react';
import { Form, Row, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom';

import './user.css';

const Signup_User = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  let name, value;

  const handleInputs = (e) => {
    console.log(e);

    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();
    const { name, email, password } = user;

    console.log(name);
    const res = await fetch('/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    const data = await res.json();

    if (data.status === 422 || !data) {
      window.alert('Invalid registration');
      console.log('Invalid Registration');
    } else {
      window.alert('Registeration Successfull');

      history.push('/login_User');
    }
  };

  return (
    <>
      <Container className='center'>
        <Row className='content'>
          <div className='col-md-6 mb-3 mx-auto'>
            <h2 className='signup-text mb-3'>Sign Up as User</h2>
            <Form
              method='POST'
              className='register-form mx-auto'
              id='register-form'
            >
              <div className='form-group row'>
                <label htmlFor='name'>Your Name</label>
                <input
                  type='text'
                  name='name'
                  autoComplete='off'
                  value={user.name}
                  onChange={handleInputs}
                  placeholder='Your Name'
                  className='form-control'
                ></input>
              </div>

              <div className='form-group row'>
                <label htmlFor='email'>Email Address</label>
                <input
                  type='text'
                  name='email'
                  autoComplete='off'
                  value={user.email}
                  onChange={handleInputs}
                  placeholder='Your Email'
                  className='form-control'
                ></input>
              </div>

              <div className='form-group row'>
                <label htmlFor='password'>Password</label>
                <input
                  type='text'
                  name='password'
                  autoComplete='off'
                  value={user.password}
                  onChange={handleInputs}
                  placeholder='Your Password'
                  className='form-control'
                ></input>
              </div>
              <div className='btn-class'>
                <input
                  type='submit'
                  name='signup'
                  autoComplete='off'
                  className='btn-class-form btn btn-primary'
                  value='Register'
                  onClick={PostData}
                ></input>
              </div>
            </Form>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Signup_User;
