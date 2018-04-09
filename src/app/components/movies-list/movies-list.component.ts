import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

 selected: String;
 sorttype: String;	

  constructor() {
  	this.selected = "Name";
  	this.sorttype = "Ascending";
   }

  ngOnInit() {
  	this.sortMovies();
  }

  @Input() 
  movies: any[];

   sortMovies(){
  	let selection = this.selected;
  	switch (this.sorttype){
  		case "Ascending" : 
			this.movies.sort((a, b) => {
				  let nameA = selection == "Name" ? a.title.toUpperCase(): a.releaseDate;
				  let nameB = selection == "Name" ? b.title.toUpperCase(): b.releaseDate; 
				  return nameA.localeCompare(nameB);
				}); break; 
		case "Descending" :
			this.movies.sort((a, b) => {
				  let nameA = selection == "Name" ? a.title.toUpperCase(): a.releaseDate;
				  let nameB = selection == "Name" ? b.title.toUpperCase(): b.releaseDate; 
				  return (nameA < nameB ? 1 : (nameA > nameB ? -1 : 0));
				}); break; 					 	
  	}
  }
  
}
