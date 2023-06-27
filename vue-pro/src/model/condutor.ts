import { AbstractEntity } from "./abstract-entity";

export class Condutor extends AbstractEntity{
    name! : string
    cpf! : string
    telephone! : string
    payedTime! : Date 
    cutTime! : Date


    constructor(){
        super()
        this.active = true
        this.atualizacao = new Date()
        this.cadastro = new Date()
    }
}
