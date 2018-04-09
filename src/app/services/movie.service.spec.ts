import { TestBed, inject } from '@angular/core/testing';
import { HttpModule, Http, ConnectionBackend, RequestOptions, BaseRequestOptions, RequestMethod, Response, ResponseOptions } from '@angular/http';
import { MockBackend,  MockConnection } from '@angular/http/testing';

import { MovieService } from './movie.service';

describe('MovieService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
    	imports: [HttpModule],
      providers: [MovieService]
      
    });
  });

  it('should be created', inject([MovieService], (service: MovieService) => {
    expect(service).toBeTruthy();
  }));

});

describe('MovieService', () => {
  let service: MovieService;
  let backend: MockBackend;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: ConnectionBackend, useClass: MockBackend },
        { provide: RequestOptions, useClass: BaseRequestOptions },
        Http,
        MovieService,
      ],
    });

    service = TestBed.get(MovieService);
    backend = TestBed.get(ConnectionBackend);
  });

  it('should make a GET to the API on fetch', done => {
    backend.connections.subscribe((connection: MockConnection) => {
      expect(connection.request.url).toEqual('../assets/movies.json');
      expect(connection.request.method)
        .toEqual(RequestMethod.Get, 'expected GET request');
      done();
    });

    service.getMovies();
  });

  it('should expose the first result from the response', () => {
    let expectedMovie = {
    "$id": "6",
    "title": "If I Stay",
    "image": "images/movie6.jpg", 
    "rating": "0",
    "releaseDate": "2018-01-01"
  };

    backend.connections.subscribe((connection: MockConnection) => {
      connection.mockRespond(new Response(new ResponseOptions({
        status: 200,
        body: { results: [expectedMovie] },
      })));
    });

    service.getMovies();

    service.getMovies().map(movie => {
      expect(movie).toEqual(expectedMovie);
    });
  });

});
