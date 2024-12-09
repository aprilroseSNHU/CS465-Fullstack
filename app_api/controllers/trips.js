const mongoose = require('mongoose');
const Trip = require('../models/travlr'); // Register model
const Model = mongoose.model('trips');

// Find trips by code
const tripsFindByCode = async (req, res) => {
    const q = await Model
        .find({ 'code': req.params.tripCode })
        .exec();

    if (!q || q.length === 0) {
        return res
            .status(404)
            .json({ error: 'Trip not found' });
    } else {
        return res
            .status(200)
            .json(q);
    }
};

// List all trips
const tripsList = async (req, res) => {
    const q = await Model
        .find({ 'code': req.params.tripCode })
        .exec();

    if (!q || q.length === 0) {
        return res
            .status(404)
            .json({ error: 'Trips not found' });
    } else {
        return res
            .status(200)
            .json(q);
    }
};

module.exports = {
    tripsList,
    tripsFindByCode
};
