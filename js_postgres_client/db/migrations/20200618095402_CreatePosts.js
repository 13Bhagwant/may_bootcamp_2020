exports.up = function (knex) {
    return knex.schema.createTable("posts", (table) => {
      // CREATE TABLE posts
      table.increments("id"); // creates an auto-increment column names id ('id', SERIAL)
      table.string("title"); // "title" VARCHAR(255)
      table.text("content"); // "content" TEXT
      table.integer("viewCount"); // "viewCount" INTEGER
      table.string("tags"); // "tags" VARCHAR(255)
      table.timestamp("createdAt").defaultTo(knex.fn.now());
      // "createdAt" timestamp default to NOW()
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable("posts");
  };