import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';

import { MoviesListComponent } from './movies-list.component';

describe('MoviesListComponent', () => {
  
  let component: MoviesListComponent;


  beforeEach(() => {
    component = new MoviesListComponent();
  });


   it('should init SortBy to Name', () => {
      expect(component.selected).toBe("Name");
  });

  it('should init Sort Direction to Ascending', () => {

      expect(component.sorttype).toBe("Ascending");
  });


});

describe('MoviesListComponent.sortMovies()', () => {
  
  let component: MoviesListComponent;


  beforeEach(() => {
    component = new MoviesListComponent();
  });

  it('should sort the movies by name in ascending order if the sort by is name and sort direction is ascending', () => {

      component.movies = [{ "id": "1", "title" : "XYZ", "releaseDate": "2016-02-22"},{ "id": "2", "title" : "ABC", "releaseDate": "2017-02-22"}];
      let sortedMovies = [{ "id": "2", "title" : "ABC", "releaseDate": "2017-02-22"},{ "id": "1", "title" : "XYZ", "releaseDate": "2016-02-22"}];
     
      component.sortMovies();

      expect(component.movies).toEqual(sortedMovies);
  });

   it('should sort the movies by release date in descending order if the sort by is release date and sort direction is descending', () => {

      component.movies = [{ "id": "1", "title" : "XYZ", "releaseDate": "2016-02-22"},{ "id": "2", "title" : "ABC", "releaseDate": "2017-02-22"}];
      let sortedMovies = [{ "id": "2", "title" : "ABC", "releaseDate": "2017-02-22"},{ "id": "1", "title" : "XYZ", "releaseDate": "2016-02-22"}];
      component.selected = "Release Date";
      component.sorttype = "Descending";

      component.sortMovies();

      expect(component.movies).toEqual(sortedMovies);
  });

   });



