import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'app/api.service';
import { error } from 'console';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-demenagment',
  templateUrl: './add-demenagment.component.html',
  styleUrls: ['./add-demenagment.component.scss']
})
export class AddDemenagmentComponent implements OnInit {
  angForm: FormGroup;
  isLogged: any;

  userId: number;

  selected: '';
  userData: any;
  constructor(
    private httpClient: HttpClient,
    private fb: FormBuilder,
    private dataService: ApiService
  ) { }

  ngOnInit(): void {
    this.angForm = this.fb.group({

    id_en : [''],  
    matricule1 : ['', Validators.required],
    name_enseignant1 : ['', Validators.required],
    num_tel1 : ['', Validators.required],
    orig_societe1 : ['', Validators.required],
    fac1 : ['', Validators.required],
    Grade1 : ['', Validators.required],
    date_grade1 : ['', Validators.required],
    specialite1 : ['', Validators.required],
    date_inscrit_fac1 : ['', Validators.required],
    etablis_demande1 : ['', Validators.required],
    matricule2 : ['', Validators.required],
    name_enseignant2 : ['', Validators.required],
    num_tel2 : ['', Validators.required],
    orig_societe2 : ['', Validators.required],
    fac2 : ['', Validators.required],
    Grade2 : ['', Validators.required],
    date_grade2 : ['', Validators.required],
    specialite2 : ['', Validators.required],
    date_inscrit_fac2 : ['', Validators.required],
    etablis_demande2 : ['', Validators.required],
    etat: ['en cours...']
    }),
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

              name_enseignant1: this.userData.name,
            id_en: this.userData.id,
            matricule: this.userData.matricule,
            
            Grade: this.userData.grade 
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
  data(arg0: string, data: any) {
    throw new Error('Method not implemented.');
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
        this.dataService.addEtablissement(f).subscribe(
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
