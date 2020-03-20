
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {id: 1, name: 'MIT License', description:'require in order to upload on Github'},
        {id: 2, name: 'Tool kit',description: "needed to start building a desk"},
        {id: 3, name: 'VScode', description: 'uploaded latest version'},
        {id: 4, name: 'Software Engineer', description: 'create engineer to do task'},
      ]);
    });
};
