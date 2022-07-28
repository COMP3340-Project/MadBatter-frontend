import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { Adminservice } from 'src/app/services/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-createproduct',
  templateUrl: './createproduct.component.html',
  styleUrls: ['./createproduct.component.css']
})
export class CreateproductComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<CreateproductComponent>,
    private adminservice : Adminservice
  ) { }

  Form!: FormGroup;

  ngOnInit(): void {
    this.Form = this.formBuilder.group({
      productname: ['',Validators.required],
      productdesc: ['',Validators.required],
      categoryname: ['', Validators.required],
      productprice: ['', Validators.required]
    });

    this.productcatlist = this.adminservice.productcategory()

  }

  productcatlist:any =[]

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



    // Find category Id from category Name 

    const index = this.productcatlist.findIndex(((x: { category_name: any; }) => x.category_name == this.f.categoryname.value));

    console.log(this.productcatlist[index].category_id)

    
    
    // Sending POST request throught Admin Service 
    if(this.f.productname.valid   )

      this.adminservice.createProducts(this.f.productname.value , this.f.productdesc.value , this.productcatlist[index].category_id,this.f.productprice.value )
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
