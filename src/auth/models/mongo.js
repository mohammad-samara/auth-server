'use strict';

/**
* module Model
* @module Model
*/

/**
* Model Constructor
* @param {object} schema
*/



class Model {
  constructor(schema) {
    this.schema = schema;
  }
  /**
   * get one or all records
   * @param {number} _id 
   * @returns {array} the records
   */

  get(_id) {
    const queryObject = _id ?  _id  : {};
    return this.schema.find(queryObject);
  }
  /**
   * Create a record
   * @param  {object}  record
   */

  create(record) {
    const newRecord = new this.schema(record);
    return newRecord.save();
  }
  
  /**
   * Update a record in the database
   * @param {number} _id Record ID
   * @param {object} record The new data to replace. ID is a required field
   * @returns {object}
   */
  
  update(_id, record) {
    return this.schema.findByIdAndUpdate(_id, record, { new: true });
  }

  /**
   * Patch a record in the database
   * @param {number} _id Record ID
   * @param {object} record The new data to replace. ID is a required field
   * @returns {object}
   */

  patch(_id, record) {
    return this.schema.findByIdAndUpdate(_id, record, { new: true });
  }

  /**
   * Deletes a recod in the model
   * @param id {string} Mongo Record ID
   */

  delete(_id) {
    return this.schema.findByIdAndDelete(_id);
  }
}

module.exports = Model;