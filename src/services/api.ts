import axios, { AxiosStatic, AxiosInstance, AxiosResponse } from 'axios'

export interface ApiResponse<T = any> extends AxiosResponse<T> {}
class Api {
  public request: AxiosInstance

  constructor(protected axiosStatic: AxiosStatic = axios) {
    this.request = axiosStatic.create({
      baseURL: process.env.NEXT_PUBLIC_API_URL,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
  }

  public async get<T>(url: string, params?: any): Promise<ApiResponse<T>> {
    return this.request.get<T>(url, { params })
  }

  public async post<T>(
    url: string,
    body?: any,
    headers?: any,
  ): Promise<ApiResponse<T>> {
    return this.request.post<T>(url, body, { headers })
  }

  public async put<T>(
    url: string,
    body?: any,
    headers?: any,
  ): Promise<ApiResponse<T>> {
    return this.request.put<T>(url, body, { headers })
  }

  public async patch<T>(
    url: string,
    body?: any,
    headers?: any,
  ): Promise<ApiResponse<T>> {
    return this.request.patch<T>(url, body, { headers })
  }

  public async delete<T>(url: string, params?: any): Promise<ApiResponse<T>> {
    return this.request.delete<T>(url, { params })
  }
}

const api = new Api()

export { api }
