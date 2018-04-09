import { Component, OnInit, Input } from '@angular/core';
import { ChartService } from '../../services/chart.service';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {

  rating: number;
  today: Date;	

  @Input() 
  movie: Object;

  constructor(private chartService: ChartService) { 
  	this.rating = 0;
  	this.today = new Date();
  }

  ngOnInit() {
  }

  update(){
  	this.chartService.updateChart();
  }

}
