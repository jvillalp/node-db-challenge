const db = require('../database/dbConfig')

module.exports = {
    add,
    find,
    findById
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