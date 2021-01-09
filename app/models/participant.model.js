const mongoose = require('mongoose');

const ParticipantSchema = mongoose.Schema({
    name: String,
    dateOfBirth: String,
    phoneNumber: String,
    address: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Participant', ParticipantSchema);