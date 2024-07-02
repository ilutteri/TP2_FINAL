class Sonda {

    sondas = [];

    create = async (id, temperatura) => {
        const sonda = {
            "id": id,
            "temperatura": temperatura,
            "fechaIngreso": new Date().toLocaleString()
        }
        this.sondas.push(sonda);
        return this.sondas[this.sondas.length - 1]
    }

    getAll = async () => {
        return this.sondas;
    }

    getById = async (id) => {
        return this.sondas.filter(sonda => sonda.id == id)
    }
}

export default Sonda;