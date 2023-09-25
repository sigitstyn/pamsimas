import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Users, UsersService } from '../../../../services/users.service';

@Component({
  selector: 'app-users-modal',
  templateUrl: './users-modal.page.html',
  styleUrls: ['./users-modal.page.scss'],
})
export class UsersModalPage implements OnInit {
  @Input() users: Users;
  isUpdate = false;
  data = {
    firstname: '',
    lastname: '',
    username: '',
  };
  constructor(
    private modalCtrl: ModalController,
    private serviceUser: UsersService
  ) { }
  ngOnInit() {
    if(this.users){
      this.isUpdate = true;
      this.data = this.users;
    }
  }
  closeModal(){
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }
  onSubmit(form: NgForm){
    const users = form.value;
    if(this.isUpdate){
      this.serviceUser.update(users, this.users.id).subscribe(() => {
        users.id = this.users.id;
        this.modalCtrl.dismiss(users, 'updated');
      });
    }else{
      this.serviceUser.create(users).subscribe(response => {
        this.modalCtrl.dismiss(response, 'created');
      });
    }
  }

}
