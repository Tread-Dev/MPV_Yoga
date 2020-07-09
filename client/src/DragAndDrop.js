import React, { useState } from "react";

import DraggableList from "react-draggable-lists";
import View from "./View";
const DragList=(props)=>{

  const [Items, setItems]=useState(props.items);
 
  console.log(props.items);
  
  return(
    <DraggableList width={1000} height={1000} style={{background:"black"}} >
     
     
      {/* {props.length} */}
        
      </DraggableList>
      
  );
}

export default DragList;