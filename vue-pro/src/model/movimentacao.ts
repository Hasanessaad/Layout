import { AbstractEntity } from "./abstract-entity";
import { Condutor } from "./condutor";
import { Veiculo } from "./veiculo";

export class Movimentacao extends AbstractEntity {
    vehicleId! : Veiculo
    conductorId! : Condutor
    enter! : Date
    exit! : Date
    constructor(){
        super()
        this.active = true,
        this.atualizacao = new Date()
        this.cadastro = new Date()
    }
}