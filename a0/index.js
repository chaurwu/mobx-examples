let observable = require('mobx').observable
let autorun = require('mobx').autorun

console.log("hi")

var numbers = observable([1,2,3]);
var sum = () => numbers.reduce((a, b) => a + b, 0);

var disposer = autorun(() => console.log(sum()));
// prints '6'
numbers.push(4);
// prints '10'

disposer();
numbers.push(5);

// const map = observable.map({ key: "value"});
// var disposer = autorun(() => console.log(map));
// map.set("key", "new value");
// disposer();

const list = observable([1, 2, 4]);
var disposer = autorun(() => console.log(list[2]));
list[2] = 3;
disposer();

const person = observable({
    array1: ["a", "b", "c"],
    lastName: "Lewis"
});
var disposer = autorun(() => console.log(person.array1));
person.array1.push("d");
disposer();

// const temperature = observable.box(20);
// var disposer = autorun(() => console.log(temperature));
// temperature.set(25);
// disposer();
