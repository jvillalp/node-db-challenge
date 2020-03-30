const db = require('../database/dbConfig')

module.exports = {
    add,
    find,
    findById,
    update,
    remove
}

function add(project){
    return db('projects').insert(project)
}

function find(){
    return db('projects')
}

function findById(id) {
    return db('projects')
        .where({id})
        .first();
}

function update(id, changes){
    return db("products")
    .where({id})
    .update(changes)
}

function remove(){
    return db("products")
    .where({id})
    .del()
}