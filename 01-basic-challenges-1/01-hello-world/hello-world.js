function helloWorld(name) {
  // Return the string 'Hello World!'
  name ? (name = name) : (name = "Stranger");
  return `Hello ${name}, Welcome to World!`;
}

let result = helloWorld();
console.log(result);
