import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonTabs, ModalController, NavController, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import jwt_decode from 'jwt-decode';
import { Pembayaran, PembayaranService } from 'src/app/services/pembayaran.service';
import { InvoicePage } from '../home/modals/invoice-modal/invoice.page';
import { PembayaranModalPage } from '../home/modals/pembayaran-modal/pembayaran-modal.page';
@Component({
  selector: 'app-pencatat',
  templateUrl: './pencatat.page.html',
  styleUrls: ['./pencatat.page.scss'],
})
export class PencatatPage implements OnInit {

  // eslint-disable-next-line @typescript-eslint/member-ordering
  @ViewChild(IonTabs) tabs: IonTabs;
  selectedTab = 'scan1';
  scan1Color = 'cadetblue';
  scan2Color = 'black';
  selectTabs='0';
  //search
  pembayaran: Pembayaran[];
  searchPembayaran: string;
  selectedDate: string;
  data: any[];
  username: string;
  constructor(
    private router: Router,
    private storage: Storage,
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private service: PembayaranService,
    private modalCtrl: ModalController,
  ) { }


  async ngOnInit() {
    await this.storage.create();
    this.storage.get('isLoggedIn').then((res)=> {
      console.log(res);
    });

    const token = localStorage.getItem('token');
    const decodedToken = jwt_decode(token) as any;
    const role = decodedToken.role;
    this.username = decodedToken.username;

    if (role === 'admin') {
      this.router.navigate(['/home']);
    } else if (role === 'pencatat') {
      this.router.navigate(['/pencatat']);
    } else if (role === 'penarik') {
      this.router.navigate(['/penarik']);
    } else {
      // jika role tidak dikenali, arahkan user ke halaman error atau halaman login
    }
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

    ionViewWillEnter(){
      this.getData();

      const date = new Date(this.selectedDate);
      const month = date.getMonth() + 1; // Add 1 because getMonth() returns a zero-based index
      const year = date.getFullYear();
    }

    async getData(){
      this.service.getAll().subscribe(response => {
        this.pembayaran = response;
        //console.log(response);
      });
    }
    getNomorUrut(index: number) {
      return index + 1;
    }

    async detailInvoice(pembayaran: Pembayaran) {
      this.modalCtrl.create({
        component: InvoicePage,
        componentProps: { pembayaran },
      }).then(modal => {
        modal.present();
        return modal.onDidDismiss();
      }).then(({data, role}) => {
        this.pembayaran = this.pembayaran.filter(inv => {
          if(data.id === inv.id){
            return data;
          }
          return inv;
        });
      });
    }
    async updateInv(pembayaran: Pembayaran){
      this.modalCtrl.create({
        component: PembayaranModalPage,
        componentProps: { pembayaran },
        initialBreakpoint: 0.6
      }).then(modal => {
        modal.present();
        return modal.onDidDismiss();
      }).then(({data, role}) => {
        this.pembayaran = this.pembayaran.filter(inv => {
          if(data.id === inv.id){
            return data;
          }
          return inv;
        });
      });
    }
}
