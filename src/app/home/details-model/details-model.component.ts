import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details-model',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details-model.component.html',
  styleUrl: './details-model.component.scss',
})
export class DetailsModelComponent {
  @Input() idModel: any;
}
