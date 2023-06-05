import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'app/api.service';
import { error } from 'console';
import Swal from 'sweetalert2';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-popup-permutation',
  templateUrl: './popup-permutation.component.html',
  styleUrls: ['./popup-permutation.component.scss']
})
export class PopupPermutationComponent implements OnInit {

  angForm: any;
  selected: '';
  congieData: any;

  Id: any;


  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder, private dataService: ApiService) {
    this.congieData = {};
  }
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
    etat: ['']
    });
    this.getCongie();

  }
  getCongie() {
    this.Id = parseInt(localStorage.getItem('Id'));
    this.dataService.getetablissmentById(this.Id)
      .subscribe(
        (data) => {
          
          console.log(this.Id);
          console.log('API Response:', data); // Check the API response

          if (data && data.length > 0) {
            this.congieData = data[0]; // Assign the first item in the data array to userData
            console.log('Inside API call:', this.congieData); // Log the updated userData

            // Update the form values with the user data
            this.angForm.patchValue({
    id_en : this.congieData.id_en , 
    matricule1 : this.congieData.matricule1,
    name_enseignant1 : this.congieData.name_enseignant1,
    num_tel1 : this.congieData.num_tel1,
    orig_societe1 : this.congieData.orig_societe1,
    fac1 : this.congieData.fac1,
    Grade1 : this.congieData.Grade1,
    date_grade1 : this.congieData.date_grade1,
    specialite1 : this.congieData.specialite1,
    date_inscrit_fac1 : this.congieData.date_inscrit_fac1,
    etablis_demande1 : this.congieData.etablis_demande1,
    matricule2 : this.congieData.matricule2,
    name_enseignant2 : this.congieData.name_enseignant2,
    num_tel2 : this.congieData.num_tel2,
    orig_societe2 : this.congieData.orig_societe2,
    fac2 : this.congieData.fac2,
    Grade2 : this.congieData.Grade2,
    date_grade2 : this.congieData.date_grade2,
    specialite2 : this.congieData.specialite2,
    date_inscrit_fac2 : this.congieData.date_inscrit_fac2,
    etablis_demande2 : this.congieData.etablis_demande2,
    etat: this.congieData.etat
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
    console.log(f);
    this.dataService.updatePermutationById(this.Id, f)
      .subscribe(
        (data) => {
         
          this.changedsuc()
        },
        (error) => {
          //alert("Error");
        });
  }

  changedsuc() {
    Swal.fire({
      title: 'Changed Successfully!',
      text: 'This information has been changed',
      icon: 'success',
      allowOutsideClick: false,
      heightAuto: false,
      allowEscapeKey: false,
      confirmButtonText: 'Ok'

    })
  }


  // postdata(f: any) {
  //   Swal.fire({
  //     title: 'Do you want to save the changes?',
  //     showDenyButton: true,
  //     showCancelButton: true,
  //     confirmButtonText: 'Save',
  //     denyButtonText: `Don't save`,
  //   }).then((result) => {
  //     console.log(f);
  //     /* Read more about isConfirmed, isDenied below */
  //     if (result.isConfirmed) {
  //       this.dataService.updatePermutationById(this.Id, f).subscribe(
  //         (data) => {
  //           Swal.fire('Saved!', '', 'success');
  //         },
  //         (error) => {
  //           console.log('Error updating user data:', error);
  //         }
  //       );
  //     } else if (result.isDenied) {
  //       Swal.fire('Changes are not saved', '', 'info');
  //     }
  //   });
  // }
  


  

}
