const { where } = require("sequelize");

class CrudRepository{
    constructor(model){
        this.model = model;
    }

    async create(data){
        try {
            const result = await this.model.create(data);
            return result;
        } catch (error) {
            console.log("Something went wrong in create crud repo");
            throw error;
        }
    }

    async destroy(modelID){
        try {
            await this.model.destroy({
                where: {
                    id : modelID
                }
            });
            return true;
        } catch (error) {
            console.log("Something went wrong in destroy crud repo");
            throw error;
        }
    }

    async get(modelID){
        try {
            const result = this.model.findByPk(modelID);
            return result;
        } catch (error) {
            console.log("Something went wrong in get crud repo");
            throw error;
        }
    }

    async getAll(){
        try {
            const result = this.model.getAll();
            return result;
        } catch (error) {
            console.log("Something went wrong in getAll crud repo");
            throw error;
        }
    }

    async update(modelID, data){
        try {
            const result = await this.model.update(data, {
                where : {
                    id: modelID
                }
            })
            return result;
        } catch (error) {
            console.log("Something went wrong in update crud repo");
            throw error;
        }
    }
};

module.exports = CrudRepository;