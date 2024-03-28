import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { AuthService } from './Guard/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}
  auth: AuthService;
  ngOnInit(): void {
    this.auth = this.authService;
    // console.log(this.authService.isLoggedIn);
    
  }

  logOut() {
    this.authService.logout();
    this.router.navigate(['login']);
  }
}
