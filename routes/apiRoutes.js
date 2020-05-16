const db = require("../models");

module.exports = function (app) {
  app.get("/api/workouts", (req, res) => {
    db.Workout.find({}).then((workoutData) => {
      res.json(workoutData);
    });
  });

  app.post("/api/workouts", (req, res) => {
    console.log(req.body);

    // let newWorkout = {
    //   day: req.body.day,
    //   exercises: req.body.exercises,
    // };
    // db.Workout.create(newWorkout, (err) => console.log(err));
  });

  app.put("/api/workouts/:id", (req, res) => {
    let id = req.params.id;

    db.Workout.findByIdAndUpdate(id, {
      $push: { exercises: JSON.parse(req.body) },
    })
      .then((data) => res.json(data))
      .catch(console.error);
  });

  app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({}).then((workoutData) => {
      res.json(workoutData);
    });
  });
};
