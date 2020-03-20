
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, description: 'Gather materials',notes: 'make sure you have everything listed on the manuel', completed:false, project_id:1},
        {id: 2, description: 'set up work station', notes:'make sure everything is organized', completed:false, project_id:2},
        {id: 3, description: 'open your github', notes:'open the most up to date master branch', completed:false, project_id:3},
        {id: 4, description: 'Create a LESS file', notes:'to organize', completed:false, project_id:4}

      ]);
    });
};
