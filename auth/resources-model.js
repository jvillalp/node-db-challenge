const db = require('../database/dbConfig');

module.exports = {
    add,
    find,
    findById,
    update,
    remove
}

function add(resource){
    return db('resources').insert(resource)
}

function find(){
    return db('resources')
}

function findById(id){
    return db("resources")
    .where({id})
    .first();
}

function update(id, changes){
    return db("resources")
    .where({id})
    .update(changes)
}

function remove(){
    return db("resources")
    .where({id})
    .del()
}