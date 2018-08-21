import { Component, OnInit } from '@angular/core';
import { AppserviceService } from '../appservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import {Region} from './region';

@Component({
  selector: 'app-country-view',
  templateUrl: './country-view.component.html',
  styleUrls: ['./country-view.component.css']
})
export class CountryViewComponent implements OnInit {

  id: string;
  currencyList:any = [];
  langList:any =[];
  currencyName:string;
  response:any = [];
  langName:string;
  regionList:any =[];
  regionName:string;
  isLoading: boolean;

  constructor(public service: AppserviceService, private router: ActivatedRoute, private route: Router,  private loc: Location) {
    this.id = router.snapshot.params.id;
  }

  ngOnInit() {
    this.currencyName = 'Select Currency';
    this.langName = 'Select Langauge';
    this.currencyList = this.service.currencyList;
    this.langList = this.service.langList;
    this.regionList = this.service.regList;

    if(this.service.currencyList.length> 0 || this.service.langList.length>0 || this.service.regList.length>0){

      this.getRegion(this.id);
    
    } else {
      this.route.navigate(['/'])
    }
  }
  // Region Details
  getRegion(item) {
    this.isLoading = true;
    this.regionName = item;
    let region: Region = {
      region: item
    }
    this.service.getRegion(region.region).subscribe(res => {
      this.response = res;
    this.isLoading = false;
    });
  }

  // Currency Details
  currency(item) {
    this.isLoading = true;
    this.currencyName = item.name;
    this.langName = 'Select Langauge';
    this.regionName = 'Select Region'; 
    this.service.getCurrency(item.code).subscribe(data => {
      this.response = data;
      this.isLoading = false;
    })
  }
  
  view(data) {
    this.route.navigate(['country-details', data])
  }

      // Langauge Details
  language(item) {
    this.isLoading = true;
    this.currencyName = 'Select Currency';
    this.regionName = 'Select Region'; 
    this.langName = item.name;
    this.service.getLangauge(item.iso639_1).subscribe(data => {
      this.response = data;
      this.isLoading = false;
    })
  }
// Region Details
  region(item){
    this.isLoading = true;
    this.currencyName = 'Select Currency';
    this.langName = 'Select Langauge';
    this.getRegion(item);
    this.isLoading = false;
  }

  goBack() {
    this.loc.back();
  }
}
