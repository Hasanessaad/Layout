import { AbstractEntity } from "./abstract-entity";
import { Condutor } from "./condutor";
import { Veiculo } from "./veiculo";

export class Movimentacao extends AbstractEntity {
    veiculoId! : Veiculo
    condutorId! : Condutor
    entrada! : Date
    constructor(){
        super()
        this.active = true
    }
}