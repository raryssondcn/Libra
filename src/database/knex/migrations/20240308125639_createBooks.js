
exports.up = (knex) => {
    return knex.schema.createTable("books", (table) => {
        table.increments('id').primary()
        table.string("title").notNullable()
        table.string("author").notNullable()
        table.string("category").notNullable()
        table.string("pageNumber").notNullable()
        table.boolean("available").defaultTo("true")
    })
  
};


exports.down = (knex) => {
    return knex.schema.dropTableIfExist("books")
};
