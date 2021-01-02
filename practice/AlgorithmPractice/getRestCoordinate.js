const getRestCoordinate = array => {
  const arrayX = array.map(item => item[0]);
  const arrayY = array.map(item => item[1]);

  const x = arrayX.reduce((acc, item) => {
    if (acc.indexOf(item) !== -1) {
      acc.pop();
      return acc;
    }
    acc.push(item);
    return acc;
  }, []);

  const y = arrayY.reduce((acc, item) => {
    if (acc.indexOf(item) !== -1) {
      acc.pop();
      return acc;
    }
    acc.push(item);
    return acc;
  }, []);

  return [...x, ...y];
};

console.log(getRestCoordinate([[1, 4], [3, 4], [3, 10]]));