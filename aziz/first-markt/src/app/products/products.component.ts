import { Component, OnInit } from '@angular/core';
import{ProductService} from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
products:Product[];
  constructor(private producService:ProductService) { }

  ngOnInit(): void {
    this.producService.findAll().subscribe(data => {
      this.products = data;
    });
  }

}
