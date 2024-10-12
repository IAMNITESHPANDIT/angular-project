import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

import { Injectable } from '@angular/core';

import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root',
})

export class ApiService {
    
  private baseUrl: string = environment.apiUrl; 

  constructor() {}

  async get<T>(endpoint: string, config?: AxiosRequestConfig): Promise<T> {
    try {
      const response: AxiosResponse<T> = await axios.get(`${this.baseUrl}${endpoint}`, config);
      return response.data;
    } catch (error:any) {
      this.handleError(error);
      throw error.response.data;
    }
  }

  async post<T>(endpoint: string, data: any, config?: AxiosRequestConfig): Promise<T> {
    try {
      const response: AxiosResponse<T> = await axios.post(`${this.baseUrl}${endpoint}`, data, config);
      return response.data;
    } catch (error:any) {
      this.handleError(error);
      throw error.response.data;
    }
  }

  async put<T>(endpoint: string, data: any, config?: AxiosRequestConfig): Promise<T> {
    try {
      const response: AxiosResponse<T> = await axios.put(`${this.baseUrl}${endpoint}`, data, config);
      return response.data;
    } catch (error:any) {
      this.handleError(error);
       throw error.response.data;
    }
  }

  async delete<T>(endpoint: string, config?: AxiosRequestConfig): Promise<T> {
    try {
      const response: AxiosResponse<T> = await axios.delete(`${this.baseUrl}${endpoint}`, config);
      return response.data;
    } catch (error:any) {
      this.handleError(error);
       throw error.response.data;
    }
  }

  private handleError(error: any): void {
    console.error('API call error: ', error);
  }
}
