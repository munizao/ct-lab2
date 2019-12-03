const {
  Validator
} = require('../lib/validator.js');

describe ('validator class module', () => {
  const testValidator = new Validator('name', {
    type: String,
    required: true
  });
  it('properly makes a validator', () => {
    expect(testValidator.type).toBeDefined();
    expect(testValidator.required).toBeDefined();
    expect(testValidator.validate).toBeDefined();
  });
});