import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  data = {
    labels: ['2020/02/10', '2020/02/11', '2020/02/12', '2020/02/13'],
    datasets: [
      {
        label: '生産時間',
        data: [280, 340, 130, 300, 0],
        backgroundColor: 'rgba(255, 99, 132, 0.2)'
      },
      {
        label: '非生産時間',
        data: [80, 95, 32, 40],
        backgroundColor: 'rgba(255, 159, 64, 0.2)'
      }
    ]
  };

  options = {
    scales: {
      xAxes: [{
        gridLines: {
          offsetGridLines: true
        },
        stacked: true,
      }],
      yAxes: [{
        stacked: true,
      }]
    }
  };

  ngOnInit() {
  }
}
