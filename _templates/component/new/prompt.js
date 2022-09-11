const { pascalCase } = require('change-case')
module.exports = [
  {
    type: 'input',
    name: 'name',
    message: 'Component name (eg. dropdown menu)',
    result: (name) => pascalCase(name),
  },
]
