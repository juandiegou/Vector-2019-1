import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  //user model to make the register
  user: UserModel = {
    id: null,
    realm: null,
    username: null,
    email: null,
    password: null,
    rol: 3,
    fname: null,
    sname: null,
    flname: null,
    sclname: null,
    country: null,
    phone: null,
    education: null,
    especialization: null,
    articles: [],
    user: null
  };

  ngOnInit() {
  }

  /**
   * This function call the user service to register a new user.
   */
  register() {
    this.userService.registerUser(this.user).subscribe(item => {
      this.router.navigate(['/user/login']);
      console.log(item);
    });
  }

}
