import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Adminservice } from '../services/admin.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(
    private adminservice: Adminservice,
    private router: Router,
    private http: HttpClient
  ) { }

  theme:string = ''

  ngOnInit(): void {


    this.http.get<any>(`${environment.apiUrl}/api/v1/theme`).subscribe((data: any) => {
      console.log(data[0].themecolor);
      this.theme =data[0].themecolor;
  
})

  if(this.theme == ''){
    this.theme = "#e3f2fd"
  }

  }

}
