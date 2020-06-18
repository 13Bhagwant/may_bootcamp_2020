
exports.up = function (knex) {
    return knex.schema.createTable("populations", (table) => {
      table.increments("id");
      table.integer("year");
      table.bigInteger("quantity");
      table.bigInteger("country_id").references("countries.id");
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable("populations");
  };