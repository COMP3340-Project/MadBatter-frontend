import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Adminservice } from 'src/app/services/admin.service';

import { Router } from "@angular/router";
import Swal from 'sweetalert2';
import { find } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

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
    private formBuilder: FormBuilder,
    private http: HttpClient, ) { }

    user_email!: string;
    user_password!: string;

  

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

  find:any = []
  value:string = ''

  login() {

    this.http.get<any>(`${environment.apiUrl}/api/v1/users/find`, {
      params: {
        user_email: `${this.f.useremail.value}`,
        user_password: `${this.f.userpswd.value}`
      }}).subscribe((data: any) => {
        console.log(data[0].permission);
        if(data[0].permission == 'admin'){
          this.router.navigate(["admin/management"]);

          this.Toast.fire({
            icon: 'success',
            title: 'Successful Login 😁!'
          });


        }if(data[0].permission == 'user'){
          this.router.navigate(["/"]);

          // Add Window.localstorage
          this.Toast.fire({
            icon: 'success',
            title: 'Successful Login 😁!'
          });


        }else{
          this.Toast.fire({
            icon: 'error',
            title: 'UnSuccessful :('
          });
        }
    });

  
  }




  cancel() {
    this.Form.reset();
    this.router.navigate([""]);

  }


}
