import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListModelsComponent } from './list-models/list-models.component';
import { ActivatedRoute } from '@angular/router';
import { DetailsModelComponent } from './details-model/details-model.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ListModelsComponent, DetailsModelComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  idModel!: string | null;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.idModel = params.get('id');
    });
  }
}
