import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {
@Input() response;
@Output() viewDetails = new EventEmitter();
@Output() currencyDetails = new EventEmitter();
@Output() languageDetails = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  view(item) {
      this.viewDetails.emit(item);
  }
// Currency Details
  currency(item) {
    this.currencyDetails.emit(item);
  }

  // Language Details
  language(item) {
      this.languageDetails.emit(item);
      }
}
