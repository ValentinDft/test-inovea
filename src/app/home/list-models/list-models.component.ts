import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ApiModelsService,
  modelsType,
} from '../../services/api-models.service';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import frenchLocale from '@angular/common/locales/fr';
import { LOCALE_ID } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
registerLocaleData(frenchLocale);

@Component({
  selector: 'app-list-models',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [ApiModelsService, { provide: LOCALE_ID, useValue: 'fr' }],
  templateUrl: './list-models.component.html',
  styleUrl: './list-models.component.scss',
})
export class ListModelsComponent implements OnInit, OnDestroy {
  constructor(private apiService: ApiModelsService, private router: Router) {}

  listModels: modelsType[] = [];
  modelsSubscribtion!: Subscription;

  ngOnInit(): void {
    this.modelsSubscribtion = this.apiService
      .getAllModels()
      .subscribe((data) => {
        this.listModels = data;
      });
  }

  ngOnDestroy(): void {
    this.modelsSubscribtion.unsubscribe();
  }

  openDetails(id: string) {
    this.router.navigate([`models/${id}`]);
  }
}
