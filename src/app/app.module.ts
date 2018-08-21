import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpModule } from '@angular/http';

import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { CountryViewComponent } from './country-view/country-view.component';
import { CountryDetailsComponent } from './country-details/country-details.component';
import { CountryListComponent } from './shared/country-list/country-list.component';
import { LoaderComponent } from './shared/loader/loader.component';

const routes = [{path:'', component: DashboardComponent},
                {path:'country-list/:id', component: CountryViewComponent},
               {path:'country-details/:id', component:CountryDetailsComponent}]

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CountryViewComponent,
    CountryDetailsComponent,
    CountryListComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
