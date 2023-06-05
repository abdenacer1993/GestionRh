import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ApiService } from 'app/api.service';

@Component({
  selector: 'app-donner-nbr-h',
  templateUrl: './donner-nbr-h.component.html',
  styleUrls: ['./donner-nbr-h.component.scss']
})
export class DonnerNbrHComponent implements OnInit {
  angForm: FormGroup;
  isLogged: any;
  userName: any;
  userId: any;
  userRole: any;
  totalHours: number = 0;
  totalCour: number = 0;
  totalTd: number = 0;
  totalTp: number = 0;

  constructor(
    private httpClient: HttpClient,
    private fb: FormBuilder,
    private dataService: ApiService
  ) {
    this.userName = this.dataService.getName();
    this.userId = this.dataService.getId();
    this.userRole = this.dataService.getRole();
    this.isLogged = this.dataService.isLoggedIn();
    this.angForm = this.fb.group({
      name_enseignant: this.userName,
      id_ensiegnant: this.userId,
      role: this.userRole,
      nbr_heureCour: ['', Validators.required],
      nbr_heureTd: ['', Validators.required],
      nbr_heureTp: ['', Validators.required],
      prixtt: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  postdata(form: any) {
    const { nbr_heureCour, nbr_heureTd, nbr_heureTp } = form;
    const ttCour = nbr_heureCour * 20;
    this.totalCour = ttCour;
    const ttTd = nbr_heureTd * 25;
    this.totalTd = ttTd;
    const ttTp = nbr_heureTp * 30;
    this.totalTp = ttTp;
    const total = ttCour + ttTd + ttTp;
    this.totalHours = total;
    this.dataService.addNbrHeure(form).subscribe(
      (response: any) => {
        console.log(form);
        this.alertWithSuccess();
        this.angForm.reset();
      },
      (error) => {
        this.alertWithError();
        console.log(form);
      }
    );
  }

  onNbrHeureChange() {
    const nbr_heureCour = this.angForm.get('nbr_heureCour').value;
    const ttCour = nbr_heureCour * 20;
    this.totalCour = ttCour;

    const nbr_heureTd = this.angForm.get('nbr_heureTd').value;
    const ttTd = nbr_heureTd * 25;
    this.totalTd = ttTd;

    const nbr_heureTp = this.angForm.get('nbr_heureTp').value;
    const ttTp = nbr_heureTp * 30;
    this.totalTp = ttTp;

    const total = ttCour + ttTd + ttTp;
    this.totalHours = total;
  }

  onNbrHeureTdChange() {
    const nbr_heureCour = this.angForm.get('nbr_heureCour').value;
    const ttCour = nbr_heureCour * 20;
    this.totalCour = ttCour;

    const nbr_heureTd = this.angForm.get('nbr_heureTd').value;
    const ttTd = nbr_heureTd * 25;
    this.totalTd = ttTd;

    const nbr_heureTp = this.angForm.get('nbr_heureTp').value;
    const ttTp = nbr_heureTp * 30;
    this.totalTp = ttTp;

    const total = ttCour + ttTd + ttTp;
    this.totalHours = total;
  }

  onNbrHeureTpChange() {
    const nbr_heureCour = this.angForm.get('nbr_heureCour').value;
    const ttCour = nbr_heureCour * 20;
    this.totalCour = ttCour;

    const nbr_heureTd = this.angForm.get('nbr_heureTd').value;
    const ttTd = nbr_heureTd * 25;
    this.totalTd = ttTd;

    const nbr_heureTp = this.angForm.get('nbr_heureTp').value;
    const ttTp = nbr_heureTp * 30;
    this.totalTp = ttTp;

    const total = ttCour + ttTd + ttTp;
    this.totalHours = total;
  }

  alertWithSuccess() {
    Swal.fire({
      icon: 'success',
      title: 'Added successfully',
      text: 'Ajout avec succès',
    });
  }

  alertWithError() {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Ajout échoué !',
    });
  }
}
