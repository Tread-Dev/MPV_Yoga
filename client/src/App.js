import React from 'react';
import Modal from './Modal';
import './App.css';
import Navbar from './Navbar'
import ReactTour from './Tour';
import Demo from './Demo';

function App() {
 
  return (
    <div className='App'>
      <Demo/>
      
      <Navbar/>
      {/* <ReactTour/> */}
      <Modal/>
      
    </div>
  );
}

export default App;