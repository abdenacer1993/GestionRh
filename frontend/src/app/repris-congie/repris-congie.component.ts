import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'app/api.service';
import { error } from 'console';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-repris-congie',
  templateUrl: './repris-congie.component.html',
  styleUrls: ['./repris-congie.component.scss']
})
export class ReprisCongieComponent implements OnInit {

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
            name : ['', Validators.required],
            grade : ['', Validators.required],
            date_repris : ['', Validators.required],
            type : ['', Validators.required],
            date_deb : ['', Validators.required],
            date_fin : ['', Validators.required],
            cause : ['', Validators.required],
            id_en : ['']
          })
          this.getUserData()
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
        this.dataService.addReprisCongie(f).subscribe(
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