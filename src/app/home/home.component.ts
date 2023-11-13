import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiModelsService } from '../services/api-models.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [ApiModelsService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  constructor(private apiService: ApiModelsService) {}

  ngOnInit(): void {
    this.apiService.getModels().subscribe((data) => {
      console.log(data);
    });
  }
}
