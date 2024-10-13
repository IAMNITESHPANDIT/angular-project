import { Component } from '@angular/core';
import { ButtonComponent } from '../shared/button/button.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputFieldComponent } from '../shared/input/input.component';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../service/api.service';
import { ToastService } from '../../utils/toast/toast.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ButtonComponent , InputFieldComponent , CommonModule, ReactiveFormsModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  form!: FormGroup;
  response:any;

  constructor(
    private fb: FormBuilder, 
    private apiService:ApiService,
    private toastService:ToastService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]], 
      password: ['', [Validators.required, Validators.minLength(6)]], 
    });
  }

  async onSubmit({email, password}:any): Promise<void> {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      try {
        this.response = await this.apiService.post('/auth/login',{email,password});
        this.toastService.showSuccess(this.response?.message);
        console.log(this.response);
      } catch (error:any) {
        this.toastService.showError(error.error);
        console.error('Error fetching data: ', error);
      }
    }
  }

}
