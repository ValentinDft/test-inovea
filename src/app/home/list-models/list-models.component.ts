import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ApiModelsService,
  modelsType,
} from '../../services/api-models.service';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import frenchLocale from '@angular/common/locales/fr';
import { LOCALE_ID } from '@angular/core';
registerLocaleData(frenchLocale);

@Component({
  selector: 'app-list-models',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [ApiModelsService, { provide: LOCALE_ID, useValue: 'fr' }],
  templateUrl: './list-models.component.html',
  styleUrl: './list-models.component.scss',
})
export class ListModelsComponent implements OnInit {
  constructor(private apiService: ApiModelsService) {}

  listModels: modelsType[] = [];

  ngOnInit(): void {
    this.apiService.getModels().subscribe((data) => {
      this.listModels = data;
    });
  }
}
