import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bracelets',
  templateUrl: './bracelets.component.html',
  styleUrl: './bracelets.component.scss'
})
export class BraceletsComponent {

  cards = [
    { id: 14, title: 'Bratara aur', imageURL: './../../assets/image1.jpg' },
    { id: 15, title: 'Bratari aur', imageURL: './../../assets/image2.jpg' },
    { id: 16, title: 'Bratara aur diamante', imageURL: './../../assets/image12.jpg' },
    { id: 17, title: 'Bratari aur diferite modele', imageURL: './../../assets/image13.jpg' },
    { id: 18, title: 'Bratari aur subtiri', imageURL: './../../assets/image14.jpg' },
    { id: 19, title: 'Bratari argint', imageURL: './../../assets/image15.jpg' },
    { id: 20, title: 'Bratari aur 14k', imageURL: './../../assets/image16.jpg' },
    { id: 21, title: 'Bratara argint diamnte turcoaz', imageURL: './../../assets/image17.jpg'},
  ];

  constructor( private router: Router) { 
  }

  goToCards(index : number){
   this.router.navigate(['cards/'+ index]);
  }


}
