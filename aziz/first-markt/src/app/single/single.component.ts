import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import{ProducService} from'../produc.service';
@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {
data="";
product:Product;
  constructor(private router:ActivatedRoute,private productService:ProducService) { }

  ngOnInit(): void {
    this.data=this.router.snapshot.params.id;
    const id = this.router.snapshot.params.id;;
    this.productService.getProduct(id).subscribe(data => {
      this.product = data;
      console.log(this.product)
  })
  

}
}

