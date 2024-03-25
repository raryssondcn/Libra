exports.up = (knex) => {
    return knex.schema.createTable("users", (table) => {
      table.increments('id').primary()
      table.string("name").notNullable()
      table.string("email").notNullable()
      table.string("fone").notNullable()
      //table.integer("bookId").unsigned().index().references("id").inTable("books")
      
    })
  };
  
  
  exports.down = (knex) => {
      return knex.schema.dropTableIfExist("users")
  };
  