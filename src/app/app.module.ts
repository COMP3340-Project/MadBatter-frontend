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


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ManagpageComponent,
    HomepageComponent,
    ProductrecordComponent,
    CategoryrecordComponent,
    UserrecordComponent,
  
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: HomepageComponent},
      {path: 'admin/management', component: ManagpageComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
