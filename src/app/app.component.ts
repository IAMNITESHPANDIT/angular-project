import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Nitesh';
  
  constructor(){}

  changeTitle(str:string):void{
    this.title = str;
  }

  // ngOnInit(): void {
  // }

  
}
