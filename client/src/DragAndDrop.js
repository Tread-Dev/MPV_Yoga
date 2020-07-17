import React, { Component } from "react";
import View from "./View";
import { Row, Container } from "react-bootstrap";
import {Grid,Button} from 'semantic-ui-react';

import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  IconButton,
  ListItemSecondaryAction,
} from "@material-ui/core";
import GridList from "@material-ui/core/GridList";
import RootRef from "@material-ui/core/RootRef";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

// fake data generator
const getItems = (data) =>{
  console.log(data);
  return data;
}
 

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const getItemStyle = (isDragging, draggableStyle) => ({
  // styles we need to apply on draggables
  ...draggableStyle,

  ...isDragging,
});

const getListStyle = (isDraggingOver) => ({
  //background: isDraggingOver ? 'lightblue' : 'lightgrey',
});

class DragList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: getItems(this.props.data),
    };
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  onDragEnd(result) {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const items = reorder(
      this.state.items,
      result.source.index,
      result.destination.index
    );

    this.setState({
      items,
    });
  }

  // Normally you would want to split things out into separate components.
  // But in this example everything is just done in one place for simplicity
  render() {
    return (
      <div>
        <DragDropContext onDragEnd={this.onDragEnd}>
          <Droppable droppableId="droppable">
            {(provided, snapshot) => (
              <RootRef rootRef={provided.innerRef}>
                <List style={getListStyle(snapshot.isDraggingOver)}>
                  {this.state.items.map((item, index) => (
                    <Draggable
                      key={`item-${item.id}`}
                      draggableId={`item-${item.id}`}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <ListItem
                          ContainerComponent="li"
                          ContainerProps={{ ref: provided.innerRef }}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={getItemStyle(
                            snapshot.isDragging,
                            provided.draggableProps.style
                          )}
                        >
                          {/* <Grid.Row style={{ marginLeft: "2.5%" }}>
                            <GridList spacing={50} cellHeight={320} cols="md"> */}
                              <div className="view">
                                <Container>
                                  <Row>
                                  {item.id}
                                  </Row>
                                  <Row>
                                  {"index"+index}
                                  </Row>
                                  <Row>
                                
                                <Button
                                  icon="close"
                                  id={item.id}
                                  // onClick={deleteItem}
                                ></Button>
                                <Button
                                  icon="edit"
                                  id={item.id}
                                  // onClick={callEdit}
                                ></Button>

                                <Button
                                  icon="copy"
                                  id={item.id}
                                  // onClick={callCopy}
                                ></Button>
                              </Row>
                                  
                                  <Row>
                                    <View
                                      key={index}
                                      id={index}
                                      data={item}
                                      // onSelect={deleteItem}
                                      // onEdit={callEdit}
                                      videoId={item.videoId}
                                      // onCopy={callCopy}
                                    />
                                  </Row>
                                </Container>
                              </div>
                          
                          {/* <ListItemText
                            primary={item.primary}
                            secondary={item.secondary}
                          /> */}
                          <ListItemSecondaryAction />
                        </ListItem>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </List>
              </RootRef>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    );
  }
}

// Put the thing into the DOM!
export default DragList;
