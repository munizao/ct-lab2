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
    if(caster) {
      return caster(obj[this.field]);
    }
    throw new Error('Cannot cast');
  }
}

module.exports = {
  Validator
}