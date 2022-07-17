import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ManagpageComponent } from '../app/admin/managpage/managpage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductrecordComponent } from './admin/managcomponents/productrecord/productrecord.component';
import { CategoryrecordComponent } from './admin/managcomponents/categoryrecord/categoryrecord.component';
import { UserrecordComponent } from './admin/managcomponents/userrecord/userrecord.component';
import { Adminservice } from './services/admin.service';
import { HttpClientModule } from '@angular/common/http';
import { CreateproductComponent } from './admin/modify-entries/create/createproduct/createproduct.component';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateproductcategoryComponent } from './admin/modify-entries/create/createproductcategory/createproductcategory.component';
import { CreateuserComponent } from './admin/modify-entries/create/createuser/createuser.component';
import { DeleteproductComponent } from './admin/modify-entries/delete/deleteproduct/deleteproduct.component';
import { DeleteproductcategoryComponent } from './admin/modify-entries/delete/deleteproductcategory/deleteproductcategory.component';
import { DeleteuserComponent } from './admin/modify-entries/delete/deleteuser/deleteuser.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './signup/signup.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ProductPageComponent } from './product-page/product-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ManagpageComponent,
    HomepageComponent,
    ProductrecordComponent,
    CategoryrecordComponent,
    UserrecordComponent,
    CreateproductComponent,
    CreateproductcategoryComponent,
    CreateuserComponent,
    DeleteproductComponent,
    DeleteproductcategoryComponent,
    DeleteuserComponent,
    LoginComponent,
    SignUpComponent,
    ProductPageComponent
  ],
  imports: [
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: HomepageComponent},
      {path: 'admin/management', component: ManagpageComponent},
      {path: 'login', component: LoginComponent},
      {path: 'signup', component: SignUpComponent},
    ]),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
