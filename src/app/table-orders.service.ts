import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { response } from 'express';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TableOrdersService {
  private baseUrl = 'https://localhost:44368/api/Json/';

  constructor(private http:HttpClient) 
  { 
    
  }


  getOrderedItems(tableNumber:any)
  {
const params = new HttpParams()
.set('tableNumber',tableNumber);
 return this.http.get(`${this.baseUrl}getOrderedItems`,{params});
  }

  getOrderStatus(orderId: string) {
    const url = `https://localhost:44368/api/Json/Get_Order_Status?OrderId=${orderId}`;
  
    // Specify responseType as 'text' to handle plain text responses
    return this.http.get(url, { responseType: 'text' });  // Return the observable
  }


  acceptOrder(orderId: string,purpose:string) {
  const params = new HttpParams()
    .set('OrderID', orderId)
    .set('purpose', purpose);
  
  // Pass params as the second argument to the post method
  return this.http.post(`${this.baseUrl}acceptOrder`, null, { params });
}
Cleartable(CurrentTable:any)
{
  
const params = new HttpParams()
.set('tableNumber',CurrentTable);
return this.http.post(`${this.baseUrl}ClearOrder`,null,{params});
}


CheckOrder(CurrentTable:any)
{

const params = new HttpParams()
.set('tableNumber',CurrentTable);
return this.http.get(`${this.baseUrl}CheckOrder`,{params});
}



getmenuDishes(): Observable<any[]>
{ 
 
  return this.http.get<any[]>(`${this.baseUrl}GetMenuDishes`);
}

}
