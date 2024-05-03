
module.exports = function plaintextLoader(context) {
  if (!context) {
    return '';
  }
  return `module.exports = \`${context}\``;
};
