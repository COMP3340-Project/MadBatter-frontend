import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Adminservice } from 'src/app/services/admin.service';
import { CreateuserComponent } from '../../modify-entries/create/createuser/createuser.component';
import { DeleteuserComponent } from '../../modify-entries/delete/deleteuser/deleteuser.component';

@Component({
  selector: 'app-userrecord',
  templateUrl: './userrecord.component.html',
  styleUrls: ['./userrecord.component.css']
})
export class UserrecordComponent implements OnInit {

  constructor(
    private adminservice: Adminservice,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.users.length = 0 
    this.users = this.adminservice.users()
  }

  users:any = []


  openadd(){
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      id: 1,
      title: 'Add Bin Record'
  };

    const dialogOpen  = this.dialog.open(CreateuserComponent, dialogConfig);

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

    const dialogOpen = this.dialog.open(DeleteuserComponent, dialogConfig);

    dialogOpen.afterClosed().subscribe(result => {
      this.refresh()
     });
  }

  refresh(){
    this.users.length = 0 
    this.users = this.adminservice.users()
  }

}
