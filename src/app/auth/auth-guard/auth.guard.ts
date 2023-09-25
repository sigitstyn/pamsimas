import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private storage: Storage,
    private router: Router
  ) {}

  async canActivate() {
    const isLoggedIn = await this.storage.get('isLoggedIn');
    if (isLoggedIn) {
      return true;
    } else {
      this.router.navigate(['/welcome']);
      return false;
    }
  }

}
