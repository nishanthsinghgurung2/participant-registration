const Participant = require('../models/participant.model');

// Create and save a participant registration details
exports.create = (req, res) => {
    // validate the request
    if(!req.body) {
        return res.status(400).send({
            message: "Participant details cannot be empty"
        });
    }

    // Create a participant registration
    const participant = new Participant({
        name: req.body.name,
        dateOfBirth: req.body.dateOfBirth,
        phoneNumber: req.body.phoneNumber,
        address: req.body.address
    });

    // Save the participant details in the database
    participant.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Cannot create participant details"
            });
        })

};

// Retrieve and return all the participants from the database
exports.findAll = (req, res) => {
    Participant.find()
        .then(participants => {
            res.send(participants);
        }).catch(err => {
            res.status(500).send({
                message: err.message || 'Cannot fetch all the participants details'
            });
        });
};

// Find a single participant with referenceNumber
exports.findOne = (req, res) => {
    Participant.findById(req.params.referenceNumber)
        .then(participant => {
            if(!participant) {
                res.status(404).send({
                    message: "Participant not found with referenceNumber:" + req.params.referenceNumber
                });
            }
            res.send(participant);
        }).catch(err => {
            if(err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Error retrieving participant details for referenceNumber:" + req.params.referenceNumber
                });
            }
            res.status(500).send({
                message: "Error retrieving participant details with referenceNumber:" + req.params.referenceNumber
            })
        })
};

// Update a participant with a specific referenceNumber
exports.update = (req, res) => {
    // valiate the request
    if(!req.body) {
        res.status(400).send({
            message: "Participant details cannot be empty"
        });
    }

    // find participant and update it with request body
    Participant.findByIdAndUpdate(req.params.referenceNumber, {
        name: req.body.name,
        dateOfBirth: req.body.dateOfBirth,
        phoneNumber: req.body.phoneNumber,
        address: req.body.address
    }, {new: true})
    .then(participant => {
        if(!participant) {
            return res.status(404).send({
                message: "Participant not found with referenceNumber:" + req.params.referenceNumber
            });
        }
        res.send(participant);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Cannot find participant with referenceNumber:" + req.params.referenceNumber
            });
        }
        return res.status(500).send({
            message: "Error occured when updating participant details with referenceNumber:" + req.params.referenceNumber
        });
    })
};

// Delete a participant with a specific referenceNumber
exports.delete = (req, res) => {
    Participant.findByIdAndDelete(req.params.referenceNumber)
        .then(participant => {
            if(!participant) {
                return res.status(404).send({
                    message: "Participant not found with referenceNumber:" + req.params.referenceNumber
                });
            }
            res.send({message: "Participant details deleted successfully"});
        }).catch(err => {
            if(err.kind === 'ObjectId' || err.name === 'NotFound' ) {
                return res.status(404).send({
                    message: "Participant details not found with referenceNumber:" + req.params.referenceNumber
                });
            }
            return res.status(500).send({
                message: "Could not delete participant details with referenceNumber:" + req.params.referenceNumber
            });
        });
};