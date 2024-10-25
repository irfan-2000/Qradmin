import { Component } from '@angular/core';
import { TableOrdersService } from '../table-orders.service';
import { response } from 'express';
import { stringify } from 'querystring';

@Component({
  selector: 'app-tablestatus',
  templateUrl: './tablestatus.component.html',
  styleUrl: './tablestatus.component.css'
})
export class TablestatusComponent {
  message: string = '';
  Orderstatus :{[key:string]:string} = {};
  Orderexist:any= false;
  CurrentTable:Number= 0;
  Tables:Number = 0;
  arr = [1, 2, 3, 4,12];

  constructor(private tabledata:TableOrdersService)  
  {
    let Status = this.arr.forEach((value:any) =>
    {
      this.CheckOrder(value);
    });
    console.log("Loop tables",Status);
  
      
  }


  onTableClick(tableNumber: number): void 
  { 
    this.CurrentTable =tableNumber;
   
    this.message = `Clicked on Box ${tableNumber}`;
  }
  

OrderedItems:any=[];

  gettableorder(tableNumber:any)
{
  
  this.tabledata.getOrderedItems(tableNumber).subscribe((response:any)=>{
    if(response === "" || response === null || response.length === 0)
    {
      
      this.Orderexist = true;
    }


    this.OrderedItems = response;
    console.log(response);
    this.OrderedItems.forEach((order:any) => {
      this.fetchOrderStatus(order.orderID);
    });
  });
}

fetchOrderStatus(orderId: string) 
{
  this.tabledata.getOrderStatus(orderId).subscribe((response: string) =>
     {
    this.Orderstatus[orderId] = response;  // Store the status keyed by order ID
    console.log(`Order Status for ${orderId}:`, response);
    
  }, (error:any) => {
    console.error('Error fetching order status:', error);
    this.Orderstatus[orderId] = 'Error fetching status';  // Handle errors gracefully
  });
}


acceptOrder(Orderid: string,purpose:string): void
 {
this.tabledata.acceptOrder(Orderid,purpose).subscribe((response:any)=>{
  if(purpose == 'accept')
  {
 
    this.Orderstatus[Orderid] = 'Order Accepted and Preparing'; 
  }else if(purpose == 'reject')
  {
    this.Orderstatus[Orderid] = 'Order Rejected(Respective amount will be refuned)'
  }else{
    this.Orderstatus[Orderid] = 'Served Enjoy Your Meal';
  }
  
 
console.log("the order accept",response);

});  
}

Cleartable()
{
this.tabledata.Cleartable(this.CurrentTable).subscribe((response)=>{
  this.OrderedItems=[];
  this.OnClearStyles(String(this.CurrentTable));
  console.log("the response of clear",response);
});

}



CheckOrder(tablenumber:any)
{
  
  this.tabledata.CheckOrder(tablenumber).subscribe((response:any)=>{
    console.log("response",response);
    let Status = response ;
    
    if(Status.status === true )
    {
     this.OnBoookStyles(tablenumber);
      console.log("Orderfor ",tablenumber,Status);
    
    }else{
      console.log("false");
    }
    return Status;
 });



}




OnBoookStyles(tablenumber:string) {
  document.getElementById(tablenumber)!.style.color = 'red'; // Change text color to red
  document.getElementById(tablenumber)!.style.background = 'rebeccapurple'; // Change background color
}





OnClearStyles(tablenumber:string) {
  document.getElementById(tablenumber)!.style.color = '#333'; // Change text color to red
  document.getElementById(tablenumber)!.style.background = '#ffffff'; // Change background color
}





}
