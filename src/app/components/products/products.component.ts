import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public prodObservable: Observable<any[]> = new Observable();

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.prodObservable = this.productService.getProducts();
  }

}
