import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsModelComponent } from './home/details-model/details-model.component';
import { ListModelsComponent } from './home/list-models/list-models.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'models/:id',
    component: HomeComponent,
  },
  { path: '**', redirectTo: '' },
];
