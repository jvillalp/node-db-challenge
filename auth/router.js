const router = require("express").Router();

const Resources = require("./resources-model");
const Projects = require("./projects-model");
const Tasks = require("./tasks-model");

router.get("/projects", (req, res) => {
  Projects.find()
    .then(project => {
      res.status(200).json(project);
    })
    .catch(err => {
      res.status(500).json({ errorMessage: `${err}` });
    });
});

router.get('/projects/:id', (req, res) => {
    const {id} = req.params

    Projects.findById(id)
        .then(project => {
            if(project){
                res.status(200).json(project)
            }else{
                res.status(404).json({errorMessage: `${err}`})
            }
        })
        .catch(err => {
            res.status(500).json({ errorMessage: `${err}`})
        })
});

router.post("/projects", (req, res) => {
  const projectData = req.body;
  Projects.add(projectData)
    .then(project => {
      res.status(200).json(project);
    })
    .catch(err => {
      res.status(500).json({ errorMessage: `${err}` });
    });
});

// router.put("/projects/:id", (req, res) => {
//     const { id } = req.params
//     const changes = req.body

//     Projects.update(id, changes)
//     .then(project)
// })

router.delete("/projects/:id", (req, res) => {
    const {id} = req.params

    db('projects')
        .where({id})
        .del()
        .then(count => {
            if(count){
                res.status(200).json({removed: count})
            }else{
                res.status(404).json({ errorMessage: `${err}`})
            }
        })
        .catch(err => {
            res.status(500).json({ errorMessage: `${err}`})
        })
})

router.get("/resources", (req, res) => {
  Resources.find()
    .then(resource => {
      res.status(200).json(resource);
    })
    .catch(err => {
      res.status(500).json({ errorMessage: `${err}` });
    });
});

router.get('/resources/:id', (req, res) => {
    const {id} = req.params

    Resources.findById(id)
        .then(resource => {
            if(resource){
                res.status(200).json(resource)
            }else{
                res.status(404).json({errorMessage: `${err}`})
            }
        })
        .catch(err => {
            res.status(500).json({ errorMessage: `${err}`})
        })
});

router.post("/resources", (req, res) => {
  const resourceData = req.body;
  Resources.add(resourceData)
    .then(resource => {
      res.status(200).json(resource);
    })
    .catch(err => {
      res.status(500).json({ errorMessage: `${err}` });
    });
});

// router.get('/tasks', (req, res) => {
//     Tasks.find()
//     .then(async (tasks) => {
//         await Promise.all(tasks.map(async (task) => {
//             await Projects.findById(task.project_id)
//                 .then(
//                     (project) => {
//                         task = {...task,project};
//                     }
//                 )
//         }));
//         console.log('finished');
//         res.status(200).json(tasks);
//     })
//     .catch(err => {
//         res.status(500).json({ errorMessage: `${err}`})
//     });
router.get("/tasks", (req, res) => {
  Tasks.find()
    .then(tasks => {
      res.status(200).json(tasks);
      console.log(tasks)
    })
    .catch(err => {
      res.status(500).json({ errorMessage: `${err}` });
    });

    router.get('/tasks/:id', (req, res) => {
        const {id} = req.params
    
        Tasks.findById(id)
            .then(task => {
                if(task){
                    res.status(200).json(task)
                }else{
                    res.status(404).json({errorMessage: `${err}`})
                }
            })
            .catch(err => {
                res.status(500).json({ errorMessage: `${err}`})
            })
    });

  router.post("/tasks", (req, res) => {
    const taskData = req.body;
    console.log(taskData);
    Tasks.add(taskData)
      .then(task => {
        res.status(201).json(task);
      })
      .catch(err => {
        res.status(500).json({ errorMessage: `${err}` });
      });
  });
});

module.exports = router;
