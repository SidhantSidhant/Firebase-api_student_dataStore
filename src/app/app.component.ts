import { Component } from '@angular/core';
import { AuthService } from './sheard/service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor(private _authservice : AuthService){}

  isLogOut(){
    this._authservice.isUserLogOut()
  }
}
