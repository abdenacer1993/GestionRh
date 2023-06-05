import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-formation',
  templateUrl: './add-formation.component.html',
  styleUrls: ['./add-formation.component.scss']
})
export class AddFormationComponent implements OnInit {
  angForm: FormGroup;
  isLogged: any;
  userName: any;
  userId: any;
  userEmail: any;

  constructor(private httpClient: HttpClient ,private fb: FormBuilder, private dataService: ApiService) {
    this.userName = this.dataService.getName();
    this.userId = this.dataService.getId();
    this.userEmail = this.dataService.getEmail();
    this.isLogged = this.dataService.isLoggedIn();
    this.angForm = this.fb.group({
      title: ['', Validators.required],
      type: ['', Validators.required],
      date_deb: ['', Validators.required],
      date_fin: ['', Validators.required],
      email: this.userEmail,
      name_en: this.userName,
      id_en: this.userId,
      file: [null, Validators.required] // Add a file input field to the form
    });
  }

  ngOnInit() {}

  onFileChange(event: any) {
    if (event.target.files && event.target.files.length) {
      const file = event.target.files[0];
      this.angForm.patchValue({
        file: file
      });
    }
  }

  postdata(form: any) {
    const formData = new FormData();
    formData.append('file', this.angForm.get('file').value);
    formData.append('title', form.title);
    formData.append('type', form.type);
    formData.append('date_deb', form.date_deb);
    formData.append('date_fin', form.date_fin);
    formData.append('email', form.email || this.userEmail);
    formData.append('name_en', form.name_en || this.userName);
    formData.append('id_en', form.id_en || this.userId);

    
  

  // alertWithSuccess() {
  //   Swal.fire({
  //     icon: 'success',
  //     title: 'Added successfully',
  //     text: 'Ajout avec succès',
  //   });
  // }

  // alertWithError() {
  //   Swal.fire({
  //     icon: 'error',
  //     title: 'Oops...',
  //     text: 'formation déjà existe !',
  //   });
  // }
  
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.httpClient.post('http://localhost/backend/ajout_formation.php', formData).subscribe(
      (response: any) => {
        console.log(this.angForm.value);
        
        this.angForm.reset();
      // },
      // (error) => {
      //   this.alertWithError();
      //   console.log(this.angForm.value);
       }
    );
        Swal.fire('Formation Partager!', '', 'success')
        
      } else if (result.isDenied) {
        Swal.fire('Formation n est pas partager', '', 'info')
      }
    })
  }
}


