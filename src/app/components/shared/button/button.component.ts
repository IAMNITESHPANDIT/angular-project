import { CommonModule } from '@angular/common';

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button', 
  standalone: true,
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  imports: [CommonModule],
})
export class ButtonComponent {

  @Input() label: string = 'button';

  @Input() type: string = 'button';

  @Input() className: string = 'btn btn-secondary'; 

  @Input() id?: string;

  @Input() disable?: boolean = false;

  clicked = false;

  @Output() buttonClick = new EventEmitter<void>();

  onClick(): void {
    this.clicked = !this.clicked;
    this.buttonClick.emit();
  }
}
