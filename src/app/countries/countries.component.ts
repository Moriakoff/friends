import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Locale} from "../model/Locale";

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  @Output() public countryEvent = new EventEmitter();

  country: string;
  city: string;


  constructor() { }

  ngOnInit() {
  }

  sendLocale() {
    this.countryEvent.emit(new Locale(this.country, this.city));
  }
}
