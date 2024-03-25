exports.up = (knex) => {
    return knex.schema.createTable("loans", (table) => {
        table.increments("id").primary()
        table.integer("user_id").unsigned().index().references("id").inTable("users")
        table.integer("book_id").unsigned().index().references("id").inTable("books")
    })
  
};

exports.down = (knex) => {
    return knex.schema.dropTableIfExist("loans")
};
