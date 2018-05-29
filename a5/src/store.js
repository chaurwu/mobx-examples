import { types } from "mobx-state-tree";

export const memoize = (fn) => {
    let cache = new Map();
    return (...args) => {
      if (cache.has(args)) {
        console.log('Fetching from cache');
        return cache.get(args);
      }
      else {
        console.log('Calculating result');
        let result = fn(...args);
        cache.set(args, result);
        return result;
      }
    }
  }

export const Port = types
  .model("Port", {
      name: "",
      x: 0,
      y: 0,
      width: 5,
      height: 5
  })

const createNodeTypeNonMemoized = (modelType) => {
    return types
        .model(`${modelType.name}Node`, {
            id: types.identifier(types.number),
            name: "",
            model: types.reference(modelType),
            x: 0,
            y: 0
        })
}

const createArrowTypeNonMemoized = (fromNodeType, toNodeType) => {
    return types
        .model(`${fromNodeType.name}Arrow`, {
            name: "",
            fromNode: types.reference(fromNodeType),
            toNode: types.reference(toNodeType)
        })
}

export const createNodeType = memoize(createNodeTypeNonMemoized);
export const createArrowType = memoize(createArrowTypeNonMemoized);

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

export const Circuit2 = types
    .model("Circuit2", {
        id: types.identifier(types.number),
        name2: ""
    })

export const CircuitStore = types
    .model("CircuitStore", {

    })

///// generated types

export const CircuitNode = createNodeType(Circuit);
export const Circuit2Node = createNodeType(Circuit2);
export const CircuitArrow = createArrowType(Circuit, Circuit);

export const Node = types.union(CircuitNode, Circuit2Node)
export const Arrow = types.union(CircuitArrow)

export const Diagram = types
    .model("Diagram", {
        name: "",
        nodes: types.optional(types.array(Node), []),
        arrows: types.optional(types.array(Arrow), [])
    })


// export const CircuitNode = types
//     .compose(
//         Node,
//         Circuit
//     )
//     .named("CircuitNode")


export const appState = AppState.create({})