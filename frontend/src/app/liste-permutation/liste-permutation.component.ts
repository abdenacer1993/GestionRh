import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

import { Component, OnInit } from '@angular/core';
import { PopupPermutationComponent } from 'app/popup-permutation/popup-permutation.component';

@Component({
  selector: 'app-liste-permutation',
  templateUrl: './liste-permutation.component.html',
  styleUrls: ['./liste-permutation.component.scss']
})
export class ListePermutationComponent implements OnInit {

  userId: number;
  dataSourceformation: any = { data: [] };
  pageSize: number = 5; // change this value to change the number of items per page
  currentPage: number = 1;
  totalItems: number;

  constructor(private dataService: ApiService, private httpClient: HttpClient,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getPermutation();
  }

  pageChanged(event) {
    this.currentPage = event; // update the current page number
  }

  getPermutation() {
    this.userId = parseInt(localStorage.getItem('Id'));
    console.log(this.userId);
    this.dataService.getpermutationByUserId(this.userId)
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

  // detelte
  deleteRecord(id: number): void {
    // Make an HTTP DELETE request to the PHP backend endpoint
    this.httpClient.delete(`http://localhost/backend/supprimerPermutation.php?id=${id}`)
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



  openDialog(id) {
    this.dialog.open(PopupPermutationComponent, {
      data: {
        id_en: id
      }
    }).afterClosed().subscribe(result => {
      this.getPermutation();
    });
  }
  


}
