import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  constructor(
    private storage: Storage,
    private navCtrl: NavController,
    private router: Router
  ) {
  }
  async ngOnInit() {
    // If using a custom driver:
    // await this.storage.defineDriver(MyCustomDriver)
    await this.storage.create();
    this.initializeApp();
  }
  initializeApp(){
    this.storage.get('isLoggedIn').then((isLoggedIn)=>{
      if(isLoggedIn === null){
       this.navCtrl.navigateRoot('/welcome');
      }else{
        const token = localStorage.getItem('token');
        const decodedToken = jwt_decode(token) as any;
        const role = decodedToken.role;
        if (role === 'admin') {
          // jika role adalah admin
          this.router.navigate(['/home']);
        } else if (role === 'pencatat') {
          // jika role adalah petugas1
          this.router.navigate(['/pencatat']);
        } else if (role === 'penarik') {
          // jika role adalah petugas2
          this.router.navigate(['/penarik']);
        } else {
          // jika role tidak sesuai, maka redirect ke halaman login
          this.router.navigate(['/welcome']);
        }
      }
    });
  }
}
