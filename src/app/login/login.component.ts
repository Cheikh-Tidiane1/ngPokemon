import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Guard/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  message: string = '';
  name: string;
  password: string;
  auth: AuthService;

  constructor(private authService: AuthService, private router: Router) {}
  ngOnInit() {
    this.auth = this.authService
    // console.log(this.auth.isLoggedIn);

  }
  setMessage() {
    if (this.authService.isLoggedIn) {
      this.message = 'Vous êtes connecté';
    } else {
      this.message = 'Identifiant/Mot de passe incorrect !';
    }
  }

  login() {
    this.message = 'Tentative de connexion en cours...';
    this.authService
      .login(this.name, this.password)
      .subscribe((isLoggedIn) => {
        this.setMessage();
        if (isLoggedIn) {
          this.router.navigate(['pokemons']);
        } else {
          this.name = '' ;
          this.password = '' ;
          this.router.navigate(['login']);
        }
      });
  }

  logout(){
    this.authService.logout();
    this.message = "Vous êtes déconnecté."
  }
}
