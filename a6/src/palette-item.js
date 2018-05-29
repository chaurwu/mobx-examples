import React, { Component } from 'react';
import { observer } from "mobx-react";
import { DragSource } from 'react-dnd';

// Now make PaletteItem draggable.
// yarn add react-dnd react-dnd-touch-backend
//                    <ItemViewType item={item} />
// I need to define three things: item type, spec and collect

export const DndItemTypes = {
  PaletteItem: 'PaletteItem'
}

const paletteItemDndSource = {
    beginDrag(props) {
        return {};
    }
}

function paletteItemDndSourceCollect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    }
}

@observer
class PaletteItem extends Component {
  render() {
    const item = this.props.item;
    const { connectDragSource } = this.props;
    return (
      connectDragSource(<div>
        {this.props.children}
      </div>)
    );
  }
}

export default DragSource(DndItemTypes.PaletteItem, paletteItemDndSource, paletteItemDndSourceCollect
)(PaletteItem);
