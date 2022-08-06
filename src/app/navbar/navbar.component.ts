import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Adminservice } from '../services/admin.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private adminservice: Adminservice,
    private router: Router
  ) { }

  catgs:any =[]

  ngOnInit(): void {
    this.catgs.length = 0 
    this.catgs = this.adminservice.productcategory()
  }


  routecat(catid:number,catname:string){
    console.log(catid)
    const test = "?id:"
    this.router.navigateByUrl(`/category?id=${catid}&catname=${catname}`);
  }

}
