import { Component, OnInit } from '@angular/core';
import { FCM } from '@ionic-native/fcm/ngx';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page{

  constructor( private fcm: FCM) {

    this.fcm.getToken().then(token => {
       console.log(token);
    });
  }

}
