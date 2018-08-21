import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppserviceService {

  constructor(private http: HttpClient) { }

  url = 'https://restcountries.eu/rest/v2';
  currencyList:any = [];
  langList:any = [];
  regList:any = [];



  getAllCountries() {
   let response = this.http.get(this.url + '/all');
   return response;
  }

  getRegion(region) {
    let response = this.http.get(this.url + '/region/' + region);
    return response;
  }

  getCurrency(code) {
    let response = this.http.get(this.url + '/currency/' + code);
    return response;
  }


  getCountryDetails(code) {
    let response = this.http.get(this.url + '/name/' + code);
    return response;
  }

  getLangauge(code) {
    let response = this.http.get(this.url + '/lang/' + code);
    return response;
  }
}
