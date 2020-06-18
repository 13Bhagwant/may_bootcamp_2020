exports.up = function (knex) {
    return knex.schema.table("posts", (table) => {
      // Alter table "posts"
      table.string("imageUrl"); // ADD COLUMN "imageUrl" VARCHAR(255)
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.table("posts", (table) => {
      // Alter table "posts"
      table.dropColumn("imageUrl"); // DROP COLUMN "imageUrl"
    });
  };