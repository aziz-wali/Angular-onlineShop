import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  product: Product = new Product();
  userFile;
  public imagePath;
  public message: string;
  imgURL: string | ArrayBuffer;
  constructor(public productService: ProductService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveProduct(){
    const formData = new  FormData();
    //this.product=this.productService.dataForm.value;
    formData.append('product',JSON.stringify(this.product));
  formData.append('file',this.userFile);
    this.productService.createProduct(formData).subscribe( data =>{
      console.log(data);
      this.productslist();
    },
    error => console.log(error));
  }
  productslist() {
    this.router.navigate(['/products']);
  }
  
  onSubmit(){
    console.log(this.product);
    this.saveProduct();
  }
  onSelectFile(event) {
    if (event.target.files.length > 0)
    {
      const file = event.target.files[0];
      this.userFile = file;
     // this.f['profile'].setValue(file);
 
    var mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
 
    var reader = new FileReader();
    
    this.imagePath = file;
    reader.readAsDataURL(file); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
    }
  }
     
      
    }
    
}
