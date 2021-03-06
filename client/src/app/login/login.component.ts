import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { User } from '../models/User'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  public user: User;
  public password: string;

  constructor(private loginService: LoginService, private router: Router) { 
    this.user = new User()
  }
  
  ngOnInit() {
  }
  
  

  validateLogin() {
    if(this.user.username && this.user.password) {
      this.loginService.validateLogin(this.user).subscribe(result => {
      console.log('result is ', result);
      if(result['status'] != 'fail') {
        this.router.navigate(['/blogpostform']);
      } else {
        alert('Wrong username password');
      }
    }, error => {
      console.log('error is ', error);
    });
    } else {
      alert('Enter user name and password');
    }
  }
}
