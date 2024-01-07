import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { 
  IonHeader,
  IonToolbar,
  IonIcon,
  IonTitle,
  IonContent,
  IonList,
  IonSpinner,
  IonButton,
  IonItem,
  IonLabel,
} from '@ionic/angular/standalone';
import { NgIf } from '@angular/common';
import { addIcons } from 'ionicons';
import { checkmarkOutline } from 'ionicons/icons';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonIcon,
    IonContent,
    IonItem,
    IonList,
    IonSpinner,
    IonButton,
    IonLabel,
    NgIf,
    FormsModule,
  ]
})
export class EditProfileComponent implements OnInit {

  @ViewChild('phoneInput') phoneInput: any;
  @Input() profile: any = {};
  isSubmitted = false;

  constructor() { 
    addIcons({
      checkmarkOutline
    });
  }

  ngOnInit() {
    setTimeout(() => {
      this.phoneInput.setFocus();
      console.log('enter');
    }, 500);
  }

  async onSubmit(form: NgForm) {
    try {
      if(!form.valid) {
        return;
      }
      console.log(form.value);
      this.isSubmitted = true;
      if(this.profile.email != form.value.email) {
        // this.presentPasswordPrompt(form.value);
      } else {
        // await this.profileService.updateProfile(this.profile, form.value);
        // this.global.modalDismiss();
      }
      this.isSubmitted = false;
    } catch(e) {
      console.log(e);
      this.isSubmitted = false;
      // this.global.errorToast();
    }
  }

}
