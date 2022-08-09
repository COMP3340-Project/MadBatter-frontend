import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Adminservice } from '../services/admin.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private adminservice: Adminservice,
    private router: Router,
    private http: HttpClient
  ) { }

  catgs:any =[]

  style:any = ''

  theme:string = ''

  ngOnInit(): void {
    this.catgs.length = 0 
    this.catgs = this.adminservice.productcategory()
   
    
    this.http.get<any>(`${environment.apiUrl}/api/v1/theme`).subscribe((data: any) => {
        console.log(data[0].themecolor);
        this.theme =data[0].themecolor;
    
  })

    if(this.theme == ''){
      this.theme = "#e3f2fd"
    }


  }


  routecat(catid:number,catname:string){
    console.log(catid)
    const test = "?id:"
    this.router.navigateByUrl(`/category?id=${catid}&catname=${catname}`);
  }

}
