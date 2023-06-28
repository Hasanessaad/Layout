import { AbstractEntity } from "./abstract-entity";
import { Condutor } from "./condutor";
import { Veiculo } from "./veiculo";

export class Movimentacao extends AbstractEntity {
    vehicleId! : Veiculo
    conductorId! : Condutor
    enter! : Date
    exit! : Date
    tempo! : number
    tempoDesconto! : Date
    tempoMulta! : Date
    valorDesconto! : number
    valorMulta! : number
    valorTotal! : number
    valorHora! : number
    valorHoraMulta! : number

    constructor(){
        super()
        this.active = true
    }
}