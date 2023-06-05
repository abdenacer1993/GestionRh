import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import Swal from 'sweetalert2';


@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
    angForm: FormGroup;
    selected1 = '';
    selected2 = '';
    constructor(private fb: FormBuilder, private dataService: ApiService, private router: Router) {
        this.angForm = this.fb.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.minLength(1), Validators.email]],
            pwd: ['', Validators.required],
            role: ['', Validators.required],
            cin: ['', Validators.required],
            date_naissance: ['', Validators.required],
            matricule: ['', Validators.required],
            situation: ['', Validators.required],
            adresse_postale: ['', Validators.required],
            grade: ['', Validators.required],
            categorie: ['', Validators.required],
            certif: ['', Validators.required],
            niveau_educ: ['', Validators.required],
        });
    }

    ngOnInit() {
    }

   
    postdata(form: any) {
        this.dataService.userregistration(form).subscribe(
          (response: any) => {
            console.log(response)
            this.alertwithsucces();
            this.angForm.reset();
          },
          (error) => {
            this.alertwitherror();
            console.log(form);

            //alert('email deja existe');
          }
        );
      }


    alertwithsucces() {
        Swal.fire({
            icon: 'success',
            title: 'Added successfuly',
            text: 'Ajout avec success',
        })
    }

    alertwitherror(){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Email deja existe !',
        
      })
    }

  


}