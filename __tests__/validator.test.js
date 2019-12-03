const {

} = require('../lib/validator.js');

describe ('validator class module', () => {
  testValidator = new Validator('name', {
    type: String,
    required: true
  });
  it('properly makes a validator', () => {
    expect(testValidator.validator).toBeDefined();
  });
});