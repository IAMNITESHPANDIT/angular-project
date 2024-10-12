import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgOptimizedImage } from '@angular/common'
import { ToastModule } from 'primeng/toast';
import { ToastService } from './toast/toast.service';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-root',
  standalone: true,
  
  imports: [RouterOutlet ,NgOptimizedImage, ToastModule],
  providers: [ToastService, MessageService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  currentYear =new Date().getFullYear();
  
  
}
