import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Adminservice } from 'src/app/services/admin.service';

import { Router } from "@angular/router";
import Swal from 'sweetalert2';
import { find } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  dialogRef: any;
  constructor(
    private adminservice: Adminservice,
    private router: Router,
    private formBuilder: FormBuilder,) { }

    user_email!: string;
    user_password!: string;

  find:any 

  Form!: FormGroup;

  ngOnInit(): void {
    this.Form = this.formBuilder.group({
      useremail: ['',Validators.required],
      userpswd: ['',Validators.required],
      
    });

   

  }



  get f() { return this.Form.controls; }

  Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })


  test:string = ''

  login() {
    this.find = this.adminservice.find(this.f.useremail.value ,this.f.userpswd.value)

    console.log(this.find)


    if(this.find == 'admin'){
      console.log("test")
    }

  }

  cancel() {
    this.Form.reset();
    this.router.navigate([""]);

  }


}
