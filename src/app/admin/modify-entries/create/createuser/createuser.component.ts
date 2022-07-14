import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Adminservice } from 'src/app/services/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<CreateuserComponent>,
    private adminservice : Adminservice
  ) { }

  Form!: FormGroup;

  ngOnInit(): void {

    this.Form = this.formBuilder.group({
      username: ['',Validators.required],
      useremail: ['',Validators.required],
      userpswd: ['', Validators.required],
      userphone: ['', Validators.required],
      useradd: ['', Validators.required]
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

  save(){
    
    
    // Sending POST request throught Admin Service 
    if(this.f.username.valid &&  this.f.useremail.valid &&  this.f.userpswd.valid &&  this.f.userphone.valid &&  this.f.useradd.valid )

      this.adminservice.createUser(this.f.username.value, this.f.useremail.value, this.f.userpswd.value,  this.f.userphone.value,  this.f.useradd.value)
      .subscribe({
        next: () => {
          this.dialogRef.close();
          
          this.Toast.fire({
            icon: 'success',
            title: 'Update Successful !!'
          });
      
        }
    });

      this.Toast.fire({
        icon: 'error',
        title: 'UnSuccessful :('
      })
    


}
close() {
  this.dialogRef.close();
}

}

