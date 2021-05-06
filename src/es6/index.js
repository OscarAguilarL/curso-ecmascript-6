function newFunction(name, page, county) {
  var name = name || 'Oscar';
  var age = age || '21';
  var country = county || 'MX';
  console.log(name, age, country);
}

// es6

function newFunction2(name = 'Oscar', age = 21, country = 'MX') {
  console.log(name, age, country);
}

newFunction2();
newFunction2('Ricardo', 23, 'CO');


// Template literals
let hello = "Hello";
let world = "world";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

// clase 2
// saltos de linea en strings
let lorem = "lorem ipsum dolorem\n"
  + "Otra frase epica que necesitamos.";

let lorem2 = `otra frase epica que necesitamos
ahora es otra frase epica
`;

console.log(lorem);
console.log(lorem2);

// Desestructurar objetos
let person = {
  'name': 'Oscar',
  'age': 32,
  'country': 'MX',
};

console.log(person.name, person.age, person.country);

let { name, age, country } = person;
console.log(name, age, country);

// Operador de propagación
let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valera', 'Yessica', 'Camila'];

let education = ['David', ...team1, ...team2];

console.log(education);

// diferencia entre global y let
{
  var global_var = 'Global var';
}

{
  let global_let = 'global let'
  console.log(global_let);
}

console.log(global_var);

// const
const a = 'b';
a = 'a';

// Clase: Arrow Functions, Promesas y Parámetros en objetos
let name = 'Oscar';
let age = 21;
// es5
obj = { name: name, age: age };
// es6
obj2 = { name, age }

console.log(obj);
console.log(obj2);

// Arrow functions
const names = [
  { name: 'Oscar', age: 31 },
  { name: 'Pedro', age: 32 },
]

// es5
let listOfNames = names.map(function (item) {
  console.log(item.name);
})

//es6
let listOfNames2 = names.map(item => console.log(item.name))

const listOfNames3 = (name, ages, country) => {
  //
}

const listOfNames4 = name => {
  // 
}

const sqare = num => num * num;

// Promesas
const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve('Hey!');
    } else {
      reject('Ups!!');
    }
  });
}

helloPromise()
  .then(response => console.log(response))
  .catch(error => console.log(error));