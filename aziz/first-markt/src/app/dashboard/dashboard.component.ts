import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { User } from '../user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  product: Product = new Product();
  products:Product[];
  users:User[];
  userFile;
  div1:boolean=false;
  constructor(private productService:ProductService,private router: Router) { }

  ngOnInit(): void {
    this.productService.findAll().subscribe(data => {
      this.products = data;
    });

    this.productService.findAllUsers().subscribe(data => {
      this.users = data;
    });
}


onSubmit(){
  console.log(this.product);
  this.saveProduct();
}

saveProduct(){
  const formData = new  FormData();
  formData.append('product',JSON.stringify(this.product));
formData.append('file',this.userFile);
  this.productService.createProduct(formData).subscribe( data =>{
    console.log(data);
    this.router.navigate(['/dashboard']);;
  },
  error => console.log(error));
}


showEditForm(){
  console.log("jhjhj")
  this.div1=true;
}

hideEditForm(){
  this.div1=false;
}


onSelectFile(){}
}
