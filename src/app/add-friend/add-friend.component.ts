import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import Friend from "../model/Friend";

@Component({
  selector: 'app-add-friend',
  templateUrl: './add-friend.component.html',
  styleUrls: ['./add-friend.component.css']
})
export class AddFriendComponent implements OnInit {

  @Input("savedLocale") private locales: Map<string, string[]>;
  @Output() public addFriendEvent = new EventEmitter();
  @Input("editFriend") private friendToEdit: Friend;

  constructor() {
  }

  ngOnInit() {

  }

  saveFriend() {
    let friend = new Friend(this.friendToEdit.fName, this.friendToEdit.lName, this.friendToEdit.phone, this.friendToEdit.email,
      this.friendToEdit.country, this.friendToEdit.city);
    friend.isSaved = true;

    console.log(friend);
    this.addFriendEvent.emit(friend);
    this.clear();
  }

  private clear() {
    this.friendToEdit = new Friend("", "", "", "", "", "");
    this.friendToEdit.isSaved = false;
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
