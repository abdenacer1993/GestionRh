import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userId: number;
  userData: any;
  angForm: FormGroup;
  selected1 = '';
  selected2 = '';

  constructor(private fb: FormBuilder, private dataService: ApiService) {
    this.userData = {};
  }

  ngOnInit() {

    this.angForm = this.fb.group({
      id: [''],
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

    this.getUserData();


  }

  getUserData() {
    this.userId = parseInt(localStorage.getItem('Id'));
    this.dataService.getUserById(this.userId)
      .subscribe(
        (data) => {
          console.log('API Response:', data); // Check the API response
          
          if (data && data.length > 0) {
            this.userData = data[0]; // Assign the first item in the data array to userData
            console.log('Inside API call:', this.userData); // Log the updated userData

            // Update the form values with the user data
            this.angForm.patchValue({
              id:this.userData.id,
              name: this.userData.name,
              email: this.userData.email,
              pwd: this.userData.pwd,
              role: this.userData.role,
              cin: this.userData.cin,
              date_naissance: this.userData.date_naissance,
              matricule: this.userData.matricule,
              situation: this.userData.situation,
              adresse_postale: this.userData.adresse_postale,
              grade: this.userData.grade,
              categorie: this.userData.categorie,
              certif: this.userData.certif,
              niveau_educ: this.userData.niveau_educ
            });
          } else {
            console.log('No user data found');
          }
        },
        error => {
          console.log('Error retrieving user data');
        }
      );
  }

 
  
  updateUserProfiles(f: any) {
    console.log(f);
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.dataService.updateUserProfile(f)
      .subscribe(
        (data) => {
        //  this.alertWithSuccess();
          // alert("updated successfuly!");
        })
        Swal.fire('Saved!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
    
  }

  
}
