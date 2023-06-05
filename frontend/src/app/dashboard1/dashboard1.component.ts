import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { ApiService } from 'app/api.service';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { PopupInsritFormationComponent } from 'app/popup-insrit-formation/popup-insrit-formation.component';

@Component({
  selector: 'app-dashboard1',
  templateUrl: './dashboard1.component.html',
  styleUrls: ['./dashboard1.component.scss']
})
export class Dashboard1Component implements OnInit {
  formations: any[];
  role : any = localStorage.getItem('Role');
  constructor(private dataService: ApiService ,private http: HttpClient ,public dialog: MatDialog) { }
  // dataSourceformation: any = { data: [] };
  // totalItems: number;
  //url: "http://127.0.0.1:8080/backend/";


  loadformation() {
    this.dataService.getFormations().subscribe(
      (data:any[]) => {
        this.formations = data;
      //    this.totalItems = data.length; // set the total number of items for pagination
      //    // Fetch image for each formation
      // this.dataSourceformation.data.forEach((formation) => {
      //   //this.fetchImage(formation); // Call the fetchImage function for each formation
      // });
        console.log(this.formations);
      },
      (error) => {
        console.log("Couldn't retrieve data from the database.", error);
      }
    );
  }

  getBase64Image(imageData: string): string {
    return 'data:image/jpeg;base64,' + imageData;
  }

  // fetchImage(formation: any): void {
  //   this.http.get<any>('http://localhost/backend/' + formation.id).subscribe(
  //     (response) => {
  //       formation.imageUrl = response.imageUrl; // Assuming the image URL is provided as 'imageUrl' property in the response
  //     },
  //     (error) => {
  //       console.error('Failed to fetch image for formation with ID:', formation.id);
  //     }
  //   );
  // }

  
  startAnimationForLineChart(chart){
      let seq: any, delays: any, durations: any;
      seq = 0;
      delays = 80;
      durations = 500;

      chart.on('draw', function(data) {
        if(data.type === 'line' || data.type === 'area') {
          data.element.animate({
            d: {
              begin: 600,
              dur: 700,
              from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
              to: data.path.clone().stringify(),
              easing: Chartist.Svg.Easing.easeOutQuint
            }
          });
        } else if(data.type === 'point') {
              seq++;
              data.element.animate({
                opacity: {
                  begin: seq * delays,
                  dur: durations,
                  from: 0,
                  to: 1,
                  easing: 'ease'
                }
              });
          }
      });

      seq = 0;
  };
  startAnimationForBarChart(chart){
      let seq2: any, delays2: any, durations2: any;

      seq2 = 0;
      delays2 = 80;
      durations2 = 500;
      chart.on('draw', function(data) {
        if(data.type === 'bar'){
            seq2++;
            data.element.animate({
              opacity: {
                begin: seq2 * delays2,
                dur: durations2,
                from: 0,
                to: 1,
                easing: 'ease'
              }
            });
        }
      });

      seq2 = 0;
  };
  ngOnInit() {
      /* ----------==========     Daily Sales Chart initialization For Documentation    ==========---------- */
    this.loadformation();
      const dataDailySalesChart: any = {
          labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
          series: [
              [12, 17, 7, 17, 23, 18, 38]
          ]
      };

     const optionsDailySalesChart: any = {
          lineSmooth: Chartist.Interpolation.cardinal({
              tension: 0
          }),
          low: 0,
          high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: { top: 0, right: 0, bottom: 0, left: 0},
      }

      var dailySalesChart = new Chartist.Line('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);

      this.startAnimationForLineChart(dailySalesChart);


      /* ----------==========     Completed Tasks Chart initialization    ==========---------- */

      const dataCompletedTasksChart: any = {
          labels: ['12p', '3p', '6p', '9p', '12p', '3a', '6a', '9a'],
          series: [
              [230, 750, 450, 300, 280, 240, 200, 190]
          ]
      };

     const optionsCompletedTasksChart: any = {
          lineSmooth: Chartist.Interpolation.cardinal({
              tension: 0
          }),
          low: 0,
          high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: { top: 0, right: 0, bottom: 0, left: 0}
      }

      var completedTasksChart = new Chartist.Line('#completedTasksChart', dataCompletedTasksChart, optionsCompletedTasksChart);

      // start animation for the Completed Tasks Chart - Line Chart
      this.startAnimationForLineChart(completedTasksChart);



      /* ----------==========     Emails Subscription Chart initialization    ==========---------- */

      var datawebsiteViewsChart = {
        labels: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
        series: [
          [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]

        ]
      };
      var optionswebsiteViewsChart = {
          axisX: {
              showGrid: false
          },
          low: 0,
          high: 1000,
          chartPadding: { top: 0, right: 5, bottom: 0, left: 0}
      };
      var responsiveOptions: any[] = [
        ['screen and (max-width: 640px)', {
          seriesBarDistance: 5,
          axisX: {
            labelInterpolationFnc: function (value) {
              return value[0];
            }
          }
        }]
      ];
      var websiteViewsChart = new Chartist.Bar('#websiteViewsChart', datawebsiteViewsChart, optionswebsiteViewsChart, responsiveOptions);

      //start animation for the Emails Subscription Chart
      this.startAnimationForBarChart(websiteViewsChart);
      this.loadformation();
  }
  openDialog(id: number): void {
    // Use the MatDialog service to open the dialog
     this.dialog.open(PopupInsritFormationComponent, {
      data: { id: id } // Pass the ID as data to the dialog
    }).
    afterClosed().subscribe(result => {
      console.log('Dialog closed');
      
      // Handle any actions after the dialog is closed, if needed
    });
  }

  

}
