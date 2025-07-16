import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rings',
  templateUrl: './rings.component.html',
  styleUrl: './rings.component.scss'
})
export class RingsComponent {

  cards = [
    { id: 22, title: 'Inel argint diamant', imageURL: './../../assets/image23.jpg' },
    { id: 23, title: 'Inel aur alb diamante', imageURL: './../../assets/image24.jpg' },
    { id: 24, title: 'Inele aur si aur alb', imageURL: './../../assets/image25.jpg' },
    { id: 25, title: 'Inele diamante', imageURL: './../../assets/image26.jpg' },
    { id: 26, title: 'Promise Ring diamant', imageURL: './../../assets/image27.jpg' },
    { id: 27, title: 'Inel logodna diamant', imageURL: './../../assets/image28.jpg' },
  ];

  constructor( private router: Router) { 
  }

  goToCards(index : number){
   this.router.navigate(['cards/'+ index]);
  }


}
