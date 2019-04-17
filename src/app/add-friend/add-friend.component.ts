import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import Friend from "./Friend";

@Component({
  selector: 'app-add-friend',
  templateUrl: './add-friend.component.html',
  styleUrls: ['./add-friend.component.css']
})
export class AddFriendComponent implements OnInit {

  @Input("savedLocale") private locales: Map<string, string[]>;
  @Output() public addFriendEvent = new EventEmitter();
  @Input("editFriend") private friendToEdit: Friend;

  fName: string;
  lName: string;
  phone: string;
  email: string;
  country: string;
  city: string;


  constructor() {
  }

  ngOnInit() {
  }

  saveFriend() {
    let friend = new Friend(this.fName, this.lName, this.phone, this.email, this.country, this.city);

    this.clear();
    this.addFriendEvent.emit(friend);
  }

  private clear() {
    this.fName = "";
    this.lName = "";
    this.phone = "";
    this.email = "";
    this.country = "";
    this.city = "";
  }

  loadedCountries(): string[] {
    return Array.from(this.locales.keys());
  }

  loadedCities(country: string): string[]{
    let emptyArray: string[] = [];

    if(country != undefined){
      return this.locales.get(country);
    } else return emptyArray;
  }

}
