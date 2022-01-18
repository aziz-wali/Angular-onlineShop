import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User=new User();
  constructor(private Router:RouterModule,private authService: AuthService) { }

  ngOnInit(): void {
  }
  onSubmit(): void {

    const formData = new  FormData();
    formData.append('user',JSON.stringify(this.user));
    this.authService.login(formData).subscribe(
      
      data => {
        console.log(data);
        
        //this.router.navigate(['/products']);
      }
      
    );

    
  }

}
