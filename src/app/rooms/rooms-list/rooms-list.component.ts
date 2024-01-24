// reusable component
// doesn't need to know where the data is coming
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { RoomList } from '../room';

@Component({
  selector: 'hinv-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.scss',
  //* OnPush can only be used if the component is not modifying any data internally
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomsListComponent implements OnInit, OnChanges {
  // @Input is a decorator that allows us to pass data from a parent component to a child component
  // property "rooms" becomes a property on top of 'hinv-rooms-list'
  // anyone can pass the data by using this property to this particular component
  @Input() rooms: RoomList[] = [];

  @Input() title: string = '';

  // @Output is a decorator that allows us to pass data from a child component to a parent component
  // selectedRoom becomes a property on top of 'hinv-rooms-list'
  @Output() selectedRoom = new EventEmitter<RoomList>();

  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    console.log('ngOnChanges called in Child');
    //* if the title property changes make uppercase
    //* used to update something when new data is passed
    if (changes ['title']) {
      this.title = changes['title'].currentValue.toUpperCase();
    }
  }

  ngOnInit(): void {}

  // supposed to get the RoomList object and pass i
  // connected to the function in rooms-list.component.html
  selectRoom(room: RoomList) {
    this.selectedRoom.emit(room);
  }
}
