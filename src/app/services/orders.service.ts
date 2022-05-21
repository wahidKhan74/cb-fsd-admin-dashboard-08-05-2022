import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  
  constructor(private httpClient: HttpClient) { }

  getOrders() {
    return this.httpClient.get<any[]>("./../../assets/json/orders.json");
  }
}
