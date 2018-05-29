import React, { Component } from 'react';
import { observer, inject } from "mobx-react";
import Grid from '@material-ui/core/Grid';
import PaletteItem from './palette-item';
import OrGate from './components/or-gate';
import AndGate from './components/and-gate';
import NandGate from './components/nand-gate';
import NorGate from './components/nor-gate';
import NotGate from './components/not-gate';
// import GridList from '@material-ui/core/GridList';
// import GridListTile from '@material-ui/core/GridListTile';

/*
Each palette item needs a corresponding view type. 

In a React app, we usually don't map a domain model to a view type
because a view type can often show data of multiple domain objects.

Each view type will respond to events differently.
For example, the 'AND gate' view type will create 
a new AND gate domain object when dragged to the canvas.

The 'OR gate' view type will create a new OR gate domain
object when dragged to the canvas.
*/
let paletteItemViewType = {}
export const registerPaletteItem = (itemName, viewType) => {
    paletteItemViewType[itemName] = viewType
}

registerPaletteItem("ANDGate", AndGate)
registerPaletteItem("ORGate", OrGate)
registerPaletteItem('NOTGate', NotGate)
registerPaletteItem('NORGate', NorGate)
registerPaletteItem('NANDGate', NandGate)


@inject(["store"])
@observer
class Palette extends Component {
  render() {
    const { palette } = this.props.store;
    const items = palette.items.map((item, index) => {
        let ItemViewType = paletteItemViewType[item.name]
        //console.log(this.props.connectDragSource)
        return (<Grid key={index} item xs={6}>
                  <PaletteItem>
                    <ItemViewType item={item} />
                  </PaletteItem>
                </Grid>);
    })

    return (
        <Grid container justify="center" spacing={16} id="palette">
          {items}
        </Grid>
      
      /* <Grid container justify="center" spacing={16}>
        <Grid key="1" item xs={6}>
          <AndGate />
        </Grid>
        <Grid key="2" item xs={6}>
          <AndGate />
        </Grid>
        <Grid key="3" item xs={6}>
          <AndGate />
        </Grid>
        <Grid key="4" item xs={6}>
          <AndGate />
        </Grid>
        <Grid key="5" item xs={6}>
          <AndGate />
        </Grid>
        <Grid key="6" item xs={6}>
          <AndGate />
        </Grid>
      </Grid> */


      /* <GridList cols={2} cellHeight={100}>
        <GridListTile key={1}>
          <AndGate />
        </GridListTile>
        <GridListTile key={2}>
          <AndGate />
        </GridListTile>
        <GridListTile key={3}>
          <AndGate />
        </GridListTile>
        <GridListTile key={4}>
          <AndGate />
        </GridListTile>
        <GridListTile key={5}>
          <AndGate />
        </GridListTile>
        <GridListTile key={6}>
          <AndGate />
        </GridListTile>
    </GridList> */
    );
  }
}

export default Palette;
