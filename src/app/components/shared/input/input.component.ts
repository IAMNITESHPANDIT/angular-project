import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AbstractControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-field',
  standalone: true,
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  imports: [CommonModule, ReactiveFormsModule]
})
export class InputFieldComponent {
  @Input() label?: string; 
  @Input() placeholder: string = ''; 
  @Input() name: string = 'dev'; 
  @Input() type: string = 'text';
  @Input() className: string = 'form-control'; 
  @Input() control!: AbstractControl | null |any; 
  @Input() errorMessages: { [key: string]: string } = {};  

  get hasError(): any {
    return this.control?.invalid && this.control.touched;  
  }

  get inputClasses() {
    return {
      'is-invalid': this.hasError,
      [this.className]: true
    };
  }

  get errorMessage(): string | null {
    if (this.control?.errors) { 
      for (const error in this.control.errors) {
        if (this.errorMessages[error]) {
          return this.errorMessages[error];
        }
      }
    }
    return null;
  }
}
