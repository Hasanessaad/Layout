import { AbstractEntity } from "./abstract-entity";

export class Marca extends AbstractEntity {
    name! : string 
    constructor(){
        super()
        this.active = true
        this.atualizacao = new Date()
        this.cadastro = new Date()
    }

}
 