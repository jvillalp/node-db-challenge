
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, name: 'Build a Desk', description:'Make sure to follow all instructions on manual', completed: false},
        {id: 2, name: 'Draw up Work from Home Plans', description:'Follow all tasks to be completed', completed: false},
        {id: 3, name: 'Build a Web API', description:'start from scratch', completed: false},
        {id: 4, name: 'Create a CSS file', description:'To assure best looking web page', completed: false}
      ]);
    });
};
