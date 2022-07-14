import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Adminservice } from 'src/app/services/admin.service';
import { CreateproductcategoryComponent } from '../../modify-entries/create/createproductcategory/createproductcategory.component';
import { DeleteproductcategoryComponent } from '../../modify-entries/delete/deleteproductcategory/deleteproductcategory.component';

@Component({
  selector: 'app-categoryrecord',
  templateUrl: './categoryrecord.component.html',
  styleUrls: ['./categoryrecord.component.css']
})
export class CategoryrecordComponent implements OnInit {

  constructor(
    private adminservice: Adminservice,
    private dialog: MatDialog
  ) { }

  catgs:any =[]

  ngOnInit(): void {
    this.catgs.length = 0 
    this.catgs = this.adminservice.productcategory()
  }

  openadd(){
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      id: 1,
      title: 'Add Bin Record'
  };

    const dialogOpen  = this.dialog.open(CreateproductcategoryComponent, dialogConfig);

    dialogOpen.afterClosed().subscribe(result => {
      this.refresh()
     });


  }

  opendelete(){
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      id: 1,
      title: 'Add Bin Record'
  };

    const dialogOpen = this.dialog.open(DeleteproductcategoryComponent, dialogConfig);

    dialogOpen.afterClosed().subscribe(result => {
      this.refresh()
     });
  }

  refresh(){
    this.catgs.length = 0 
    this.catgs = this.adminservice.productcategory()
  }

}
