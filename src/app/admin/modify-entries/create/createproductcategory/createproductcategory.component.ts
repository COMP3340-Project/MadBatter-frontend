import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Adminservice } from 'src/app/services/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-createproductcategory',
  templateUrl: './createproductcategory.component.html',
  styleUrls: ['./createproductcategory.component.css']
})
export class CreateproductcategoryComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<CreateproductcategoryComponent>,
    private adminservice : Adminservice
  ) { }

  Form!: FormGroup;


  ngOnInit(): void {
    this.Form = this.formBuilder.group({
      categoryname: ['', Validators.required]
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
    if(this.f.categoryname.valid   )

      this.adminservice.createProductCategory(this.f.categoryname.value )
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
