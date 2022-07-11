import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Adminservice {

  allproducts : string[] = [];
  allproductcategory : string[] = [];
  allusers : string[] = [];
  errorMessage: any;
  

  constructor(
      private http: HttpClient, 
  
      ) {
  }



  products(){
    
    this.allproducts.length = 0;
    this.http.get<any>(`${environment.apiUrl}/api/v1/products`).subscribe({
        next: data => {
          for(let key in data)
                if(data.hasOwnProperty(key))
                    this.allproducts.push(data[key]);
      
           // this.allproducts = data;
        },
        error: error => {
            this.errorMessage = error.message;
            console.error('There was an error!', error);
        }
    })


    console.log(this.allproducts)
    return this.allproducts;
  }

  productcategory(){
    this.allproductcategory.length = 0;
    this.http.get<any>(`${environment.apiUrl}/api/v1/productcategory`).subscribe({
        next: data => {
          for(let key in data)
                if(data.hasOwnProperty(key))
                    this.allproductcategory.push(data[key]);
      
           // this.allproducts = data;
        },
        error: error => {
            this.errorMessage = error.message;
            console.error('There was an error!', error);
        }
    })


    console.log(this.allproductcategory)
    return this.allproductcategory;
  }

  users(){
    this.allusers.length = 0;
    this.http.get<any>(`${environment.apiUrl}/api/v1/users`).subscribe({
        next: data => {
          for(let key in data)
                if(data.hasOwnProperty(key))
                    this.allusers.push(data[key]);
      
           // this.allproducts = data;
        },
        error: error => {
            this.errorMessage = error.message;
            console.error('There was an error!', error);
        }
    })


    console.log(this.allusers)
    return this.allusers;
  }


}

