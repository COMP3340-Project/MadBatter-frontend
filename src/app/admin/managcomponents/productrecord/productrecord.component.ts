import { Component, OnInit } from '@angular/core';
import { Adminservice } from 'src/app/services/admin.service';

@Component({
  selector: 'app-productrecord',
  templateUrl: './productrecord.component.html',
  styleUrls: ['./productrecord.component.css']
})
export class ProductrecordComponent implements OnInit {

  constructor(
    private adminservice: Adminservice
  ) { }

  prods:any = []

  ngOnInit(){
    this.prods.length = 0 
    this.prods = this.adminservice.products()
  }

  openadd(){


  }

  opendelete(){

  }

  refresh(){
    this.prods.length = 0 
    this.prods = this.adminservice.products()
  }


}
