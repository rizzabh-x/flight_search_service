const { Op, where } = require('sequelize');
const {Flights} = require('../models/index')

class FlightRepository {

    
    // # is used for private class method or function
    #createFilter(data){
        let filter = {};
        if(data.arrivalAirportId){
            filter.arrivalAirportId = data.arrivalAirportId;
        }
        if(data.departureAirportId){
            filter.departureAirportId = data.departureAirportId;
        }
        // if(data.minPrice && data.maxPrice) {
        //     Object.assign(filter, {
        //         [Op.and] : [
        //             {price: {[Op.lte] : data.maxPrice}},
        //             {price: {[Op.gte]: data.minPrice}}
        //         ]
        //     })
        // }
        let priceFilter = [];
        if(data.minPrice){
            // Object.assign(filter, {price: {[Op.gte]:data.minPrice}});
            priceFilter.push({price: {[Op.gte] : data.minPrice}});
        }
        if(data.maxPrice){
            // Object.assign(filter, {price: {[Op.lte]:data.maxPrice}});
            priceFilter.push({price: {[Op.lte] : data.maxPrice}});
        }
        Object.assign(filter, {[Op.and]: priceFilter});
        return filter;
    }

    async createFlight(data){
        try {
            const flight = await Flights.create(data);
            return flight;
        } catch (error) {
            console.log("Something went wrong in the 1 repository layer")
            throw {error}
        }
    }

    async getFlight(flightId){
        try {
            const flight = await Flights.findByPk(flightId);
            return flight;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw {error};
        }
    }

    async getAllFlights(filter){
        try {
            const filterObject = this.#createFilter(filter);
            const flight = await Flights.findAll({
                where: filterObject
            });
            return flight;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw {error};
        }
    }

    async updateflight(flightId, data){
        try {
            await Flights.update(data,{
                where : {
                    id: flightId
                }
            });
            return true;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw {error};
        }
    }
}

module.exports = FlightRepository;