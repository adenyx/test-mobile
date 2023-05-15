import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import { BASE_API_URL } from '../constants'

class ApiService {
  protected axiosInstance: AxiosInstance

  constructor(baseURL: string) {
    this.axiosInstance = axios.create({
      baseURL: baseURL,
      validateStatus: (status) => status < 400,
    })

    this.axiosInstance.interceptors.response.use(
      (resp) => resp,
      (error) => {
        return Promise.reject(error)
      },
    )
  }

  public async get(path: string, config?: AxiosRequestConfig) {
    const result = await this.axiosInstance.get(path, config)
    return result.data
  }

  public async post(path: string, data: any, config?: AxiosRequestConfig) {
    const result = await this.axiosInstance.post(path, data, config)
    return result.data
  }

  public async put(path: string, data: any, config?: AxiosRequestConfig) {
    const result = await this.axiosInstance.put(path, data, config)
    return result.data
  }

  public async remove(path: string, config?: AxiosRequestConfig) {
    const result = await this.axiosInstance.delete(path, config)
    return result.data
  }
}

export const apiService = new ApiService(BASE_API_URL)
