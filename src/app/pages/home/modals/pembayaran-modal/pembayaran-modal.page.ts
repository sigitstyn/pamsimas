/* eslint-disable @typescript-eslint/naming-convention */
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController, ModalController, ToastController } from '@ionic/angular';
import { Pembayaran, PembayaranService } from 'src/app/services/pembayaran.service';

@Component({
  selector: 'app-pembayaran-modal',
  templateUrl: './pembayaran-modal.page.html',
  styleUrls: ['./pembayaran-modal.page.scss'],
})
export class PembayaranModalPage implements OnInit {
  @Input() pembayaran: Pembayaran;
  isUpdate = false;
  data = {
    jumlah_bayar: '',
    status_pembayaran: '',
  };
  constructor(
    private modalCtrl: ModalController,
    private service: PembayaranService,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private router: Router,
  ) { }

  ngOnInit() {
    if(this.pembayaran){
      this.isUpdate = true;
      this.data = this.pembayaran;
    }
  }
  closeModal(){
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }
  async onSubmit(form: NgForm){
    const pelanggan = form.value;
      this.service.update(pelanggan, this.pembayaran.id).subscribe(() => {
        pelanggan.id = this.pembayaran.id;
        this.modalCtrl.dismiss(pelanggan, 'updated');
      });
  }
}
