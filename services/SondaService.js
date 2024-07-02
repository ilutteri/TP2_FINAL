import Sonda from "../models/SondaModel.js"

class SondaService {

    sondaModel = new Sonda()

    insertSondaService = async (id, temperatura) => {
        try {
            if(id < 1 || id > 5) throw error
            if(temperatura < -20 || temperatura > 100) throw error
            const data = await this.sondaModel.create(id, temperatura);
            return data;
        } catch (error) {
            throw error
        }
    }

    getSondasService = async () => {
        try {
            const data = await this.sondaModel.getAll();
            return data;
        } catch (error) {
            throw error
        }
    }

    getSondaByIdService = async (id) => {
        try {
            if(id < 1 || id > 5) throw error
            const data = await this.sondaModel.getById(id);
            return data;
        } catch (error) {
            throw error
        }
    }

}

export default SondaService;