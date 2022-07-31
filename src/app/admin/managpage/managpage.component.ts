import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-managpage',
  templateUrl: './managpage.component.html',
  styleUrls: ['./managpage.component.css']
})
export class ManagpageComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  logout(){
    this.router.navigate(["/"]);
  }
}
