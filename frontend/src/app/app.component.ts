import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})

export class AppComponent {
loginbtn:boolean;
logoutbtn:boolean;
isLogged:any;
constructor(private dataService: ApiService) {
    this.isLogged = this.dataService.isLoggedIn();
dataService.getLoggedInName.subscribe(name => this.changeName(name));
//dataService.getLoggedInRole.subscribe(role => this.changeName(role));
if(this.dataService.isLoggedIn())
{
console.log("loggedin");
this.loginbtn=false;
this.logoutbtn=true
}
else{
this.loginbtn=true;
this.logoutbtn=false
}

}

private changeName(name: boolean): void {
this.logoutbtn = name;
this.loginbtn = !name;
}
logout() {
  const key = 'token'; // Provide the appropriate key for your token
  this.dataService.deleteToken(key);
  window.location.href = window.location.href;
}
}