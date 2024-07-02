import SondaService from "../services/SondaService.js";

class SondaController {

    _sondaService = new SondaService;

    insertSonda = async (req,res) => {
        try {
            const {id, temperatura} = req.body;
            if(!id || !temperatura) throw error
            const data = await this._sondaService.insertSondaService(id, temperatura);
            res.status(200).send(data)
        } catch (error) {
            res.status(400).send("datos no validos")
        }
    }

    getSondas = async (req, res) => {
        try {
            const data = await this._sondaService.getSondasService();
            res.status(200).send(data)
        } catch (error) {
            res.status(404).send("no existen sondas")
        }
    }

    getSondaById = async (req, res) => {
        try {
            const {id} = req.params
            const data = await this._sondaService.getSondaByIdService(id);
            res.status(200).send(data)
        } catch (error) {
            res.status(400).send("numero de sonda incorrecto")
        }
    }

}

export default SondaController;