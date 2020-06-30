const mongoose = require('mongoose');

//Schema
const WorkoutSchema = {
  items: [
    {
      excerciseName: {
        type: String,
        required: true,
      },
      videoId: {
        type: String,
        require: true,
      },

      Instruction: String,
      time: String,
      rest: String,
      sets: String,

      img: { type: String, default: 0 },
      muted: { type: String, default: 0 },
      upnext: { type: String, default: 1 },
    },
  ],
  mail: {
    type: String,
    required: [true, 'Please add an email'],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please add a valid email',
    ],
  },
  timerName: {
    type: String,
    required: true,
  },
  timerDescription:{
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
};

module.exports = mongoose.model('Workout', WorkoutSchema);
