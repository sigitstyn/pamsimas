import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonTabs, ModalController } from '@ionic/angular';
import { UsersModalPage } from '../../modals/users-modal/users-modal.page';
import { Users, UsersService } from '../../../../services/users.service';
@Component({
  selector: 'app-data-user',
  templateUrl: './data-user.page.html',
  styleUrls: ['./data-user.page.scss'],
})
export class DataUserPage implements OnInit {
  @ViewChild(IonTabs) tabs: IonTabs;
  selectedTab = 'home1';
  home1Color = 'black';
  home2Color = 'cadetblue';
  users: Users[];

  constructor(
    private router: Router,
    private serviceUser: UsersService,
    private alertCtrl: AlertController,
    private modalCtrl: ModalController) { }

  ngOnInit() {
    this.serviceUser.getAll().subscribe(response => {
      this.users = response;
      //console.log(response);
    });
  }
  ionTabsWillChange(event) {
    this.selectedTab = event.tab;
  }
  selectTab(tab: string) {
    this.selectedTab = tab;
  }
  handleRefresh(event) {
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
    }, 2000);
  };
  openRegistrasi(){
    this.router.navigate(['/register']);
  }
  async removeUser(id: string){
    // console.log('remove');
    this.alertCtrl.create({
     header: 'Submit',
     message: 'Seberapa yakin kamu?',
     buttons: [{
       text: 'Yakin banget',
       handler: () => {
         this.serviceUser.remove(id).subscribe(() =>{
           this.users = this.users.filter(usr => usr.id !== id);
         });
       }
      },
      {
        text: 'Tidak'
      }
     ]
    }).then(alertCrtl => alertCrtl.present());
   }
  async updateUsers(users: Users) {
    this.modalCtrl.create({
      component: UsersModalPage,
      componentProps: { users },
      breakpoints: [0, 0.5, 0.8],
      initialBreakpoint: 0.8
    }).then(modal => {
      modal.present();
      return modal.onDidDismiss();
    }).then(({data, role}) => {
      this.users = this.users.filter(usr => {
        if(data.id === usr.id){
          return data;
        }
        return usr;
      });
    });
  }
}
