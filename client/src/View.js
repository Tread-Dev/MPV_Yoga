import React from "react";
import { Card, Button, Image, Grid, Embed } from "semantic-ui-react";
import ReactPlayer from "react-player";
import "./Modal.css";
import "./App.css";
import Plyr from "react-plyr";

const View = (props) => {
  var 
  // repsunit = null,
    timeunit = null,
    restunit = null,
    setsunit=null;
  // if (props.data.reps !== "") {
  //   repsunit = " Reps  ";
  // }
  if (props.data.time !== "") {
    timeunit = " (sec) Time  ";
  }
  if (props.data.rest !== "") {
    restunit = " (sec) Rest  ";
  }
  if(props.data.sets!==""){
    setsunit=" Set "
  }
  // console.log(props.id.id);

  return (
    <div>
      <Button
        icon="close"
        onClick={() => {
          props.onSelect(props.id);
        }}
      ></Button>
      <Button
        icon="edit"
        onClick={() => {
          props.onEdit(props.id);
        }}
      ></Button>

      <Button
        icon="copy"
        onClick={() => {
          props.onCopy(props.id);
        }}
      ></Button>

      <Card>
        <Card.Content>
          <div className="title">{props.data.excerciseName}</div>
        </Card.Content>

        {/* <br /> */}

        <div style={{ textAlign: "center" }} className="cardName">
          <Embed
            id={props.videoId}
            source="youtube"
            iframe={{
              allowFullScreen: true,
            }}
            active={true}
          />
        </div>
        <Card.Content>
          <div>
            {/* <span className="data" style={{marginLeft:"4px"}}>{props.data.reps}</span>
            <span className="unit" >{repsunit}</span> */}
            <span className="data" style={{marginLeft:"4px"}}>{props.data.time}</span>
            <span className="unit">{timeunit}</span>
            <span className="data" style={{marginLeft:"4px"}}>{props.data.rest}</span>
            <span className="unit">{restunit}</span>
            <span className="data" style={{marginLeft:"4px"}}>{props.data.sets}</span>
            <span className="unit">{setsunit}</span>
          </div>
          <div><span className="data" style={{marginLeft:"4px"}}>{props.data.Instruction}</span></div>
          <div><span className="data" style={{marginLeft:"4px"}}>{"ID "+ props.id }</span></div>

          {/* <br /> */}
        </Card.Content>
      </Card>
    </div>
  );
};

export default View;
