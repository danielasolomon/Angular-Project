import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-earings',
  templateUrl: './earings.component.html',
  styleUrl: './earings.component.scss'
})
export class EaringsComponent {

    cards = [
      {id: 0, title: 'Cercei handmade albastri', imageURL: './../../assets/image4.png' },
      {id: 1, title: 'Cercei handmade portocalii', imageURL: './../../assets/image5.png' },
      {id: 2, title: 'Cercei handmade galbeni', imageURL: './../../assets/image6.png' },
      {id: 3, title: 'Cercei aur alb diamant', imageURL: './../../assets/image7.png' },
      {id: 4, title: 'Cercei aur alb diamante-safire', imageURL: './../../assets/image8.png' },
      {id: 5, title: 'Cercei argint diamante-rubine', imageURL: './../../assets/image9.png' },
      {id: 6, title: 'Cercei aur diamante', imageURL: './../../assets/image10.png' },
      {id: 7, title: 'Cercei aur perle', imageURL: './../../assets/image11.png'},
    ];
  
    constructor( private router: Router) { 
     }

     goToCards(index : number){
      this.router.navigate(['cards/'+ index]);
     }
  

}
