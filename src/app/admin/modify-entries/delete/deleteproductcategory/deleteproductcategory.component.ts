import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Adminservice } from 'src/app/services/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-deleteproductcategory',
  templateUrl: './deleteproductcategory.component.html',
  styleUrls: ['./deleteproductcategory.component.css']
})
export class DeleteproductcategoryComponent implements OnInit {

  Form!: FormGroup;
 
  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<DeleteproductcategoryComponent>,
    private adminservice : Adminservice
    ) {
  }

  ngOnInit(): void {
    this.Form = this.formBuilder.group({
      categoryname: ['', Validators.required]
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

 if(this.f.categoryname.valid){

   this.adminservice.deleteproductcategory(this.f.categoryname.value)
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