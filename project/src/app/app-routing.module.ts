import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { Products } from './products.component';


const routes: Routes = [
  
    {path: '',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:AppComponent},
    {path:'products',component:Products},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
