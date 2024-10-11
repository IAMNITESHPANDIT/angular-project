import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  title = 'Nitesh';

  private router  = inject(Router);

  constructor(
    // private router: Router
  ){}

  changeTitle(str:string):void{
    this.title = str;
  }

  navigation(str:string):void{
    this.router.navigate([str]);
  }

}

