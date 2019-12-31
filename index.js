module.exports = function () {
  return function ({ addVariant, e }) {
    addVariant('empty', ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.${e(`empty${separator}${className}`)}:empty`
      })
    })
  };
}
