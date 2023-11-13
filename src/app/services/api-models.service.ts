import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export type modelsType = {
  id: string;
  author: string;
  name: string;
  description: string;
  date: string;
  modelName: string;
  polygone: number;
};

@Injectable({
  providedIn: 'root',
})
export class ApiModelsService {
  constructor(private _http: HttpClient) {}

  getModels() {
    return this._http.get<modelsType[]>('http://localhost:3333/api/models');
  }
}
