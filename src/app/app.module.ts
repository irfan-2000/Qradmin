import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http' 
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablestatusComponent } from './tablestatus/tablestatus.component';
import { TableOrdersService } from './table-orders.service';
import { MenuDishesComponent } from './menu-dishes/menu-dishes.component';
@NgModule({
  declarations: [
    AppComponent,
    TablestatusComponent,
    MenuDishesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
