import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Adminservice } from 'src/app/services/admin.service';
import { CreateproductComponent } from '../../modify-entries/create/createproduct/createproduct.component';
import { DeleteproductComponent } from '../../modify-entries/delete/deleteproduct/deleteproduct.component';

@Component({
  selector: 'app-productrecord',
  templateUrl: './productrecord.component.html',
  styleUrls: ['./productrecord.component.css']
})
export class ProductrecordComponent implements OnInit {

  constructor(
    private adminservice: Adminservice,
    private dialog: MatDialog
  ) { }

  prods:any = []

  ngOnInit(){
    this.prods.length = 0 
    this.prods = this.adminservice.products()
  }

  openadd(){
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      id: 1,
      title: 'Add Bin Record'
  };

    const dialogOpen  = this.dialog.open(CreateproductComponent, dialogConfig);

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

    const dialogOpen = this.dialog.open(DeleteproductComponent, dialogConfig);

    dialogOpen.afterClosed().subscribe(result => {
      this.refresh()
     });
  }

  refresh(){
    this.prods.length = 0 
    this.prods = this.adminservice.products()
  }


}
