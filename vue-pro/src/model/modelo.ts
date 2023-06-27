import { AbstractEntity } from "./abstract-entity";
import { Marca } from "./marca";

export class Modelo extends AbstractEntity {
    name! : string
    brandId! : Marca
    ano!: number

    constructor(){
        super()
        this.active = true
        this.atualizacao = new Date()
        this.cadastro = new Date()
    }
}