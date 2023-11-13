import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from '../form/form.component';
import { FilterPipePipe } from '../pipe/filter-pipe.pipe';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [CommonModule, FormComponent, FilterPipePipe],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss',
})
export class TopbarComponent {
  search: string = '';
}
