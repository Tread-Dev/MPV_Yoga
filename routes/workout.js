const express = require('express');
const { insertWorkout ,getWorkout } = require('../controllers/workouts');

const Workout = require('../models/Workout');

const router = express.Router({ mergeParams: true });

router.route('/').post(insertWorkout);
router.route('/workout/:id').get(getWorkout);
module.exports = router;
