import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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

  getAllModels(): Observable<modelsType[]> {
    return this._http.get<modelsType[]>('http://localhost:3333/api/models');
  }

  getModelById(id: string): Observable<modelsType> {
    return this._http.get<modelsType>(`http://localhost:3333/api/models/${id}`);
  }

  deleteModel(id: string): Observable<any> {
    return this._http.delete(`http://localhost:3333/api/models/${id}`);
  }

  addModel(model: modelsType): Observable<any> {
    return this._http.post('http://localhost:3333/api/models', model);
  }

  editModel(model: modelsType) {
    return this._http.put(
      `http://localhost:3333/api/models/${model.id}`,
      model
    );
  }
}
