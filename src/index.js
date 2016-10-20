function isValidNumber(num) {
  const pattern = /^0[0-8]\d{8}$/g;
  return num.test(pattern);
}

module.exports = {
  isValidNumber,
};
