import React, { Component } from 'react';
import { observer } from "mobx-react";
import Grid from '@material-ui/core/Grid';
import Canvas from './canvas'; 
import Palette from './palette';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

@DragDropContext(HTML5Backend)
@observer
class Diagram extends Component {
  render() {
    return (
      <Grid container className="diagram" spacing={16}>
        <Grid key="1" item xs={2}>
          <Palette />
        </Grid>
        <Grid key="2" item xs={10}>
          <Canvas />
        </Grid>
      </Grid>
    )
  }
}

export default Diagram;