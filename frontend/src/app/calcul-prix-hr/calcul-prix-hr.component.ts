import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { ApiService } from '../api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-calcul-prix-hr',
  templateUrl: './calcul-prix-hr.component.html',
  styleUrls: ['./calcul-prix-hr.component.scss']
})
export class CalculPrixHrComponent implements OnInit {

  angForm: FormGroup;
  selected: any;
  dataSourceUsers: any = { data: [] };
  
  constructor(
    private fb: FormBuilder,
    private dataService: ApiService
  ) {
    this.angForm = this.fb.group({
      name_enseignant: ['', Validators.required],
      role: ['', Validators.required],
      nbr_hrcour: ['', Validators.required],
      nbr_hrtp: ['', Validators.required],
      nbr_hrtd: ['', Validators.required],
      prixtt: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.loadensi();
  }

  loadensi(){
    this.dataService.listeenseignant().subscribe(
      data => {
        this.dataSourceUsers = data as string[];
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );
  }

  onOptionsSelected(): void {
    const selectedUser = this.dataSourceUsers.find(user => user.name === this.selected);
    if (selectedUser) {
      this.angForm.patchValue({
        role: selectedUser.role
      });
      // if (selectedUser.role == "enseignant") {
      //   this.angForm.patchValue({
      //     prixtt: nbr_hr
      //   });

    }
  }

  postdata(form: any) {
    this.dataService.userregistration(form).subscribe(
      () => {
        
        this.alertwithsucces();
        this.angForm.reset();
      },
      (error) => {
        console.log(error);
        alert('An error occurred');
      }
    );
  }


  alertwithsucces() {
    Swal.fire({
        icon: 'success',
        title: 'Added successfuly',
        text: 'User has been added succesfuly',
    })
}
}