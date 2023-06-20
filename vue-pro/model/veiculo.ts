import { AbstractEntity } from "./abstract-entity";
import { Cor } from "./color";
import { Modelo } from "./modelo";
import { Tipo } from "./tipo";

export class Veiculo extends AbstractEntity {
    placa! : string
    modeloId! : Modelo
    cor! : Cor
    tipo! : Tipo
    ano! : number

    constructor(){
        super()
        this.ativo = true
        this.atualizacao = new Date()
        this.cadastro = new Date()
    }
}