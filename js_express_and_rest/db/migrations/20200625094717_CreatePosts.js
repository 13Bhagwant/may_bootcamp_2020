// The 'up' function is what is run when we 'migrate:latest'
exports.up = function (knex) {
    // When creating migrations, you must always return
    //  the result of your migration code. ALWAYS!
    return knex.schema.createTable("posts", (table) => {
   // CREATE TABLE posts
    table.increments("id"); // creates an auto-increment column names id ('id', SERIAL)
    table.string("title"); // "title" VARCHAR(255)
    table.text("content"); // "content" TEXT
    table.integer("viewCount"); // "viewCount" INTEGER
    table.string("tags"); // "tags" VARCHAR(255)
    table.string("imageUrl"); // ADD COLUMN "imageUrl" VARCHAR(255)
    table
    .timestamp("createdAt")
    .defaultTo(knex.fn.now());
    // "createdAt" timestamp default to NOW()
    });
  };
  
  // The 'down' function is what is run when we rollback our migration
  exports.down = function (knex) {
    return knex.schema.dropTable("posts");
  };