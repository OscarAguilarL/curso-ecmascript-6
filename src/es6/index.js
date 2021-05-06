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
let hello ="Hello";
let world = "world";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

// clase 2
let lorem = "lorem ipsum dolorem\n"
+ "Otra frase epica que necesitamos.";

let lorem2 = `otra frase epica que necesitamos
ahora es otra frase epica
`;

console.log(lorem);
console.log(lorem2);
