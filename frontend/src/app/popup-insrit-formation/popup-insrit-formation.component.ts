import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'app/api.service';
import { error } from 'console';
import Swal from 'sweetalert2';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-popup-insrit-formation',
  templateUrl: './popup-insrit-formation.component.html',
  styleUrls: ['./popup-insrit-formation.component.scss']
})
export class PopupInsritFormationComponent implements OnInit {
  angForm: any;
  congieData: any;
  Id: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder, private dataService: ApiService) { }

  ngOnInit(): void {
    this.angForm = this.fb.group({
      
      title: ['', Validators.required],
      type: ['', Validators.required],
      id_formation: [''],
      id_en: [''],
      nom_en: ['', Validators.required]



    });

    this.getCongie();

  }
  getCongie() {
    this.Id = this.data.id;
    this.dataService.getformationById(this.Id)
      .subscribe(
        (data) => {
          console.log('API Response:', data); // Check the API response

          if (data && data.length > 0) {
            this.congieData = data[0]; // Assign the first item in the data array to userData
            console.log('Inside API call:', this.congieData); // Log the updated userData

            // Update the form values with the user data
            this.angForm.patchValue({
              
              title: this.congieData.title,
              type: this.congieData.type,
              id_formation: this.congieData.id,
              id_en: this.congieData.id_en,
              nom_en: this.congieData.name_en

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





  postdata(form: any) {
       Swal.fire({
         title: 'Do you want to save the changes?',
         showDenyButton: true,
         showCancelButton: true,
         confirmButtonText: 'Save',
         denyButtonText: `Don't save`,
       }).then((result) => {
         console.log(form);
         /* Read more about isConfirmed, isDenied below */
         if (result.isConfirmed) {
           this.dataService.inscritFormation(form).subscribe(
             (data) => {
               
               Swal.fire('Saved!', '', 'success');
             },
             (error) => {
               console.log(this.data);
               console.log('Error updating user data:', error);
             }
           );
         } else if (result.isDenied) {
           Swal.fire('Changes are not saved', '', 'info');
         }
       });
     }
    




}
