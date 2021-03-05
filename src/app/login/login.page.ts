import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { ToastController, LoadingController, NavController, AlertController } from '@ionic/angular';
import { AuthenticateService } from '../services/auth';
import { User } from '../services/data.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user = {} as User;
  constructor(public authServe: AuthenticateService,
    public router: Router,
    public control: AlertController,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private afAuth: AngularFireAuth,
    private navCtrl: NavController
    ) { }

  ngOnInit() {
  }
  SignIn(user){
    this.authServe.signIn(user.email, user.password).then(async (_res)=>{
      const loading = await this.loadingCtrl.create({
        message: 'Please wait...',
        duration: 800
      });

      await loading.present();
      this.router.navigate(['home']);
    }).catch(async (error)=>{
     const alert = await this.control.create({
       header:'ERROR',
       message: (error.message),
       buttons: ['Okay']
       
     });
     await alert.present();
  })
  }
}
