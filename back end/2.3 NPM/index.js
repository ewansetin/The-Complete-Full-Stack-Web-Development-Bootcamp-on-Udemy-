//var genName = require('sillyname');

import generateName from "sillyname";
var sillyname = generateName();
console.log(`my name is ${sillyname}.`);

import { randomSuperhero } from "superheroes";
const name = randomSuperhero();
console.log(`I am ${name}. `)
