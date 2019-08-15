import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  email: string = "";
  
  password: string = "";

  ngOnInit() {
  }

  onLoginBtnClick(): void {
    this.userService.loginUser(this.email, this.password).subscribe(item => {
      console.log(item.user);
      this.userService.saveToken(item.id);
      this.userService.saveUserInformation(item.user);
      this.userService.savePassword(this.password);
      this.userService.saveId(item.user.id);
      this.router.navigate(['/author/home']);
    })
  }

}
