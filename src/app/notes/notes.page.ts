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
  constructor(
    public dietServe: DietService,
    public router: Router
  ) { }

  ngOnInit() {
  }

  Save(notes){
    notes.id = "1";
    this.dietServe.createNote(notes.id,notes);
  }}
