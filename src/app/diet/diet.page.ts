import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { DietService } from '../services/auth';

@Component({
  selector: 'app-diet',
  templateUrl: './diet.page.html',
  styleUrls: ['./diet.page.scss'],
})
export class DietPage implements OnInit {
notes: any;

  constructor(
      private firestore: AngularFirestore,
      public dietServe: DietService
    ) {}


  ngOnInit() {
  }
  ionViewWillEnter() {
    this.getNotes();
  }

  getNotes(){
    this.dietServe.readNote().subscribe(data => {
      this.notes = data.map(e => {
        return {
          id: e.payload.doc.
          id,
          date: e.payload.doc.data()["date"],
          breakfast: e.payload.doc.data()["breakfast"],
          lunch: e.payload.doc.data()["lunch"],
          dinner: e.payload.doc.data()["dinner"],

        }
      })
    })
  }
  delete(id){
    this.dietServe.deleteNote(id);
  }
}
