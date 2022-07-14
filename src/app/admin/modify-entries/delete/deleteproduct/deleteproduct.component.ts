import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Adminservice } from 'src/app/services/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-deleteproduct',
  templateUrl: './deleteproduct.component.html',
  styleUrls: ['./deleteproduct.component.css']
})
export class DeleteproductComponent implements OnInit {

  Form!: FormGroup;
 
  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<DeleteproductComponent>,
    private adminservice : Adminservice
    ) {
  }

  ngOnInit(): void {
    this.Form = this.formBuilder.group({
      productname: ['', Validators.required],
      categoryname: ['', Validators.required]
    });

    this.productcatlist = this.adminservice.productcategory()
  }

  productcatlist:any =[]

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

   // Find category Id from category Name 

   const index = this.productcatlist.findIndex(((x: { category_name: any; }) => x.category_name == this.f.categoryname.value));

  if(this.f.productname.valid){

    this.adminservice.deleteproduct(this.f.productname.value, this.productcatlist[index].category_id)
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