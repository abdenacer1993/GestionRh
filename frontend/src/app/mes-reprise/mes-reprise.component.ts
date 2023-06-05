import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-mes-reprise',
  templateUrl: './mes-reprise.component.html',
  styleUrls: ['./mes-reprise.component.scss']
})
export class MesRepriseComponent implements OnInit {

  userId: number;
  dataSourceformation: any = { data: [] };
  pageSize: number = 5; // change this value to change the number of items per page
  currentPage: number = 1;
  totalItems: number;

  constructor(private dataService: ApiService, private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getreprise();
  }

  getreprise() {
    this.userId = parseInt(localStorage.getItem('Id'));
    this.dataService.getrepriseById(this.userId)
      .subscribe(
        (data) => {
          
          this.dataSourceformation.data = data;
          this.totalItems = data.length; // set the total number of items for pagination
          console.log(this.dataSourceformation.data);
          console.log('API Response:', data); // Check the API response
        },
        error => {
          console.log(this.userId);
          console.log(this.dataSourceformation.data);
          console.log('Error retrieving user data:', error);
        }
      );
  }

  pageChanged(event) {
    this.currentPage = event; // update the current page number
  }

  // detelte
  deleteRecord(id: number): void {
    // Make an HTTP DELETE request to the PHP backend endpoint
    this.httpClient.delete(`http://localhost/backend/supprimer_mes_repris.php?id=${id}`)
      .subscribe(
        (response) => {
          console.log(response); // Log the response from the backend
          // Handle the response as needed (e.g., display a success message)
          this.dataSourceformation.data = this.dataSourceformation.data.filter(record => record.id !== id);
        },
        (error) => {
          console.log(error); // Log any errors
          // Handle errors as needed (e.g., display an error message)
        }
      );
      }

}
