import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DietService } from '../services/auth';
import { Diet } from '../services/data.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss'],
})
export class NotesPage implements OnInit {
notes = {} as Diet;
public myDate;


  constructor(
    public dietServe: DietService,
    public router: Router
  ) { }

  ngOnInit() {
  }

  Save(notes){
    var dateFormat = this.myDate.split('T')[0]; 
    this.notes.date = dateFormat;
    this.dietServe.createNote(notes);
  }}
