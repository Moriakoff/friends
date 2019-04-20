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
    this.country = "";
    this.city = "";

  }

  sendLocale() {

    if(this.city =="" || this.country ==""){
      alert("Please fill all inputs fields");
      return;
    }

    this.countryEvent.emit(new Locale(this.country, this.city));
    this.country = "";
    this.city = "";
  }
}
