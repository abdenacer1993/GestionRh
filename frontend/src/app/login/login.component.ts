import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
selector: 'app-login',
templateUrl: './login.component.html',
styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
angForm: FormGroup;
constructor(private fb: FormBuilder,private dataService: ApiService,private router:Router) {
this.angForm = this.fb.group({
email: ['', [Validators.required,Validators.minLength(1), Validators.email]],
pwd: ['', Validators.required]
});
}

ngOnInit() {
    if (this.dataService.isLoggedIn()) {
        const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : '/dashboard';
window.location.replace('/dashboard');
    }
}
postdata(angForm1)
{
this.dataService.userlogin(angForm1.value.email,angForm1.value.pwd)

.pipe(first())
.subscribe(
data => {
const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : '/dashboard';
this.router.navigate([redirect]);
window.location.replace('/dashboard');
//this.router.navigate(['/dashboard']);
},
error => {
    console.log(angForm1.value.email);
alert("User name or password is incorrect");

});
}
get email() { return this.angForm.get('email'); }
get pwd() { return this.angForm.get('pwd'); }
}