import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies: any[];

  constructor(private _movieService : MovieService) {
  	 }

  ngOnInit() {
  	this.getMovies();
  	}

  handleSuccess(movies){
  	this.movies = movies;
  	}

  getMovies(){
  	this._movieService.getMovies().subscribe(data => this.handleSuccess(data));
  	}

  }



