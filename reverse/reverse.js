var reverse = function (x) {
  const [min, max] = [2 ** 31 * -1, 2 ** 31 - 1];
  x = x.toString();
  const isPositive = x[0] === "-" ? false : true;
  const idx = isPositive ? 0 : 1;
  let result = "";
  for (let i = idx; i < x.length; i++) {
    result = x[i] + result;
  }
  if (!isPositive) result = "-" + result;
  return +result >= min && +result <= max ? +result : 0;
};
