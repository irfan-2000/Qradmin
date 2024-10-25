import { Component } from '@angular/core';
import { TableOrdersService } from '../table-orders.service';
import { FormsModule } from '@angular/forms';
import { Console } from 'console';
import { ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-menu-dishes',
  templateUrl: './menu-dishes.component.html',
  styleUrl: './menu-dishes.component.css'
})
export class MenuDishesComponent 
{
 
constructor(private tabledata:TableOrdersService,private cdr:ChangeDetectorRef){

  this.getDishes();


}

// Method to retrieve the dishes data
Dishes :any= [];
menuItems:any =[]; 
menuList =[];
selectedMenu: string = ''; // Initialize it as an empty string
selectedDishes :any[]= []
getDishes():Promise<any[]>
{
return new Promise((resolve,reject)=>{
  this.tabledata.getmenuDishes().subscribe((response:any)=>{
    const data = response as { dishes:any[]; menus:any[]};
    this.Dishes = data.dishes;
    this.menuItems = data.menus;
    console.log("The got items are", this.Dishes, this.menuItems); // Log the items
    this.FilterMenuList();

  resolve(this.Dishes);

  },(error)=>{
    console.error("Error fetching dishes",error);
    reject(error);
  })
})
}


log() {
  console.log("inside log", this.selectedMenu);

  // Ensure menuList has items
  if (this.menuList.length > 0) {
    // Set the first menu as selected
    console.log('Selected Menu:', this.selectedMenu);

    // Filter the dishes based on the selected menu
    this.selectedDishes = this.Dishes.filter((item: any) =>
      item.menuname.trim().toLowerCase() === this.selectedMenu.trim().toLowerCase()
    );

    console.log('Filtered Dishes:', this.selectedDishes);
  }
}



FilterMenuList()
 {
  
  this.menuList = this.menuItems.map((item: any) => 
    {
      return item.menuname; 
  });
  
    console.log("menu list",this.menuList);

  if (this.menuList.length > 0)
     {    
      this.selectedMenu = this.menuItems[0].menuname;
      console.log('Selected Menu:', this.selectedMenu);
      console.log('Dishes:', this.Dishes);

      this.selectedDishes = this.Dishes.filter((item: any) => {
     return item.menuname.trim().toLowerCase()   === this.selectedMenu.trim().toLocaleLowerCase();
    
  });   
  
}




}





}
