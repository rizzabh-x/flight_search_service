const CrudRepository = require('./crud-repository')
const {Airport} = require('../models/index')

// Since this airport repository is a child class of CrudRepsitory
class AirportRepository extends CrudRepository{
    constructor(){
// this will automatically fetches or access the models from the crudeRepository call
        super(Airport);
    }
}

module.exports = AirportRepository;