import { Component, OnInit } from '@angular/core';
import { AppserviceService } from '../appservice.service';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit {
id:string;
response:any =[];
flag: string;
isEnabled:boolean;
langResponse:any =[];
isLoading: boolean
  constructor(private service: AppserviceService, private route: ActivatedRoute, private loc: Location, private router: Router) { 

    this.id = route.snapshot.params.id;
  }

  ngOnInit() {
    this.getCountryDetails(this.id);
  }
  
  // Country Details
  getCountryDetails(id) {
    this.isLoading = true;
    this.service.getCountryDetails(id).subscribe(data => {
      this.isEnabled = true;
      this.response = data;
      this.flag = this.response.flag;
      this.isLoading = false;
      
    });
  }
 
  goBack() {
    this.loc.back();
  }


  // Currency Details
  currency(item) {
    this.isEnabled = false;
    this.isLoading = true;
    this.service.getCurrency(item.code).subscribe(data => {
      this.langResponse = data;
      this.isLoading = false;
      
    })
  }
  
  view(data) {
    this.getCountryDetails(data);
    
  }

    // Langauge Detais
  langauge(item) {
    this.isEnabled = false;
    this.isLoading = true;
    this.service.getLangauge(item.iso639_1).subscribe(data => {
      this.langResponse = data;
    this.isLoading = false;

    })
  }

}
