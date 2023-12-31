import axios, { AxiosInstance } from "axios";

import { Veiculo } from "@/model/veiculo";
import { PageRequest } from "@/model/page/page-request";
import { PageResponse } from "@/model/page/page-response";

export class VeiculoClient {

    private axiosClient : AxiosInstance;

    constructor(){
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8082/api/vehicle',
            headers: {'Content-Type' : 'application/json'}
        });
    }

    public async findById(id : number) : Promise<Veiculo> { 
        try {
            return (await this.axiosClient.get<Veiculo>(`/id?id=${id}`)).data
        } catch (error : any) {
            return Promise.reject(error.response)
        }
    }

    public async findAll() : Promise<Veiculo[]> {
        try { 
            return (await this.axiosClient.get<Veiculo[]>(`/findAll`)).data
        } catch (error : any) {
            return Promise.reject(error.response)
        }
    }

    public async findByActive() : Promise<Veiculo[]> {
        try {
            return (await this.axiosClient.get<Veiculo[]>(`/active`)).data
        } catch (error : any) {
            return Promise.reject(error.response)
        }
    }

    public async cadastrar(veiculo : Veiculo) : Promise<void> {
        try {
            return (await this.axiosClient.post(`/add`, veiculo))
        } catch (error : any) {
            return Promise.reject(error.response)
        }
    }

    public async edit( id : number , veiculo : Veiculo ) : Promise<void> {
        try {
            return (await this.axiosClient.put(`/edit?id=${id}`, veiculo)).data
        } catch (error : any) {
            return Promise.reject(error.response)
        }
    }

    public async deletar(id : number) : Promise<string> {
        try {
            return (await this.axiosClient.delete(`/delete?id=${id}`)).data
        } catch (error : any) {
            return Promise.reject(error.response)
        }
    }

    public async findByFiltrosPaginado(pageRequest : PageRequest) : Promise<PageResponse<Veiculo>> {
        try {
            let requestPath = ''

            requestPath += `?page=${pageRequest.currentPage}`
            requestPath += `&size=${pageRequest.pageSize}`
            requestPath += `&sort=${pageRequest.sortField === undefined ? '' : pageRequest.sortField}, ${pageRequest.direction}`
 
            return (await this.axiosClient.get<PageResponse<Veiculo>>(requestPath, {params : {filtros : pageRequest.filter } })).data
        } catch (error : any) {
            return Promise.reject(error.response)
        }
    }
}
export default new VeiculoClient();