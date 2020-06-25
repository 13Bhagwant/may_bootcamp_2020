# Commands

```bash
# To create a project
npm init -y

# Add express to our project
npm i --save express

# Installing nodemon
npm i --save-dev nodemon

# Installing morgan
npm i --save morgan

# Adding ejs (template engine)
npm i --save ejs

# to initial knes
knex init # make sure that you have knex installed globally

npm i -g knex # if that doesn't work due permissions run it with sudo

sudo npm i -g knex # for linux

# To create a database
CREATEDB --echo <your-db-name>

# To Drop a database
DROPDB --if-exists --echo <your-db-name>

# to generate a migration
knex migrate:make <your-migration-name>

# to run a migration or all previous migrations
knex migrate:latest

# to create a seed
knex seed:make <your-seed-name>

# to run your seeds
knex seed:run
```