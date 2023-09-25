import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonTabs, IonTabButton, Platform, ModalController, AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import jwt_decode from 'jwt-decode';
import { AuthService } from 'src/app/auth/auth-services/auth.service';
import { Pembayaran, PembayaranService } from 'src/app/services/pembayaran.service';
import { InvoicePage } from './modals/invoice-modal/invoice.page';
import { PembayaranModalPage } from './modals/pembayaran-modal/pembayaran-modal.page';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild(IonTabs) tabs: IonTabs;
  selectedTab = 'home1';
  home1Color = 'cadetblue';
  home2Color = 'black';
  selectTabs='0';
  //search
  pembayaran: Pembayaran[];
  searchPembayaran: string;
  selectedDate: string;
  data: any[];
  subscribe: any;
  dataStorage: any;
  name: any;
  username: string;
  constructor(
    private storage: Storage,
    private platform: Platform,
    private router: Router,
    private authService: AuthService,
    private service: PembayaranService,
    private modalCtrl: ModalController,
    private alertCtrl: AlertController,
    private http: HttpClient,
  ) {
  }
  ionViewCanEnter() {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/welcome']);
    }
  }
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


  ionTabsWillChange(event) {
    this.selectedTab = event.tab;
  }
  selectTab(tab: string) {
    this.selectedTab = tab;
  }
}
