import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonButton,
  IonModal,
} from '@ionic/angular/standalone';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    IonLabel,
    IonButton,
    IonModal,
    EditProfileComponent
  ],
})
export class HomePage {
  data: any = {
    name: 'Nikhil Agarwal',
    email: 'nykz786@gmail.com',
    phone: '9999900000'
  };

  constructor() {}
}
