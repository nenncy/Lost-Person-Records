import React from 'react';
import Main from './Components/MainComponent';
//react-router for navigation links.
import { BrowserRouter } from 'react-router-dom';
import './App.css';

//import { ConfigureStore } from './redux/configureStore';

//const store = ConfigureStore();

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Main />
      </div>
    </BrowserRouter>
  );
}

export default App;
