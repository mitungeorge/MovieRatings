import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'chart.js';
import { ChartService } from '../../services/chart.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  @Input()
  movies: any;

  data = [];
  chart: any;
  ctx: any;
  objDiffer: any;

  ngOnInit(){
  	this.calcRatings();
  	this.drawChart();
  	this.chartService.change.subscribe(update => {
      	this.calcRatings();
  		this.drawChart();
    });
  }

  constructor(private chartService: ChartService){

  }
 
  calcRatings(){
  	this.data = [];
  	this.movies.forEach(movie => {
      if (this.data[movie.rating])
        this.data[movie.rating] += 1;
      else
        this.data[movie.rating] = 1;
    });
  }

  drawChart(){
	    this.ctx = document.getElementById("myChart");
	    if (this.chart) {
        	this.chart.destroy();
      		}
		this.chart = new Chart(this.ctx, {
	    type: 'bar',
	    data: {
	        labels: ["Not Rated", "1", "2", "3", "4", "5"],
	        datasets: [{
	            data: this.data,
	            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],    
	            borderWidth: 1,
	            fill: false
	        }]
	    },
	    options: {
	    	legend : {
	    		display : false
	    	},
	        scales: {
	            xAxes: [{
	            	display : true
	            }],
	            yAxes: [{
	            	display : true,
	            	ticks: {
                	beginAtZero: true
            }
	            }
	            ]
	        }
	    }
	});
 
 }
}
