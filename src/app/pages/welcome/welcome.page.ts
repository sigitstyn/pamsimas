/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/auth/auth-services/auth.service';
import { Storage } from '@ionic/storage-angular';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit{
  subscribe: any;
  platform: any;
  constructor(private authService: AuthService,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private router: Router,
    private storage: Storage,) {

    }
async ngOnInit()  {

}
    ionViewDidEnter(){
      this.storage.get('isLoggedIn').then((res)=> {
        console.log(res);
      });
    }

    form = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
    });
  async onSubmit() {
    const loading = await this.loadingCtrl.create({ message: 'Logging in ...' });
    await loading.present();

    this.authService.login(this.form.value).subscribe(
      async token => {
        localStorage.setItem('token', token);
        loading.dismiss();
        this.storage.set('isLoggedIn', true);
        this.router.navigateByUrl('/home');
      },
      async () => {
        const alert = await this.alertCtrl.create({
          header: 'Gagal Masuk !',
          message: 'Silahkan Coba Lagi',
          buttons: ['OK'] });
        await alert.present();
        loading.dismiss();
      }
    );
  }
}
