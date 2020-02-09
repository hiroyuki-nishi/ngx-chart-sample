import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

import { Chart } from 'chart.js';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html'
})

export class ChartComponent implements OnInit {
  context01: CanvasRenderingContext2D;
  @ViewChild('mycanvas01', {static: true}) mycanvas01: ElementRef;
  @Input() data;
  @Input() options;

  ngOnInit() {
    this.context01 = this.mycanvas01.nativeElement.getContext('2d');
    const mycanvas01 = new Chart(this.context01, {
      type: 'line',
      data: this.data,
      options: this.options
    });
  }
}
