
exports.up = function(knex) {
    return knex.schema.createTable('cars', tbl => {
      tbl.increments(); 
      tbl.uuid('VIN');
      tbl.string('make');
      tbl.string('model');
      tbl.string('mileage');
      tbl.string('transmission', 15);
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars');
  };
  