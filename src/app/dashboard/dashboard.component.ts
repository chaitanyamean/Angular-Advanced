import { Component, OnInit } from '@angular/core';
import { AppserviceService } from '../appservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private service: AppserviceService, private router: Router) { }

  regList = [];
  countryList: any = [];
  currencyList:any = [];
  curFilteredList:any = [];
  mapsArray =['../assets/aa.jpg', '../assets/ee.png', '../assets/afr.png', '../assets/oce.jpg', '../assets/americans.jpeg', '../assets/polars.png'];
  finalList = [];
  langList:any = [];
  isLoading: boolean;

  ngOnInit() {
    this.isLoading = true;
    this.service.getAllCountries().subscribe(data => {
      this.countryList = data;
      for (let item of this.countryList) {
        if(item.region === "") {
        } else {
          this.regList.push(item.region);
        }
        for(let currency of item.currencies){
            this.currencyList.push(currency);
        }
        for(let language of item.languages){
          this.langList.push(language);
      }
    }
      this.regList = this.filterData(this.regList);
      for (let item of this.regList){
       this.finalList.push({'region': item, 'image':''});
      }
      let i=0;
      for (let item of this.mapsArray){
      this.finalList[i].image = item;
        i++;
      }
      this.currencyList = this.filterData(this.currencyList)
      localStorage.setItem('currency', this.currencyList);
      this.isLoading = false;
    })
  }

  filterData(data) {
    let filteredData = data.filter(function (elem, index, self) {
      return index === self.indexOf(elem);
    })
    return filteredData;
  }

  onKeydown(event) {
    if (event.key === "Enter") {
    }
  }
// Region Details

  region(data) {
    this.service.currencyList  = this.currencyList;
    this.service.langList = this.langList;
    this.service.regList = this.regList;
    this.router.navigate(['country-list', data])
  }
}
