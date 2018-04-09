import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RatingModule } from "ngx-rating";

import { MovieItemComponent } from './movie-item.component';
import { ChartService } from '../../services/chart.service';

describe('MovieItemComponent', () => {
  let testHostComponent: TestHostComponent;
  let testHostFixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        RatingModule
       ],
      declarations: [MovieItemComponent, TestHostComponent],
      providers: [
      ChartService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    testHostFixture = TestBed.createComponent(TestHostComponent);
    testHostComponent = testHostFixture.componentInstance;
    testHostFixture.detectChanges();
  });

  it('should show movie name passed from movie list', () => {
    expect(testHostFixture.nativeElement.querySelector('strong').innerText).toEqual('ABC');
  });


  it('should show release date in the format dd-MMM-yy', () => {
    expect(testHostFixture.nativeElement.querySelector('#release').innerText).toEqual('01-Jan-18');
  });

   it('should show  rating if rating is not 0', () => {
    expect(testHostFixture.nativeElement.querySelector('#rating').innerText).toBe('Rating 4');
  });


  @Component({
    selector: `host-component`,
    template: `<app-movie-item [movie]="movie"></app-movie-item>`
  })
  class TestHostComponent {
    
    movie = { "title": "ABC", "releaseDate": "2018-01-01", "rating": "4"}

  }





});

