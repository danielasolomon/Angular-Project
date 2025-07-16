import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chains',
  templateUrl: './chains.component.html',
  styleUrl: './chains.component.scss'
})
export class ChainsComponent {

  cards = [
    { id: 8, title: 'Colier diamante albastre si albe', imageURL: './../../assets/image3.jpg' },
    { id: 9, title: 'Lantisoare aur diferite marimi', imageURL: './../../assets/image18.jpg' },
    { id: 10, title: 'Lantisoare diferite culori', imageURL: './../../assets/image19.jpg' },
    { id: 11, title: 'Lantisoare aur si perle', imageURL: './../../assets/image20.jpg' },
    { id: 12, title: 'Lantisoare aur smaralde', imageURL: './../../assets/image21.jpg' },
    { id: 13, title: 'Lantisor argint diamate', imageURL: './../../assets/image22.jpg' },
  ];

  constructor( private router: Router) { 
  }

  goToCards(index : number){
   this.router.navigate(['cards/'+ index]);
  }

}
