import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Adminservice } from 'src/app/services/admin.service';

import { Router } from "@angular/router";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignUpComponent implements OnInit {
  dialogRef: any;
  constructor(
    private adminservice : Adminservice, 
    private router: Router) {}

  signupForm!: FormGroup;

  ngOnInit(): void {
    this.signupForm = this.createFormGroup();
  }
  createFormGroup(): FormGroup {
    return new FormGroup({
      username: new FormControl("", [Validators.required, Validators.minLength(2)]),
      useremail: new FormControl("", [Validators.required, Validators.email]),
      userpswd: new FormControl("", [
        Validators.required,
        Validators.minLength(7),
      ]),
    });
  }

  get f() { return this.signupForm.controls; }

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
  

  signup(){
      
    // Sending POST request through Admin Service 
    if(this.f.username.valid &&  this.f.useremail.valid &&  this.f.userpswd.valid &&  this.f.userphone.valid &&  this.f.useradd.valid )

      this.adminservice.createUser(this.f.username.value, this.f.useremail.value, this.f.userpswd.value,  this.f.userphone.value,  this.f.useradd.value)
      .subscribe({
        next: () => {
          this.dialogRef.close();
          
          this.Toast.fire({
            icon: 'success',
            title: ' Account created !!'
          });
      
        }
    });

      this.Toast.fire({
        icon: 'error',
        title: 'UnSuccessful :('
      })

  }

  cancel(){
    this.signupForm.reset();
    this.router.navigate([""]);
    
  }
  

}
