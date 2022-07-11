import { Component, OnInit } from '@angular/core';
import { Adminservice } from 'src/app/services/admin.service';

@Component({
  selector: 'app-userrecord',
  templateUrl: './userrecord.component.html',
  styleUrls: ['./userrecord.component.css']
})
export class UserrecordComponent implements OnInit {

  constructor(
    private adminservice: Adminservice
  ) { }

  ngOnInit() {
    this.users.length = 0 
    this.users = this.adminservice.users()
  }

  users:any = []


  openadd(){


  }

  opendelete(){

  }

  refresh(){

  }

}
