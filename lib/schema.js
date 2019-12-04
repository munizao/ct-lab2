const {
  Validator
} = require('../lib/validator.js');

class Schema {
  constructor(schemaDefinition) {
    this.validators = []
    for(let [key, value] in schemaDefinition.entries()) {
      this.validators.push(new Validator(key, value));
    }
  }
  validate(obj) {
    const validatedObj = {};
    this.validators.forEach(validator => {
      validatedObj[validator.field] = validator(obj);
    });
    return validatedObj;
  }
}

module.exports = {
  Schema
};
