/* eslint-disable @typescript-eslint/naming-convention */
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController, ModalController, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/auth/auth-services/auth.service';
import { Pelanggan, PelangganService } from '../../../../services/pelanggan.service';

@Component({
  selector: 'app-pelanggan-modal',
  templateUrl: './pelanggan-modal.page.html',
  styleUrls: ['./pelanggan-modal.page.scss'],
})
export class PelangganModalPage implements OnInit {
  @Input() pelanggan: Pelanggan;
  isUpdate = false;
  data = {
    no_pelanggan: '',
    nama_pelanggan: '',
    username: '',
    password: '',
    alamat_pelanggan: '',
    kategori: '',
  };
  constructor(
    private modalCtrl: ModalController,
    private service: PelangganService,
    private authService: AuthService,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private router: Router,
  ) { }

  ngOnInit() {
    if(this.pelanggan){
      this.isUpdate = true;
      this.data = this.pelanggan;
    }
  }
  closeModal(){
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }
  async onSubmit(form: NgForm){
    const pelanggan = form.value;
    if(this.isUpdate){
      this.service.update(pelanggan, this.pelanggan.id).subscribe(() => {
        pelanggan.id = this.pelanggan.id;
        this.modalCtrl.dismiss(pelanggan, 'updated');
      });
    }
    else{
      const loading = await this.loadingCtrl.create({ message: 'Registering...' });
    await loading.present();
    this.authService.customerRegister(pelanggan).subscribe(
      // If success
      async () => {
        const toast = await this.toastCtrl.create({ message: 'User Created', duration: 2000, color: 'dark' });
        await toast.present();
        loading.dismiss();
        this.modalCtrl.dismiss(pelanggan, 'created');
      },
      // If there is an error
      async () => {
        const alert = await this.alertCtrl.create({ message: 'There is an error', buttons: ['OK'] });
        loading.dismiss();
        await alert.present();
      }
    );
    }
  }
}
