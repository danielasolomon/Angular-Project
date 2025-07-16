import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

interface Account {
  username: string | null;
  parola: string | null;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

   static vtm: Account[] = [
    { username: "dd", parola: "dd" },
    { username: "ss", parola: "ss" }
  ];

  form!: FormGroup;
  errorMessage: string | null = null; // Variabila pentru a stoca mesajul de eroare

  // Declaram un eveniment EventEmitter pentru a trimite datele noului utilizator

  constructor(private formBuilder: FormBuilder, private router: Router) { 
    
  }
  ngOnInit(): void {
    console.log(LoginComponent.vtm);
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

    let found = false;
    LoginComponent.vtm.forEach((account) => {
      if (dateFormular.username === account.username && dateFormular.parola === account.parola) {
        found = true;
        this.router.navigate(['/home']);
      }
    });

    if (!found) {
      this.errorMessage = "Numele de utilizator sau parola este greșită. Vă rugăm să încercați din nou.";
    } else {
      // Trimitere date către NewuserComponent pentru a adăuga utilizatorul
    }
  }

  goToNewuser(): void {
    this.router.navigate(['/newuser']); // Navighează la pagina de înregistrare
  }
}
