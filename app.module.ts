import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { EaringsComponent } from './earings/earings.component';
import { ChainsComponent } from './chains/chains.component';
import { BraceletsComponent } from './bracelets/bracelets.component';
import { RingsComponent } from './rings/rings.component';
import { CardsComponent } from './cards/cards.component';
import { LoginComponent } from './login/login.component';
import { NewuserComponent } from './newuser/newuser.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ContactComponent,
    EaringsComponent,
    ChainsComponent,
    BraceletsComponent,
    RingsComponent,
    CardsComponent,
    LoginComponent,
    NewuserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
