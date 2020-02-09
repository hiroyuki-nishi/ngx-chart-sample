import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

import { Chart } from 'chart.js';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html'
})

export class ChartComponent implements OnInit {
  context: CanvasRenderingContext2D;
  @ViewChild('mycanvas', {static: true}) mycanvas01: ElementRef;
  @Input() data;
  @Input() options;

  ngOnInit() {
    this.context = this.mycanvas01.nativeElement.getContext('2d');
    const mycanvas = this.createBarChart(this.context);
  }

  private createBarChart(context: CanvasRenderingContext2D): Chart {
    return new Chart(context, {
      type: 'horizontalBar',
      data: this.data,
      options: this.options
    });
  }
}
