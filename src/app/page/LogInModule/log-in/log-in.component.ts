import { Component, ElementRef, OnInit, ViewChild,ChangeDetectionStrategy} from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/sheard/service/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class LogInComponent implements OnInit {
  @ViewChild('f') form !:NgForm
  
  constructor(private _authservice : AuthService) { }

  ngOnInit(): void {
    
  }
  
  onUserLogIn(){
    // console.log(this.form);
    let obj:{email : string, password : string} = this.form.value;
    this._authservice.isUserLogIn(obj)
    this.form.reset()
  }
}
