import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ApiModelsService,
  modelsType,
} from '../../services/api-models.service';
import { HttpClientModule } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { registerLocaleData } from '@angular/common';
import frenchLocale from '@angular/common/locales/fr';
import { LOCALE_ID } from '@angular/core';
import { Router } from '@angular/router';
registerLocaleData(frenchLocale);

@Component({
  selector: 'app-details-model',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [ApiModelsService, { provide: LOCALE_ID, useValue: 'fr' }],
  templateUrl: './details-model.component.html',
  styleUrl: './details-model.component.scss',
})
export class DetailsModelComponent implements OnChanges, OnDestroy {
  constructor(private apiService: ApiModelsService, private router: Router) {}
  @Input() idModel: any;
  detailsModel?: modelsType;
  modelSubscribtion!: Subscription;

  ngOnChanges(): void {
    this.modelSubscribtion = this.apiService
      .getModelById(this.idModel)
      .subscribe((data) => {
        this.detailsModel = data;
      });
  }

  ngOnDestroy(): void {
    this.modelSubscribtion.unsubscribe();
  }

  deleteModel() {
    this.apiService.deleteModel(this.idModel).subscribe(() => {
      this.apiService.getAllModels().subscribe((data) => {
        this.router.navigate([`models/${data[0].id}`]).then(() => {
          window.location.reload();
        });
      });
    });
  }
}
