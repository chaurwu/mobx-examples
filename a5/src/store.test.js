import { CircuitNode, Circuit, Diagram, Circuit2, Circuit2Node, memoize } from './store'
import { getSnapshot, applyAction, clone, testActions } from "mobx-state-tree"

test("memoize1", () => {
    const func1 = (val) => (val);
    const memoizedFunc1 = memoize(func1);
    let obj1 = {x: 0}
    let obj2 = {x: 1}
    memoizedFunc1(obj1)
    memoizedFunc1(obj2)
})

test("it should be able to create models", () => {
    const circuit = Circuit.create({
        id: 2101,
        name: "OR gate 1"
    })

    const circuitNode = CircuitNode.create({
        id: 1101,
        name: "node 1",
        model: circuit
    });

    expect(getSnapshot(circuitNode)).toMatchSnapshot()

    const circuit2 = Circuit2.create({
        id: 2102,
        name2: "OR gate 2"
    })

    const circuit2Node = Circuit2Node.create({
        id: 1102,
        name: "node 2",
        model: circuit2
    });

    const diagram = Diagram.create({
        nodes: [circuitNode, circuit2Node]
    })

    expect(getSnapshot(diagram)).toMatchSnapshot()

})