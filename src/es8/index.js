const data = {
  frontend: 'Oscar',
  backend: 'Caroly',
  desing: 'Ethan',
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

// object values
const data = {
  frontend: 'Oscar',
  backend: 'Caroly',
  desing: 'Ethan',
}

const values = Object.values(data)
console.log(values);
console.log(values.length);

const string = "Hello";
console.log(string.padStart(7, 'hi'));
console.log(string.padEnd(12, ' -----'));


const obj = {
  name: 'Oscar',
}


const helloWorld = () => {
  return new Promise((resolve, reject) => {
    (false)
      ? setTimeout(() => resolve('Hello world'), 3000)
      : reject(new Error('Test error'));
  })
}

const helloAsync = async () => {
  const hello = await helloWorld();
  console.log(hello);
}

helloAsync();

const anotherFunction = async () => {
  try {
    const hello = await helloWorld();
    console.log(hello);
  } catch (error) {
    console.error(error);
  }
}

anotherFunction();
