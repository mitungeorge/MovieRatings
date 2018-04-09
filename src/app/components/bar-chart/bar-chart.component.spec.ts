import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarChartComponent } from './bar-chart.component';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import { ChartService } from '../../services/chart.service';

describe('BarChartComponent', () => {
  let component: BarChartComponent;
  let service: ChartService;

  beforeEach(() => {
    service = new ChartService();
    component = new BarChartComponent(service);
  });

  it('should calculate ratings for drawing chart', () => {
      component.movies = [{"id" : "1","rating": "0"}];
      let expectedData = [1];
      component.calcRatings();
      expect(component.data).toEqual(expectedData);
  });

});