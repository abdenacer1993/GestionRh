import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/api.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-liste-enseignant',
  templateUrl: './liste-enseignant.component.html',
  styleUrls: ['./liste-enseignant.component.scss']
})
export class ListeEnseignantComponent implements OnInit {
  dataSourceUsers: any = { data: [] };
  dataSourceformation: any = { data: [] };
  pageSize: number = 5; // change this value to change the number of items per page
  currentPage: number = 1;
  totalItems: number;
  id_ens : any = localStorage.getItem('Id');

  constructor(private dataService: ApiService,private router:Router, private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.listesenseignants();
  }

  listesenseignants() {
    this.dataService.listeenseignant().subscribe(
      (data) => {
        this.dataSourceUsers.data = data;
        this.totalItems = data.length; // set the total number of items for pagination
        console.log(this.dataSourceUsers.data);
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
    this.httpClient.delete(`http://localhost/backend/supprimer_enseignant.php?id=${id}`)
      .subscribe(
        (response) => {
          console.log(response); // Log the response from the backend
          // Handle the response as needed (e.g., display a success message)
          this.dataSourceUsers.data = this.dataSourceUsers.data.filter(record => record.id !== id);
        },
        (error) => {
          console.log(error); // Log any errors
          // Handle errors as needed (e.g., display an error message)
        }
      );
      }

}
