import { Component, OnInit } from '@angular/core';
import { Adminservice } from 'src/app/services/admin.service';

@Component({
  selector: 'app-categoryrecord',
  templateUrl: './categoryrecord.component.html',
  styleUrls: ['./categoryrecord.component.css']
})
export class CategoryrecordComponent implements OnInit {

  constructor(
    private adminservice: Adminservice
  ) { }

  catgs:any =[]

  ngOnInit(): void {
    this.catgs.length = 0 
    this.catgs = this.adminservice.productcategory()
  }

  openadd(){


  }

  opendelete(){

  }

  refresh(){
    this.catgs.length = 0 
    this.catgs = this.adminservice.productcategory()
  }

}
