import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthenticateService } from '../services/auth';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    public authServe: AuthenticateService,
    public ngFireAuth:AngularFireAuth,
    public router: Router
  ) { }

ngOnInit() {
	

}
  signOut(){
    this.ngFireAuth.signOut().then(()=>{
       this.router.navigate(['login']);
    })
    
  }
  option = {
  slidesPerView: 1.5,
	centeredSlides: true,
	loop: true,
	spaceBetween: 10,
	autoplay: true,
  }

}