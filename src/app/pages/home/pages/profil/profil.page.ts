import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController, IonTabs, NavController, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { AuthService } from 'src/app/auth/auth-services/auth.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {
  @ViewChild(IonTabs) tabs: IonTabs;
  selectedTab = 'home1';
  home1Color = 'black';
  home2Color = 'cadetblue';

  userProfile: any;
  firstname: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private storage: Storage,
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {

  }
  ionTabsWillChange(event) {
    this.selectedTab = event.tab;
  }
  selectTab(tab: string) {
    this.selectedTab = tab;
  }
  async tryLogout(){
    this.alertCtrl.create({
      header: 'Logout',
      message: 'Seberapa yakin kamu?',
      buttons: [{
        text: 'Yakin banget',
        handler: async () => {
          this.storage.remove('isLoggedIn');
          this.storage.remove('token');
            const toast = await this.toastCtrl.create({
              message: 'Anda berhasil Logout!',
              duration: 2000
            });
          toast.present();
          this.navCtrl.navigateRoot('/welcome');
        }
       },
       {
         text: 'Batal'
       }
      ]
     }).then(alertCrtl => alertCrtl.present());
    }
}
