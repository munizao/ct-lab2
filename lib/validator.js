const {
  getCaster
} = require('../lib/types.js');

class Validator {
  constructor(field, configuration) {
    this.field = field;
    this.configuration = configuration;
  }
  validate(obj) {
    if(!obj.hasOwnProperty(this.field)) {
      return false;
    }
    const caster = getCaster(this.configuration.type);
    const val = caster(obj[this.field]);
    return val;
  }
}

module.exports = {
  Validator
}