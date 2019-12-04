const {
  Schema
} = require('../lib/schema.js');

describe ('schema class module', () => {
  testSchemaDefinition =
  {
    name: {
      type: String,
      required: true
    }, 
    age: {
      type: Number,
      required: true
    },
    weight: {
      type: String
    }
  });

  testSchema = new Schema(testSchemaDefinition);

  it('properly makes a schema', () => {
    expect(testSchema.validators).toBeDefined()
  });

)};
