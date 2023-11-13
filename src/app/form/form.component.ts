import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';
import { ApiModelsService, modelsType } from '../services/api-models.service';
import { HttpClientModule } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  providers: [ApiModelsService],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent implements OnInit, OnDestroy {
  constructor(
    private frombuilder: FormBuilder,
    private apiService: ApiModelsService,
    private router: Router
  ) {}

  modelForm!: FormGroup;
  addSubscribtion!: Subscription;

  ngOnInit(): void {
    this.initModelForm();
  }

  ngOnDestroy(): void {
    if (this.addSubscribtion) {
      this.addSubscribtion.unsubscribe();
    }
  }

  initModelForm(): void {
    this.modelForm = this.frombuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      author: ['', [Validators.required, Validators.minLength(2)]],
      polygons: ['', [Validators.required, Validators.min(10)]],
      fileName: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  submitForm() {
    if (this.modelForm.valid) {
      this.modelForm.value.id = uuidv4();
      this.modelForm.value.date = new Date().toISOString();
      this.addSubscribtion = this.apiService
        .addModel(this.modelForm.value)
        .subscribe((res): any => {
          this.router.navigate([`models/${res.id}`]).then(() => {
            window.location.reload();
          });
        });
    }
  }
}
