import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MovieService {

  constructor(private _http : Http) { }

  getMovies(){
  	return this._http.get('../assets/movies.json').map(res => res.json());
  }

}
