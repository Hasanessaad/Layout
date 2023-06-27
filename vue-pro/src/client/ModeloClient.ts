import axios, { AxiosInstance } from "axios";

import { Modelo } from "@/model/modelo";
import { PageRequest } from "@/model/page/page-request";
import { PageResponse } from "@/model/page/page-response";
import { Marca } from "@/model/marca";

export class ModeloClient { 

    private axiosClient : AxiosInstance;

    constructor(){
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8082/api/model',
            headers: {'Content-Type' : 'application/json'}
        });
    }

    public async findById(id : number) : Promise<Modelo> { 
        try {
            return (await this.axiosClient.get<Modelo>(`/id?id=${id}`)).data
        } catch (error : any) {
            return Promise.reject(error.response)
        }
    }

    public async findAll() : Promise<Modelo[]> {
        try {
            return (await this.axiosClient.get<Modelo[]>(`/findAll`)).data
        } catch (error : any) {
            return Promise.reject(error.response)
        }
    }

    public async findByActiveModel() : Promise<Modelo[]> {
        try {
            return (await this.axiosClient.get<Modelo[]>(`/ativo`)).data
        } catch (error : any) {
            return Promise.reject(error.response)
        }
    }

    public async cadastrar(modelo : Modelo) : Promise<void> {
        try {
            return (await this.axiosClient.post(`/add`, modelo ))
        } catch (error : any) {
            return Promise.reject(error.response)
        }
    }

    public async edit(id : number , modelo : Modelo ) : Promise<void> {
        try {
            return (await this.axiosClient.put(`/edit?id=${id}`, modelo )).data
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

    public async findByFiltrosPaginado(pageRequest : PageRequest) : Promise<PageResponse<Modelo>> {
        try {
            let requestPath = ''

            requestPath += `?page=${pageRequest.currentPage}`
            requestPath += `&size=${pageRequest.pageSize}`
            requestPath += `&sort=${pageRequest.sortField === undefined ? '' : pageRequest.sortField}, ${pageRequest.direction}`

            return (await this.axiosClient.get<PageResponse<Modelo>>(requestPath, {params : {filtros : pageRequest.filter } })).data
        } catch (error : any) {
            return Promise.reject(error.response)
        }
    } 
}
export default new ModeloClient();