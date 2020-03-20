const db = require('../database/dbConfig')

module.exports = {
    add,
    find
}

function add(task){
    return db('tasks').insert(task)
}

function find(){
    return db("tasks")
}