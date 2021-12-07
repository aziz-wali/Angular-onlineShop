import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { SingleComponent } from './single/single.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    {path:'products',component:ProductsComponent},
    {path:'register',component:RegisterComponent},
    {path:'single/:id',component:SingleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }