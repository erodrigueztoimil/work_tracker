const db = require("../models");

module.exports = function (app) {
  app.get("/api/workouts", (req, res) => {
    db.Workout.find({}).then((workoutData) => {
      res.json(workoutData);
    });
  });

  app.post("/api/workouts", (req, res) => {
    db.Workout.create(req.body)
      .then((data) => res.json(data))
      .catch((err) => console.log(err));
  });

  app.put("/api/workouts/:id", (req, res) => {
    db.Workout.findByIdAndUpdate(req.params.id, {
      $push: { exercises: req.body },
    })
      .then((data) => res.json(data))
      .catch(console.error);
  });

  app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({}).then((workoutData) => {
      res.json(workoutData);
    });
  });

  app.delete("/api/deleteWorkout/:id", (req, res) => {
    db.Workout.findByIdAndDelete(req.params.id)
      .then((response) => res.json(response))
      .catch((err) => console.log(err));
  });
};
