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
    db.Workout.update(
      { _id: req.params.id },
      { $push: { exercises: req.body } }
    )
      .then((data) => res.json(data))
      .catch(console.error);
  });
};
