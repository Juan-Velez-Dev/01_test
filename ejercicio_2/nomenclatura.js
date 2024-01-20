// Pense en nombre mas intuitivos para la funcion, agrupando las operaciones individuales en una sola

function mathOperation (x, y, z) {
  let sumOperation = x + y;
  let multiOperation = sumOperation * z;
  let senoOperation = Math.sin(multiOperation);
  console.log(senoOperation)
  return senoOperation;
}
mathOperation(3,4,5)