module.exports = (app) => {
    const participant = require('../controllers/participant.controller.js');

    // Create a new participant
    app.post('/participants', participant.create);

    // Retrieve all participants
    app.get('/participants', participant.findAll);

    // Retrieve a single participant with referenceNumber
    app.get('/participants/:referenceNumber', participant.findOne);

    // Update a participant with referenceNumber
    app.put('/participants/:referenceNumber', participant.update);

    // Delete a participant with referenceNumber
    app.delete('/participants/:referenceNumber', participant.delete);
}