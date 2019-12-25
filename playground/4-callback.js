const add = (num1, num2, callback) => {
  setTimeout(() => {
    const sum = num1 + num2;

    return callback(sum);
  }, 2000);
};

add(1, 4, sum => {
  console.log(sum); // Should print: 5
});
