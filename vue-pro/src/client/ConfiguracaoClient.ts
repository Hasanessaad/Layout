import axios, { AxiosInstance } from "axios";

import { Configuracao } from "@/model/configuracao";
import { PageRequest } from "@/model/page/page-request";
import { PageResponse } from "@/model/page/page-response";

export class ConfiguracaoClient { 

    private axiosClient : AxiosInstance;

    constructor(){
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8082/api/configuracao',
            headers: {'Content-Type' : 'application/json'}
        });
    }

    public async findById(id : number) : Promise<Configuracao> { 
        try {
            return (await this.axiosClient.get<Configuracao>(`/id?id=${id}`)).data
        } catch (error : any) {
            return Promise.reject(error.response)
        }
    }

    public async findAll() : Promise<Configuracao[]> {
        try {
            return (await this.axiosClient.get<Configuracao[]>(`/findAll`)).data
        } catch (error : any) {
            return Promise.reject(error.response)
        }
    }

    public async findByActiveModel() : Promise<Configuracao[]> {
        try {
            return (await this.axiosClient.get<Configuracao[]>(`/ativo`)).data
        } catch (error : any) {
            return Promise.reject(error.response)
        }
    }

    public async cadastrar(modelo : Configuracao) : Promise<void> {
        try {
            return (await this.axiosClient.post(`/add`, modelo ))
        } catch (error : any) {
            return Promise.reject(error.response)
        }
    }

    public async edit(id : number , configuracao : Configuracao ) : Promise<void> {
        try {
            return (await this.axiosClient.put(`/edit?id=${id}`, configuracao )).data
        } catch (error : any) {
            return Promise.reject(error.response)
        }
    }

    public async deletar(id: number): Promise<string> {
        try {
            return (await this.axiosClient.delete<string>(`/delete?id=${id}`)).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
    }

    public async findByFiltrosPaginado(pageRequest : PageRequest) : Promise<PageResponse<Configuracao>> {
        try {
            let requestPath = ''

            requestPath += `?page=${pageRequest.currentPage}`
            requestPath += `&size=${pageRequest.pageSize}`
            requestPath += `&sort=${pageRequest.sortField === undefined ? '' : pageRequest.sortField}, ${pageRequest.direction}`

            return (await this.axiosClient.get<PageResponse<Configuracao>>(requestPath, {params : {filtros : pageRequest.filter } })).data
        } catch (error : any) {
            return Promise.reject(error.response)
        }
    } 
}

export default new ConfiguracaoClient();