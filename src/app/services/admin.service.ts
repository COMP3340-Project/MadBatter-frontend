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

  productdetailslist: string[] = [];

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

  createProducts(product_name:string,product_description:string,category_id:string,product_price:string){
    
    const postData = {
      product_name: product_name,
      product_description: product_description,
      category_id:parseInt(category_id),
      product_price:parseInt(product_price)
  };

  return this.http.post<any>(`${environment.apiUrl}/api/v1/products/add`, postData)
  
}

deleteproduct(productname:string,categoryid:number){
  const postData = {
    product_name: productname,
    category_id: categoryid
};

return this.http.post<any>(`${environment.apiUrl}/api/v1/products/delete`, postData)
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

  createProductCategory(categoryname:string){
    
    const postData = {
      category_name: categoryname
  };

  return this.http.post<any>(`${environment.apiUrl}/api/v1/productcategory/add`, postData)

  }

  deleteproductcategory(categoryname:string){
    const postData = {
      category_name: categoryname
  };

  return this.http.post<any>(`${environment.apiUrl}/api/v1/productcategory/delete`, postData)
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

  createUser(username:string, useremail:string, userpassword: string, userphone:string, useraddress:string){

    const postData = {
      user_name: username,
      user_email: useremail ,
      user_password: userpassword,
      user_phone: userphone,
      user_address: useraddress
    };

  return this.http.post<any>(`${environment.apiUrl}/api/v1/users/add`, postData)

  }

  deleteuser(username:string, useremail:TemplateStringsArray){

    const postData = {
      user_name: username,
      user_email: useremail 
    };

  return this.http.post<any>(`${environment.apiUrl}/api/v1/users/delete`, postData)

  }



  productdetails(product_id: number,category_id: number){
    
    this.productdetailslist.length = 0;
    this.http.get<any>(`${environment.apiUrl}/api/v1/products/details`, {
      params: {
        product_id: `${product_id}`,
        category_id: `${category_id}`
      }}).subscribe({
        next: data => {
          for(let key in data)
                if(data.hasOwnProperty(key))
                    this.productdetailslist.push(data[key]);
      
           // this.allproducts = data;
        }}),
        

    console.log(this.productdetailslist)
    return this.productdetailslist;
}


}

