import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss'
})
export class IntroComponent implements OnInit {

  private route = inject(ActivatedRoute);
  constructor() { };

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log("id****", id)
  }


  //provide activatedRoute in application 


}
