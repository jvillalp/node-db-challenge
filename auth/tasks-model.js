const db = require('../database/dbConfig')

module.exports = {
    add,
    find,
    findById,
    update,
    remove
}

function add(task){
    return db('tasks')
    .insert(task)
}

function find(){
    return db
    .select(
        "tasks.id as task_id",
        "tasks.description",
        "tasks.notes",
        "tasks.completed",
        "projects.description as project_description",
        "projects.name as project_name"
    )
    .from("tasks")
    .join( "projects", "task_id", "=", "projects.id")
}

function findById(id){
    return db("tasks")
    .where({id})
    .first();
}

function update(id, changes){
    return db("tasks")
    .where({id})
    .update(changes)
}

function remove(){
    return db("tasks")
    .where({id})
    .del()
}