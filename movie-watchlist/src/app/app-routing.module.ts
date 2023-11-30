import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';

const routes: Routes = [{ path: '', component:LandingPageComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
