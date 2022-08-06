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

function gentable(){
  var prods=10; //get how many products are in the category
  var htmlTxt="<table>\n";
  var tempP=0;
  var rows;
  if(prods%3==0) rows=prods/3;
  else rows= Math.floor(prods/3)+1;

  for(var i=0; i<rows; i++){
    htmlTxt+="<tr>\n";
    for(var j=0; j<3 && j<prods; j++){
      if(tempP<prods){
        htmlTxt+="<td>\n";
        htmlTxt+="<div class='card'>\n";
          htmlTxt+="<img src='../../assets/img1.png'>\n"; // Needs to get the tempP th product image in the category
          htmlTxt+="<div class='container'\n>";
            htmlTxt+="<p>Product Name <button id='"+i+"-btn'>Order Now</button</p>"; // Needs to get the tempP th product name in the category
          htmlTxt+="</div>\n</div>\n</td>";
        tempP++;
      }
    }
    htmlTxt+="</tr>";
  }
  htmlTxt+="</table>";
  const x = document.getElementById("table")! as HTMLElement;
  x.innerHTML=htmlTxt;
}
