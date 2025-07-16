import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { EaringsComponent } from './earings/earings.component';
import { BraceletsComponent } from './bracelets/bracelets.component';
import { ChainsComponent } from './chains/chains.component';
import { RingsComponent } from './rings/rings.component';
import { CardsComponent } from './cards/cards.component';
import { LoginComponent } from './login/login.component';
import { NewuserComponent } from './newuser/newuser.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'earings', component: EaringsComponent},
  {path: 'bracelets', component:BraceletsComponent},
  {path: 'chains', component:ChainsComponent},
  {path: 'rings', component:RingsComponent},
  {path: 'cards/:indexid', component:CardsComponent},
  {path: '', component:LoginComponent},
  {path: 'newuser', component:NewuserComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
