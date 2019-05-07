import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'film';
  connected: boolean = false;
  
  constructor(private router: Router){

  }

  login(){
    this.connected = true;
  }
  logout(){
    this.connected = false;
    this.router.navigate(['/list']);
  }
}
