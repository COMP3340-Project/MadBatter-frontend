import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Adminservice } from 'src/app/services/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-deleteuser',
  templateUrl: './deleteuser.component.html',
  styleUrls: ['./deleteuser.component.css']
})
export class DeleteuserComponent implements OnInit {

  Form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<DeleteuserComponent>,
    private adminservice : Adminservice
  ) { }

  ngOnInit(): void {
    this.Form = this.formBuilder.group({
      username: ['', Validators.required],
      useremail: ['', Validators.required]
    });

  }

  get f() { return this.Form.controls; }

//Alert popup

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

save(){

  if(this.f.username.valid){
 
    this.adminservice.deleteuser(this.f.username.value,this.f.useremail.value)
    .subscribe({
      next: () => {
        this.dialogRef.close();
        
        this.Toast.fire({
          icon: 'success',
          title: 'Update Successful !!'
        });
    
      }
  });
  }
 
  this.Toast.fire({
    icon: 'error',
    title: 'Error With the Form '
  })
 
 }
 
 close() {
  this.dialogRef.close();
 }
 }

