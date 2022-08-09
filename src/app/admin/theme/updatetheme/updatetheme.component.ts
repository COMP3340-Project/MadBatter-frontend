import { Component, OnInit } from '@angular/core';
import { Adminservice } from 'src/app/services/admin.service';

@Component({
  selector: 'app-updatetheme',
  templateUrl: './updatetheme.component.html',
  styleUrls: ['./updatetheme.component.css']
})
export class UpdatethemeComponent implements OnInit {

  constructor(
    private adminservice : Adminservice
  ) { }

  ngOnInit(): void {
    this.refresh()

  }

  themes:any[] = []

  refresh(){
    this.themes.length = 0
    this.themes = this.adminservice.theme()
  }

  updatetheme(themename:string ){
    console.log(themename)
    this.adminservice.updatetable(themename);
    this.adminservice.updatetheme(themename);
    this.refresh()

  }


  

}
