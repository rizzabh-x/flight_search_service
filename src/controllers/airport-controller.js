const {AirportService} = require('../services/index');

const airportService = new AirportService();

const create = async (req, res) => {
    try {
        const response = await airportService.create(req.body);
        return res.status(201).json({
            message: "Successfully created an airport",
            err: {},
            data: response,
            success: true
        })
    } catch (error) {
        console.log("error in create airport controller");
        return res.status(500).json({
            data: [],
            success: false,
            err: error,
            message: 'Cannot create a new airport'
        })
    }
}

module.exports = {
    create
}