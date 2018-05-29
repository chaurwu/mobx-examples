import { Circuit, Node, createCircuitNode } from './store'
import { getSnapshot, applyAction, clone, testActions } from "mobx-state-tree"

test("it should be able to create models", () => {
    const circuit = Circuit.create({
        id: 2101,
        name: "OR gate 1",
        pins: [
            {name: "Input1", value: 1},
            {name: "Input2", value: 0}
        ]
    })

    const node = Node.create({
        id: 1101,
        name: "node of circuit 1"
    })

    const circuitNode = createCircuitNode(circuit, node)
    
    circuit.addPin({name: "Output1", value: 1})
    expect(getSnapshot(circuitNode.model)).toMatchSnapshot()
})