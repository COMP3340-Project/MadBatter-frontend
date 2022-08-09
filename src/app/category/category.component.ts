import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Adminservice } from '../services/admin.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  catgs:any =[]
  constructor(
    private activeroute: ActivatedRoute,
    private adminservice: Adminservice,
    private router: Router
  ) { }

  catname:string = 'Error'
  catid: number=0;
  prods:any = []
  
  ngOnInit() {
    //gentable();
    this.activeroute.queryParams
    .subscribe(params => {
      this.catid = params.id,
      this.catname = params.catname
      this.getprod()
    });

  }

  getprod(){
    this.prods.length = 0 
    this.prods = this.adminservice.productsbycatid(this.catid)
  }

  routeprod(id:number){
    this.router.navigateByUrl(`/product?id=${id}&catid=${this.catid}`);
  }



}