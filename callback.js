function printadora(value) {
  console.log(value);
}

function somadora(num1, num2, callback) {
  let sum = num1 + num2;
  callback(sum);
}

somadora(34, 66, printadora);