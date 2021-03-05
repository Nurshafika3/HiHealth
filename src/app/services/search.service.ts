import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SearchService {
public items: any=[];

  constructor() {
    this.items = [
   {title: "Asthma", page:"../asthma"},
   {title: "Depression", page:"../depression"},
   {title: "Allergies", page:"../allergy"},
   {title: "Bad Breath", page:"../breath"},
   {title: "Ear Infection", page:"../ear"},
   {title: "Malaria", page:"../malaria"},
   {title: "Neck Pain", page:"../neck"},
   {title: "Obesity", page:"../obesity"},
   {title: "Disorder Sleep", page:"../sleep"},
   {title: "Dry Eyes", page:"../eyes"},


   ];

}

  filterItems(searchTerm){
   return this.items.filter(item => {
   return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;

   });
   }
}