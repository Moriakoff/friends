import {Component, OnInit} from '@angular/core';
import {Locale} from "./model/Locale";
import Friend from "./model/Friend";
import * as _ from "lodash";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'friends';
  locales: Map<string, string[]> = new Map<string, string[]>();
  friends: Friend[] = [];
  friendToEdit: Friend;

  ngOnInit(): void {
    this.locales.set("Israel", ["Tel-aviv", "Haifa", "Modiin"]);
    this.locales.set("Great britain", ["London", "Manchester", "Birmingham"]);
    this.friendToEdit = new Friend("", "", "", "", "", "");
  }


  saveToLocalesMap($event: Locale) {
    if (this.locales.has($event.country)) {
      this.locales.get($event.country).push($event.city);
    } else {
      let arr: string[] = [];
      arr.push($event.city);
      this.locales.set($event.country, arr)
    }
  }

  addFriend($event: Friend) {
    if (!this.friendExists($event.fName, $event.lName)) {
      this.friends.push($event);
    } else {
      let index = this.getFriendIndex($event);
      this.friends[index] = $event;
    }
  }

  private friendExists(fName: string, lName: string) {
    return this.friends.some(function (friend) {
      return friend.fName === fName && friend.lName == lName;
    });
  }

  private getFriendIndex(friend: Friend): number {
    return _.findIndex(this.friends, function (f) {
      return f.fName === friend.fName && f.lName === friend.lName;
    });
  }
}
