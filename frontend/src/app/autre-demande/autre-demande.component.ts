import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'app/api.service';
import { error } from 'console';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-autre-demande',
  templateUrl: './autre-demande.component.html',
  styleUrls: ['./autre-demande.component.scss']
})
export class AutreDemandeComponent implements OnInit {

  angForm: FormGroup;
  isLogged: any;

  userId: number;

  selected: '';
  selected2: '';
  userData: any;

  constructor(
    private httpClient: HttpClient,
    private fb: FormBuilder,
    private dataService: ApiService
  ) { }

  ngOnInit(): void {
    this.angForm = this.fb.group({
      type: ['', Validators.required],
      mois_annee: ['', Validators.required],
      langue: ['', Validators.required],
      matricule: ['', Validators.required],
      name: ['', Validators.required],
      id_en: [''],
      grade: ['', Validators.required],
      pieces_jointes: ['', Validators.required]
    })
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

              name: this.userData.name,
              id_en: this.userData.id,
              matricule: this.userData.matricule,
              cin: this.userData.cin,
              grade: this.userData.grade
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

  postdata(f: any) {
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      console.log(f);
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.dataService.addAutreDemande(f).subscribe(
          (data) => {

            this.angForm.reset();
          },
          (error) => {
            this.angForm.reset();
            console.log('Error added user data:', error);
          }

        );
        Swal.fire('Saved!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }

}
