const router = require("express").Router()

const Resources = require("./resources-model")
const Projects = require('./projects-model')
const Tasks = require('./tasks-model')

router.get('/projects', (req, res) => {
    Projects.find()
    .then(project => {
        res.status(200).json(project)
    })
    .catch(err => {
        res.status(500).json({ errorMessage: `${err}`})
    })
});

router.post('/projects', (req, res) => {
    const projectData = req.body;
    Projects.add(projectData)
    .then(project => {
        res.status(200).json(project)
    })
    .catch(err => {
        res.status(500).json({ errorMessage: `${err}`})
    })
});

router.get('/resources', (req, res) => {
    Resources.find()
    .then(resource => {
        res.status(200).json(resource)
    })
    .catch(err => {
        res.status(500).json({ errorMessage: `${err}`})
    })
});

router.post('/resources', (req, res) => {
    const resourceData = req.body;
    Projects.add(resourceData)
    .then(resource => {
        res.status(200).json(resource)
    })
    .catch(err => {
        res.status(500).json({ errorMessage: `${err}`})
    })
});

router.get('/tasks', (req, res) => {
    Tasks.find()
    .then(task => {
        res.status(200).json(task)
    })
    .catch(err => {
        res.status(500).json({ errorMessage: `${err}`})
    });

    router.post('/tasks', (req, res) => {
        const taskData = req.body;
        Projects.add(taskData)
        .then(task => {
            res.status(200).json(task)
        })
        .catch(err => {
            res.status(500).json({ errorMessage: `${err}`})
        })
    });
});


module.exports = router;