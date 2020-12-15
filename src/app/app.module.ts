import { NotFoundComponent } from './not-found/not-found.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {Routes, RouterModule} from '@angular/router'; // !

import { AppComponent } from './app.component';
import { CityComponent } from './city/city.component';
import { TheMostFamousAttractionComponent } from './the-most-famous-attraction/the-most-famous-attraction.component';
import { OtherAttractionsComponent } from './other-attractions/other-attractions.component';
import { PhotosComponent } from './photos/photos.component';
import { from } from 'rxjs';

///////////////// !
const appRoutes: Routes = [
  {path: '', component: CityComponent},
  {path: 'famousattraction', component: TheMostFamousAttractionComponent},
  {path: 'attractions', component: OtherAttractionsComponent},
  {path: 'photos/:id', component: PhotosComponent}, // аналог :id? (? - не работает как в React)
  {path: 'photos', component: PhotosComponent}, // ... и более общий путь
  {path: '**', component: NotFoundComponent}
];
///////////////// !

@NgModule({
  declarations: [
    AppComponent,
    CityComponent,
    TheMostFamousAttractionComponent,
    OtherAttractionsComponent,
    PhotosComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes) // !
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
