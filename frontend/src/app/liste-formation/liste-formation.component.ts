import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/api.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-liste-formation',
  templateUrl: './liste-formation.component.html',
  styleUrls: ['./liste-formation.component.scss']
})
export class ListeFormationComponent implements OnInit {

  dataSourceformation: any = { data: [] };
  pageSize: number = 5; // change this value to change the number of items per page
  currentPage: number = 1;
  totalItems: number;

  constructor(private dataService: ApiService,private router:Router, private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.listeformation();
  }
  listeformation() {
  this.dataService.listeformations().subscribe(
    (data) => {
      this.dataSourceformation.data = data;
      this.totalItems = data.length; // set the total number of items for pagination
      console.log(this.dataSourceformation.data);
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
    this.httpClient.delete(`http://localhost/backend/supprimer_formation.php?id=${id}`)
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






