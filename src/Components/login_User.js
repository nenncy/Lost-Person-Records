import React, { useState } from 'react';
import { Form, Row } from 'reactstrap';
import Google from './Google';
import { Container } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';

const Login_User = () => {
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginuser = async (e) => {
    e.preventDefault();
    const res = await fetch('/signin', {
      method: 'POST',
      headers: {
        'content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    //storing the data he get
    const data = res.json();
    if (res.status === 400 || !data) {
      window.alert('Invalid Credentials');
    } else {
      window.alert('Login Succesufull');
      console.log('success');

      history.push('/');
    }
  };

  return (
    <>
      <Container>
        <Row>
          <div className='col-md-6 mb-3 mx-auto'>
            <h2 className='signup-text mb-3'>User Login</h2>
            <Form
              method='POST'
              className='register-form mx-auto'
              id='register-form'
            >
              <div className='form-group row'>
                <label htmlFor='email'>Email Address</label>
                <input
                  type='text'
                  name='email'
                  autoComplete='off'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder='Your Password'
                  className='form-control'
                ></input>
              </div>

              <div className='btn-class'>
                <input
                  type='submit'
                  name='login'
                  autoComplete='off'
                  className='btn-class-form btn btn-primary'
                  value='Login'
                  onClick={loginuser}
                ></input>
              </div>

              <div className='m-4'>
                <h6>
                  {' '}
                  Not yet Registered?{' '}
                  <NavLink to='/signup_user'> Sign Up </NavLink>
                </h6>
              </div>

              <div className='m-4 center'>
                <p>
                  ---- <strong>OR</strong> ---
                </p>
                <h5 className='m-4'>Login with Google</h5>
                <Google />
              </div>
            </Form>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Login_User;
