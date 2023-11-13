import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListModelsComponent } from './list-models/list-models.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ListModelsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
