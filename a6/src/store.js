import { types, onPatch } from "mobx-state-tree";

export const Port = types
  .model("Port", {
      name: "",
      x: 0,
      y: 0,
      width: 5,
      height: 5
  })

export const Node = types
  .model('Node', {
      id: types.identifier(types.number),
      name: "",
      x: 0,
      y: 0,
      ports: types.optional(types.array(Port), [])
  })
  .actions(self => ({
      setPorts(newPorts) {
          self.ports = newPorts;
      }
  }))

// palette
export const PaletteItem = types
    .model("PaletteItem", {
        name: "",
        icon: ""
    })

export const Palette = types
    .model("Palette", {
        items: types.optional(types.array(PaletteItem), [])
    })

export const Diagram = types
  .model('Diagram', {
      nodes: types.optional(types.array(Node), []),
      palette: types.optional(Palette, { items: [] })
  })
  .actions(self => ({
      addNode(newNode) {
          self.nodes.push(newNode)
      }
  }))

export const bindDiagram = (diagram) => {

    // When a node is added to a diagram, I need to create
    // the corresponding new circuit.
  onPatch(diagram.nodes, patch => {
    console.log("Got change: " + JSON.stringify(patch))
  })
}


////// domain types

export const Pin = types
    .model("Pin", {
        name: types.string,
        value: 0
    })

export const Circuit = types
    .model("Circuit", {
        id: types.identifier(types.number),
        name: "",
        pins: types.optional(types.array(Pin), [])
    })
    .actions(self => ({
        addPin(newPin) {
            self.pins.push(newPin)
        }
    }))

export const AndGate = types
    .model("AndGate", {
       id: types.identifier(types.number),
       name: "AND gate",
       input1: types.optional(Pin, { name: "input1" }),
       input2: types.optional(Pin, { name: "input2" }),
       output: types.optional(Pin, { name: "output" })       
    })
    .views(self => ({
        get pins() {
            return [self.input1, self.input2, self.output]
        }
    }))

export const OrGate = types
    .model("OrGate", {
       id: types.identifier(types.number),
       name: "OR gate",
       input1: types.optional(Pin, { name: "input1" }),
       input2: types.optional(Pin, { name: "input2" }),
       output: types.optional(Pin, { name: "output" })       
    })
    .views(self => ({
        get pins() {
            return [self.input1, self.input2, self.output]
        }
    }))
    
// Given a circuit, create a node.
// Essentially, we need to map a circuit to a node somewhere.
// The mapping might not be as simple as mapping just a circuit to a node.
// We might also need to map the internal structure of a circuit
// to the internal structure of a node. 
// For example, we might need to map the pins of a circuit to 
// to ports of a node.
// The node does not know about the circuit.
// The circuit does not know about the node.
// When the circuit changes, we also want to change the node.
// So node should observe the changes of circuit or
// should it be the other way around? 
// I decide that I should observe changes in node and 
// update circuit accordingly.
export const createCircuitNode = (circuit, node) => {
    onPatch(circuit.pins, patch => {
        console.log("Got change: " + JSON.stringify(patch))
    })
    
    let ports = []
    circuit.pins.forEach((pin) => {
        ports.push(Port.create({ name: pin.name }))
    })

    node.setPorts(ports)
    return { model: circuit, node }
}



///// generated types

export const appState = Diagram.create({
    palette: {
        items: [
            {
                name: "ANDGate",
                icon: ""
            },
            {
                name: "ORGate",
                icon: ""
            },
            {
                name: "NANDGate",
                icon: ""
            },
            {
                name: "NORGate",
                icon: ""
            },
            {
                name: 'NOTGate',
                icon: ''
            }
        ]
    },
    nodes: [
        {
            id: 1101,
            name: "node of circuit 1"
        }
    ]
})
