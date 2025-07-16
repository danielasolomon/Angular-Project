import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';


export interface Carduri{
  descriere: string;
  position: number;
  pret: string;
  imageURL: string; 
}

const liste1: Carduri[] = [
  {position: 0, descriere: ' Cercei handmade albastri cu doua perle mici', pret: '30 lei', imageURL: './../../assets/image4.png'},
  {position: 1, descriere: ' Cercei handmade portocalii', pret: '25 lei', imageURL: './../../assets/image5.png'},
  {position: 2, descriere: ' Cercei handmade galbeni', pret: '25 lei', imageURL: './../../assets/image6.png'},
  {position: 3, descriere: ' Cercei din aur alb, lungi, cu diamante', pret: '1050 lei', imageURL: './../../assets/image7.png'},
  {position: 4, descriere: ' Cercei din aur alb cu diamante si doua safire mari', pret: '890 lei', imageURL: './../../assets/image8.png'},
  {position: 5, descriere: ' Cercei din aur alb cu diamante si doua rubine mari', pret: '900 lei', imageURL: './../../assets/image9.png'},
  {position: 6, descriere: ' Cercei din aur 14K cu diamante', pret: '1000 lei', imageURL: './../../assets/image10.png'},
  {position: 7, descriere: ' Cercei din aur cu micu perle si diamante portocalii', pret: '1500 lei', imageURL: './../../assets/image11.png'},
  {position: 8, descriere: ' Colier cu diamante albastre si albe, un safir mare in mijloc', pret: '15000 lei', imageURL: './../../assets/image3.jpg'},
  {position: 9, descriere: ' Lantisoare de aur in diferite marimi si de greutati diferite, se vand separat', pret: 'incepand de la 100 lei cel mai subtire pana la 500 cel mai mare', imageURL: './../../assets/image18.jpg'},
  {position: 10, descriere: ' Lantisoare de aur in diferite culori si marimi, nu se pot comanda separat', pret: '900 lei', imageURL: './../../assets/image19.jpg'},
  {position: 11, descriere: ' Lantisoare de aur semiluna si stele cu lantisor de perle naturale', pret: '800 lei', imageURL: './../../assets/image20.jpg'},
  {position: 12, descriere: ' Lantisoare de aur 14k cu smarlad', pret: '400 lei', imageURL: './../../assets/image21.jpg'},
  {position: 13, descriere: ' Lantisor de argint cu diamant mare natural ', pret: '1200 lei', imageURL: './../../assets/image22.jpg'},
  {position: 14, descriere: ' Bratara de aur cu mici accente albastre, sa poate comanda separat sau in set cu cele 6 inele', pret: 'doar bratara - 100 lei; set - 300', imageURL: './../../assets/image1.jpg'},
  {position: 15, descriere: ' Bratari de aur diferite modele si grosimi, acestea se pot comanda separta iar pretul este per bratara', pret: '400 lei', imageURL: './../../assets/image2.jpg'},
  {position: 16, descriere: ' Bratari de aur cu mici diamante, bratarile se comanda separta, nu este pret integral pe set', pret: '700 lei / per bratara', imageURL: './../../assets/image12.jpg'},
  {position: 17, descriere: ' Bratari de aur diferite modele si grosimi, acestea se pot comanda separta iar pretul este per bratara', pret: '300 lei', imageURL: './../../assets/image13.jpg'},
  {position: 18, descriere: ' Bratari de aur diferite modele si grosimi, acestea se pot comanda separta iar pretul este per bratara', pret: '200 lei', imageURL: './../../assets/image14.jpg'},
  {position: 19, descriere: ' Bratari de argint diferite model, se comanda ca si set, nu se pot lua separat', pret: '700 lei', imageURL: './../../assets/image15.jpg'},
  {position: 20, descriere: ' Bratari de aur 14k in stol indian, se comanda ca si set', pret: '1000 lei', imageURL: './../../assets/image16.jpg'},
  {position: 21, descriere: ' Bratara aur alb, eleganta, cu diamante si smaralde', pret: '900 lei', imageURL: './../../assets/image17.jpg'},
  {position: 22, descriere: ' Inel de argint cu diamant mare', pret: '1000 lei', imageURL: './../../assets/image23.jpg'},
  {position: 23, descriere: ' Inele de aur alb cu diamante, se pot comanda separat sau impreuna', pret: '800 lei / per inel', imageURL: './../../assets/image24.jpg'},
  {position: 24, descriere: ' Inele de aur si aur alb cu diamante, se comanda separat', pret: '700 lei / per inel', imageURL: './../../assets/image25.jpg'},
  {position: 25, descriere: ' Inele de aur cu diamante, care pot fi drept inel de logodna si verigheta', pret: '1900 lei / inel', imageURL: './../../assets/image26.jpg'},
  {position: 26, descriere: ' Inel de aur alb cu diamante, promise ring sau inel de logodna', pret: '1500 lei', imageURL: './../../assets/image27.jpg'},
  {position: 27, descriere: ' Inel de logodna cu diamante piatra cubica', pret: '10000 lei', imageURL: './../../assets/image28.jpg'},

]


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent implements OnInit{
  constructor(private activateRoute:ActivatedRoute)
  {

  }
  subscriptionList: Subscription[] = [];
  dataSource =liste1[0];
  index = 3;

  ngOnInit(): void {
      this.activateRoute.params.subscribe((param)=>{
      this.index = param['indexid'];
      this.dataSource = liste1[this.index];
    })
  }
  

}
