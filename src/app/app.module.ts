import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { AdminComponent } from './admin/admin.component';
import { UserService } from './user.service'


const appRoutes: Routes = [
  { path: '', component: FormComponent },
  { path: 'admin', component: AdminComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
