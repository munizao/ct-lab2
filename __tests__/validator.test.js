const {
  Validator
} = require('../lib/validator.js');

describe ('validator class module', () => {
  const nameValidator = new Validator('name', {
    type: String,
    required: true
  });

  const goodDog = {
    name: 'spot'
  };

  const badDog = {
    number: 55
  };

  it('properly makes a validator', () => {
    expect(nameValidator.field).toEqual('name');
    expect(nameValidator.configuration).toEqual({
      type: String,
      required: true
    });
    expect(nameValidator.validate).toBeDefined();
  });

  it('properly validates', () => {
    expect(nameValidator.validate(goodDog)).toBeTruthy();
    expect(nameValidator.validate(badDog)).toBeFalsy();
  });
});
