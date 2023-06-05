import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'app/api.service';
import { error } from 'console';
import Swal from 'sweetalert2';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-popup-congie',
  templateUrl: './popup-congie.component.html',
  styleUrls: ['./popup-congie.component.scss']
})
export class PopupCongieComponent implements OnInit {
  angForm: any;
  selected: '';
  congieData: any;

  Id: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder, private dataService: ApiService) {
    this.congieData = {};
  }
  ngOnInit(): void {
    this.angForm = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      id_en: [''],
      matricule: ['', Validators.required],

      date_deb: ['', Validators.required],
      date_fin: ['', Validators.required],
      // Additional fields
      type: ['', Validators.required],
      cin: ['', Validators.required],
      grade: ['', Validators.required],
      poste: ['', Validators.required],
      nbrjour: ['', Validators.required],
      adresse: ['', Validators.required],
      zipcode: ['', Validators.required],
      num_tel: ['', Validators.required],
      papier: ['', Validators.required],
      etat: ['', Validators.required]

    });
    this.getCongie();

  }
  getCongie() {
    this.Id = this.data.id;
    this.dataService.getDataById(this.Id)
      .subscribe(
        (data) => {
          console.log('API Response:', data); // Check the API response

          if (data && data.length > 0) {
            this.congieData = data[0]; // Assign the first item in the data array to userData
            console.log('Inside API call:', this.congieData); // Log the updated userData

            // Update the form values with the user data
            this.angForm.patchValue({
              id: this.congieData.id,
              name: this.congieData.name,
              id_en: this.congieData.id_en,
              matricule: this.congieData.matricule,

              date_deb: this.congieData.date_deb,
              date_fin: this.congieData.date_fin,
              // Additional fields
              type: this.congieData.type,
              cin: this.congieData.cin,
              grade: this.congieData.grade,
              poste: this.congieData.poste,
              nbrjour: this.congieData.nbrjour,
              adresse: this.congieData.adresse,
              zipcode: this.congieData.zipcode,
              num_tel: this.congieData.num_tel,
              papier: this.congieData.papier,
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
    this.dataService.updateCongieById(this.Id, f)
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
  //       this.dataService.updateCongieById(this.Id, f).subscribe(
  //         (data) => {
  //           this.angForm.reset();
  //           Swal.fire('Saved!', '', 'success');
  //         },
  //         (error) => {
  //           this.angForm.reset();
  //           console.log('Error updating user data:', error);
  //         }
  //       );
  //     } else if (result.isDenied) {
  //       Swal.fire('Changes are not saved', '', 'info');
  //     }
  //   });
  // }
  

}