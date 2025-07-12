const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const participantSchema = new Schema({
  participantID: {
    type: String,
    required: true
  },
  taskOrder: {
    type: String,
    required: true
  },
  task1Completed: {
    type: String,
    required: true
  },
  task2Completed: {
    type: String,
    required: true
  },
  task3Completed: {
    type: String,
    required: true
  },
  task4Completed: {
    type: String,
    required: true
  }

});

const Participant = mongoose.model('Participants', participantSchema);

module.exports = Participant;
