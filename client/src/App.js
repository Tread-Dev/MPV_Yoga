import React from 'react';
import Modal from './Modal';
import './App.css';
import Navbar from './Navbar'
import ReactTour from './Tour';
import Demo from './Demo';
import DraggableList from "react-draggable-lists";
import DragList from "./DragAndDrop.js";
function App() {
 
  return (
    <div className='App'>
      <Demo/>
      
      <Navbar/>
      {/* <ReactTour/> */}
  
     
      <Modal/>
          
      <DragList/>
      
    </div>
  );
}

export default App;