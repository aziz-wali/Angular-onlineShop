import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../auth.service'
import {User} from '../user'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
user: User=new User();

  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  constructor(private authService:AuthService,private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {

    const formData = new  FormData();
    formData.append('user',JSON.stringify(this.user));
    this.authService.register(formData).subscribe(
      
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.router.navigate(['/products']);
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
      
    );


  }

}
