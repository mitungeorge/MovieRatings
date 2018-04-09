import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';

import { HomeComponent } from './home.component';
import { MovieService } from '../../services/movie.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let service: MovieService;

  beforeEach(() => {
    service = new MovieService(null);
    component = new HomeComponent(service);
  });

  it('should set the movies property with the items returned from the json', () => {
      let movies = [{
        "$id": "1",
        "title": "Gone Girl",
        "image": "images/movie1.jpg",
        "rating": "3",
        "releaseDate": "2014-02-22"
        }];
      spyOn(service, 'getMovies').and.callFake(() => {
        return Observable.from([ movies ])
      });

      component.ngOnInit();

      expect(component.movies).toBe(movies);

  });

});
