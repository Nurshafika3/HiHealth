import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { ToastController, LoadingController, NavController } from '@ionic/angular';
import { AuthenticateService } from '../services/auth';
import { User } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  user = {} as User;
  constructor(public authServe: AuthenticateService,
    public router: Router,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private afAuth: AngularFireAuth,
    private navCtrl: NavController

  ) { }

  ngOnInit() {
  }
Register(user){
  this.authServe.regUser(user.email, user.password).then(async ()=>{
    const loading = await this.loadingCtrl.create({
      message: 'Please wait...',
      duration: 400
    });
    const loading2 = await this.loadingCtrl.create({
      message: 'Register Successfully!',
      duration: 400
    });
    await loading.present().then(async ()=>{
      await loading2.present().then(async ()=>{
        this.router.navigate(['login']);
      })
    });  
  })
}
}

