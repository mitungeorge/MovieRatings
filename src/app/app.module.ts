import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RatingModule } from "ngx-rating";


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MovieService } from './services/movie.service';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { ChartService } from './services/chart.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MoviesListComponent,
    MovieItemComponent,
    BarChartComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpModule,
    FormsModule,
    RatingModule
  ],
  providers: [
  	MovieService,
  	ChartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
