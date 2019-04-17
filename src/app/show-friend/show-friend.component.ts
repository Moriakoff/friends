import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import Friend from "../add-friend/Friend";


@Component({
  selector: 'app-show-friend',
  templateUrl: './show-friend.component.html',
  styleUrls: ['./show-friend.component.css']
})
export class ShowFriendComponent implements OnInit {

  @Input("myFriends") private friends: Friend[];
  @Output() public showFriendEvent = new EventEmitter();
  @Output() public editFriendEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  removeFriend(friend: Friend) {
    this.showFriendEvent.emit(this.friends.filter(value => value !== friend));
  }

  sendFriendToEdit(friend: Friend) {
    console.log(friend);
    this.editFriendEvent.emit(friend);
  }
}
