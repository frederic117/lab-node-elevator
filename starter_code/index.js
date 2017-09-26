const Elevator = require("./elevator.js");
const Person = require("./person.js");

let test = new Elevator();
const pers1 = new Person("paul", 0, 1);
const pers2 = new Person("margot", 0, 1);
const pers3 = new Person("amandine", 5, 10);

test.start();
setTimeout(() => test.stop(), 8000);
test.floorUp();
test.call(pers1);
test.floorUp();
test.log();
test.floorUp();
test.log();
test.call(pers2);
test.floorUp();
test.log();
test.floorDown();
test.log();

test.log();
test.floorDown();
test.floorDown();
test.floorDown();
test.floorDown();
test.floorDown();
test.floorDown();
test.floorDown();
test.floorDown();

test.log();
