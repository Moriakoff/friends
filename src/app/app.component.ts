import {Component, OnInit} from '@angular/core';
import {Locale} from "./countries/Locale";
import Friend from "./add-friend/Friend";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'friends';
  locales: Map<string,string[]> = new Map<string, string[]>();
  friends: Friend[] = [];

  ngOnInit(): void {
    this.locales.set("Israel", ["Tel-aviv","Haifa","Modiin"]);
    this.locales.set("Great britain", ["London","Manchester","Birmingham"]);
  }


  saveToLocalesMap($event: Locale) {
    if(this.locales.has($event.country)){
      this.locales.get($event.country).push($event.city);
    } else {
      let arr:string[] = [];
      arr.push($event.city);
      this.locales.set($event.country,arr)
    }
  }

  addFriend($event: Friend) {
    this.friends.push($event);
  }
}
