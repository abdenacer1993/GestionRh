import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { PopupCongieComponent } from 'app/popup-congie/popup-congie.component';

@Component({
  selector: 'app-liste-mes-congie',
  templateUrl: './liste-mes-congie.component.html',
  styleUrls: ['./liste-mes-congie.component.scss']
})
export class ListeMesCongieComponent implements OnInit {
 
  userId: number;
  dataSourceformation: any = { data: [] };
  pageSize: number = 5; // change this value to change the number of items per page
  currentPage: number = 1;
  totalItems: number;

  constructor(private dataService: ApiService, private httpClient: HttpClient,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getCongie();
  }

  getCongie() {
    this.userId = parseInt(localStorage.getItem('Id'));
    this.dataService.getCongieByUserId(this.userId)
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
    this.httpClient.delete(`http://localhost/backend/delete_congie.php?id=${id}`)
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

  

  
openDialog(id: number): void {
    // Use the MatDialog service to open the dialog
     this.dialog.open(PopupCongieComponent, {
      data: { id: id } // Pass the ID as data to the dialog
    }).
    afterClosed().subscribe(result => {
      console.log('Dialog closed');
      this.getCongie();
      // Handle any actions after the dialog is closed, if needed
    });
  }

}

