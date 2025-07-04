class CrudService{
    constructor(repository){
        this.repository = repository;
    }

    async create(data){
        try {
            const response = await this.repository.create(data);
            return data;
        } catch (error) {
            console.log("Something went wrong in the create crud service");
            throw error;
        }
    }

    async destroy(id){
        try {
            const repsonse = await this.repository.destroy(id);
            return response;
        } catch (error) {
            console.log("Something went wrong in the destroy crud service");
            throw error;
        }
    }

    async get(id){
        try {
            const response = await this.repository.get(id);
            return response;
        } catch (error) {
            console.log("Something went wrong in the get crud service");
            throw error;
        }
    }

    async getAll(){
        try {
            const response = await this.repository.getAll();
            return response;
        } catch (error) {
            console.log("Something went wrong in the getAll crud service");
            throw error;
        }
    }

    async update(id, data){
        try {
            const response = await this.repository.update(id, data);
            return response;
        } catch (error) {
            console.log("Something went wrong in the update crud service");
            throw error;
        }
    }
};

module.exports = CrudService;