const getOddNumbers = (num) => {
  let arr = [];
  for (let i = 1; i <= num; i++) {
    if(i % 2 === 1) arr.push(i);
  }
  return arr
}
getOddNumbers(9)