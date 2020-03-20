exports.up = function(knex) {
  return knex.schema
    .createTable("projects", tbl => {
      tbl.increments();

      tbl
        .string("name", 255)
        .unique()
        .notNullable();

      tbl.string("description", 300);

      tbl
        .boolean("completed")
        .notNullable()
        .defaultTo(false);

    })
    .createTable("resources", tbl => {
      tbl.increments();

      tbl
        .string("name", 255)
        .unique()
        .notNullable();

      tbl.string("description", 300);
    })
    .createTable("tasks", tbl => {
      tbl.increments();

      tbl.string("description", 300).notNullable();

      tbl.string("notes", 300);

      tbl
        .boolean("completed")
        .notNullable()
        .defaultTo(false);
      
      tbl
        .integer('project_id')
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    })
    .createTable("projects_resources", tbl => {
      // tbl.increments("project_id", "resource_id");

      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
      tbl
        .integer("resource_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("resources")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("tasks")
    .dropTableIfExists("resources")
    .dropTableIfExists("projects")
    .dropTableIfExists("projects_resources");
};
