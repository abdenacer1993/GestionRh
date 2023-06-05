import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/api.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { PopupAccptCongieComponent } from 'app/popup-accpt-congie/popup-accpt-congie.component';

@Component({
  selector: 'app-liste-congie',
  templateUrl: './liste-congie.component.html',
  styleUrls: ['./liste-congie.component.scss']
})
export class ListeCongieComponent implements OnInit {

  dataSourcecongies: any = { data: [] };
  pageSize: number = 5; // change this value to change the number of items per page
  currentPage: number = 1;
  totalItems: number;

  constructor(private dataService: ApiService, private httpClient: HttpClient,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.listecongie();
  }

  listecongie() {
    this.dataService.listecongies().subscribe(
      (data) => {
        this.dataSourcecongies.data = data;
        this.totalItems = data.length; // set the total number of items for pagination
        console.log(this.dataSourcecongies.data);
      },
      (error) => {
        console.log("Couldn't retrieve data from the database.");
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
          this.dataSourcecongies.data = this.dataSourcecongies.data.filter(record => record.id !== id);
        },
        (error) => {
          console.log(error); // Log any errors
          // Handle errors as needed (e.g., display an error message)
        }
      );
  }

  openDialog(id: number): void {
    // Use the MatDialog service to open the dialog
     this.dialog.open(PopupAccptCongieComponent, {
      data: { id: id } // Pass the ID as data to the dialog
    }).
    afterClosed().subscribe(result => {
      console.log('Dialog closed');
      this.listecongie();
      // Handle any actions after the dialog is closed, if needed
    });
  }


}
