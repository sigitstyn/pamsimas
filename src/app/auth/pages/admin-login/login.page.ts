/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth-services/auth.service';
import { LoadingController, AlertController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Users, UsersService } from '../../../services/users.service';
import { Storage } from '@ionic/storage-angular';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  users: Users[];
  username: string; // tambahkan variabel username di sini

  constructor(
    private authService: AuthService,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private router: Router,
    private storage: Storage,
    private userService: UsersService // tambahkan UsersService
  ) { }

  ngOnInit() {
    // panggil fungsi getUsers() untuk mengambil data pengguna dari server
    this.authService.getUserData().subscribe(
      data => {
        this.users = data;
        const token = localStorage.getItem('token');
        const decodedToken = jwt_decode(token) as any;
        const user_id = decodedToken.user_id;
        const user = this.users.find(u => u.id === user_id);
        this.username = user.firstname + ' ' + user.lastname;
      },
      err => console.log(err)
    );
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

  openRegistrasi(){
    this.router.navigate(['/register']);
  }

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
        const alert = await this.alertCtrl.create({ message: 'Login Failed', buttons: ['OK'] });
        await alert.present();
        loading.dismiss();
      }
    );
  }
}
