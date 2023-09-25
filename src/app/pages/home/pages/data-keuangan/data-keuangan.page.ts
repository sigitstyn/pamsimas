import { Component, OnInit, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-data-keuangan',
  templateUrl: './data-keuangan.page.html',
  styleUrls: ['./data-keuangan.page.scss'],
})
export class DataKeuanganPage implements OnInit {
  @ViewChild(IonTabs) tabs: IonTabs;
  selectedTab = 'home1';
  home1Color = 'black';
  home2Color = 'cadetblue';
  constructor() { }

  ngOnInit() {
  }
  ionTabsWillChange(event) {
    this.selectedTab = event.tab;
  }
  selectTab(tab: string) {
    this.selectedTab = tab;
  }

}
