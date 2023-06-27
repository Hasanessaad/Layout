import { AbstractEntity } from "./abstract-entity";
import { Color } from "./color";
import { Modelo } from "@/model/modelo";
import { Type } from "./type";

export class Veiculo extends AbstractEntity {
    plate! : string
    modelId! : Modelo
    color! : Color
    type! : Type

    constructor(){
        super()
        this.active = true
        this.atualizacao = new Date()
        this.cadastro = new Date()
    }
}