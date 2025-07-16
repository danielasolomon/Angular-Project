import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';

interface Account {
  username: string | null;
  parola: string | null;
}

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.scss']
})
export class NewuserComponent implements OnInit {



  form!: FormGroup;
  errorMessage: string | null = null; // Variabila pentru a stoca mesajul de eroare

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.createForm();
  }

  private createForm(): void {
    this.form = this.formBuilder.group({
      username: [null],
      parola: [null],
    });
  }

  logIn(): void {
    const dateFormular: Account = {
      ...this.form.getRawValue(),
    };

    // Verifică dacă username-ul este deja în listă
    const existingUser = LoginComponent.vtm.find(user => user.username === dateFormular.username);

    // Dacă nu există deja un utilizator cu același username, adaugă utilizatorul nou în listă
    if (!existingUser) {
      LoginComponent.vtm.push(dateFormular);
      console.log(LoginComponent.vtm);
      this.router.navigate(['/']);
    } else {
      this.errorMessage = "Username-ul sau parola sunt deja folosite";
    }
  }
}
