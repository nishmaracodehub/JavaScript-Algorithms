// Nesting For Loops

function multiplyAll(arr) {
  var product = 1;
  arr.forEach(element => {
    element.forEach(item => {
      product = item * product;
    });
  });
  console.log(product);
  return product;
}

// Modify values below to test your code
multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
