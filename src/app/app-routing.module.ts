import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablestatusComponent } from './tablestatus/tablestatus.component';
import { MenuDishesComponent } from './menu-dishes/menu-dishes.component';

const routes: Routes = [
  {path:'tables',component:TablestatusComponent },
  {path:'',component:MenuDishesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
