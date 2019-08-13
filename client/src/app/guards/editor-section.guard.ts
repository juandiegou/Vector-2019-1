import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class EditorSectionGuard implements CanActivate {

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) { }

  canActivate() {
    if (this.userService.getUserInformation().rol != 1) {
      this.router.navigate(['/']);
      return false;
    }
    else {
      return true;
    }
  }

}
