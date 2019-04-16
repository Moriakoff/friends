import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowFriendComponent } from './show-friend.component';

describe('ShowFriendComponent', () => {
  let component: ShowFriendComponent;
  let fixture: ComponentFixture<ShowFriendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowFriendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowFriendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
