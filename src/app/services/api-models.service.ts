import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export type modelsType = {
  id: string;
  author: string;
  name: string;
  description: string;
  date: string;
  modelName: string;
  polygons: number;
};

@Injectable({
  providedIn: 'root',
})
export class ApiModelsService {
  constructor(private _http: HttpClient) {}

  getAllModels() {
    return this._http.get<modelsType[]>('http://localhost:3333/api/models');
  }

  getModelById(id: string) {
    return this._http.get<modelsType>(`http://localhost:3333/api/models/${id}`);
  }

  deleteModel(id: string) {
    return this._http.delete(`http://localhost:3333/api/models/${id}`);
  }

  addModel(model: modelsType) {
    return this._http.post('http://localhost:3333/api/models', model);
  }
}
