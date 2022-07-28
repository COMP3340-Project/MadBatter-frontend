import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { throwIfEmpty } from 'rxjs';
import { Adminservice } from '../services/admin.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  constructor(
    private activeroute: ActivatedRoute,
    private adminservice: Adminservice
  ) { }

  id: number=0;
  catid:number=0;

  productdetails:any = []

  ngOnInit(): void {

    this.activeroute.queryParams
    .subscribe(params => {
      this.id = params.id,
      this.catid = params.catid
    });

    this.productdetails = this.adminservice.productdetails(this.id,this.catid)

    console.log(this.productdetails)


  }





}
