import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieCardComponent } from './cards/movie-card/movie-card.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { AvengersMoviePageComponent } from './pages/avengers-movie-page/avengers-movie-page.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DetailCardComponent } from './cards/detail-card/detail-card.component';
import { MovieDetailPageComponent } from './pages/movie-detail-page/movie-detail-page.component';
import { MovieListCardComponent } from './cards/movie-list-card/movie-list-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieCardComponent,
    LandingPageComponent,
    AvengersMoviePageComponent,
    DetailCardComponent,
    MovieDetailPageComponent,
    MovieListCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
