import { Component } from '@angular/core';
import { ButtonComponent } from '../shared/button/button.component';
import { InputFieldComponent } from '../shared/input/input.component';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ButtonComponent , InputFieldComponent , CommonModule, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  form!: FormGroup;

  onRegister(value:any):void{
    console.log(value);
    // TODO: Implement API call to register user
  }
}
