import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(
    private route: Router,
    private router:ActivatedRoute
  ){}

  ngOnInit(){
    this.route.navigate(["./home"], {relativeTo : this.router })
  }
}
