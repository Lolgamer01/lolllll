'use strict';

/*!
* returns discriminator by discriminatorMapping.value
*
* @param {Schema} schema
* @param {string} value
*/

module.exports = function getSchemaDiscriminatorByValue(schema, value) {
  if (schema == null || schema.discriminators == null) {
    return null;
  }
  for (const key of Object.keys(schema.discriminators)) {
    const discriminatorSchema = schema.discriminators[key];
    if (discriminatorSchema.discriminatorMapping == null) {
      continue;
    }
    if (discriminatorSchema.discriminatorMapping.value === value) {
      return discriminatorSchema;
    }
  }
  return null;
};