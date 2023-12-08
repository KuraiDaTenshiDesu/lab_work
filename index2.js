const array = [];

const fillArray = (len) => {
  for (let i = 0; i < len; i++) {
    array.push(Math.round(Math.random() * 10000));
  }
};

fillArray(Math.round(Math.random() * 100));
console.log(array);

const getMidAr = () => {
  return array.reduce((sum, num) => (sum += num), 0) / array.length;
};
