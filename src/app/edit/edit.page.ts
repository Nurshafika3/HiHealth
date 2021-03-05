import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DietService } from '../services/auth';
import { Diet } from '../services/data.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
  notes = {} as Diet;
  id: any;
  constructor(
    public dietServe: DietService,
    public router: Router,
    private actRoute: ActivatedRoute,

  ) {
    this.id = this.actRoute.snapshot.paramMap.get("id");
  }

   

  ngOnInit() {
  }
  Update(id,notes){
    this.dietServe.updateNote(id,notes);
  }
}

