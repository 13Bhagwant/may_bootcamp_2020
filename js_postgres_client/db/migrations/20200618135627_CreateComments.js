exports.up = function (knex) {
    return knex.schema.createTable("comments", (table) => {
      table.increments("id");
      table.text("content");
      table.timestamp("createdAt").defaultTo(knex.fn.now());
      table.bigInteger("post_id").references("posts.id");
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable("comments");
  };