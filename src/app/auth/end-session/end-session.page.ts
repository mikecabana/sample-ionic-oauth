import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AuthService } from 'ionic-appauth';

@Component({
  selector: 'app-end-session',
  templateUrl: './end-session.page.html',
  styleUrls: ['./end-session.page.scss'],
})
export class EndSessionPage implements OnInit {
  constructor(
    private auth: AuthService,
    private navCtrl: NavController,
    private router: Router
  ) {}

  ngOnInit() {
    this.auth.endSessionCallback();
    this.navCtrl.navigateRoot('landing');
  }
}
