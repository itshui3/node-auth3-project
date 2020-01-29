
exports.seed = function(knex) {

  return knex('depts').insert([
    {id: 1, dept_name: 'Gryffindor'},
    {id: 2, dept_name: 'Ravenclaw'},
    {id: 3, dept_name: 'Hufflepuff'},
    {id: 4, dept_name: 'Slytherin'}
  ]);

};
