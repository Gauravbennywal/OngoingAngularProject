import {
  Component,
  DoCheck,
  OnInit,
  ViewChild,
  AfterViewInit,
  AfterViewChecked,
  SimpleChanges,
  ViewChildren,
  QueryList,
  OnDestroy,
} from '@angular/core';
import { Room, RoomList } from './room';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss',
})
// interface for lifecycle hook (ngOnInit)
export class RoomsComponent
  implements OnInit, DoCheck, AfterViewInit, AfterViewChecked
{
  // Used for interpolation binding
  hotelName = 'Hilton Hotel';
  // Used for property binding
  numberOfRooms = 10;
  //Used for event binding
  hideRooms = false;

  selectedRoom!: RoomList;

  // linked to room.ts
  // imported automatically
  rooms: Room = {
    totalRooms: 20,
    availableRooms: 12,
    bookedRooms: 5,
  };

  title = 'Rooms List';

  roomList: RoomList[] = [];

  //* Using View Child we have created a new instance of HeaderComponent
  //* any method or property can be accessed from this component
  //! asynchronous code? static: true?
  @ViewChild(
    HeaderComponent
    //,{static: true}
  )
  headerComponent!: HeaderComponent;

  @ViewChildren(HeaderComponent)
  headerChildrenComponent!: QueryList<HeaderComponent>;

  constructor() {}

  //* Lifecycle Hook (ngOnInit)
  ngOnInit(): void {
    //console.log(this.headerComponent);
    this.roomList = [
      {
        roomNumber: 1,
        roomType: 'Single',
        amenities: 'TV, AC, Heater',
        price: 100,
        photos:
          'https://unsplash.com/photos/a-body-of-water-with-a-dock-in-the-middle-of-it-cTgH9icLH68',
        checkinTime: new Date(2021, 1, 1, 12, 0, 0),
        checkoutTime: new Date(2021, 1, 1, 12, 0, 0),
        rating: 4.7,
      },
      {
        roomNumber: 2,
        roomType: 'Double',
        amenities: 'TV, AC, Heater',
        price: 200,
        photos:
          'https://unsplash.com/photos/a-body-of-water-with-a-dock-in-the-middle-of-it-cTgH9icLH68',
        checkinTime: new Date(2021, 1, 1, 12, 0, 0),
        checkoutTime: new Date(2021, 1, 1, 12, 0, 0),
        rating: 3.2,
      },
      {
        roomNumber: 3,
        roomType: 'Double',
        amenities: 'TV, AC, Heater',
        price: 200,
        photos:
          'https://unsplash.com/photos/a-body-of-water-with-a-dock-in-the-middle-of-it-cTgH9icLH68',
        checkinTime: new Date(2021, 1, 1, 12, 0, 0),
        checkoutTime: new Date(2021, 1, 1, 12, 0, 0),
        rating: 2.5,
      },
    ];
  }

  //* try to avoid because is costly. (ngDoCheck) catches all changes.
  ngDoCheck() {
    console.log('ngDoCheck called');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called');
    this.headerComponent.title = 'Rooms View';
    //! the line below doesn't work because the view is not initialized yet
    //! how do i initialize the view?
    this.headerChildrenComponent.last.title = "Last Title";
    
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called');
    this.headerComponent.title = 'Rooms View';
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    console.log('ngOnChanges called in Parent');
  }

  //Used for event binding
  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = 'Rooms List';
  }

  selectRoom(room: RoomList) {
    console.log('Room selected:', room);
    this.selectedRoom = room;
  }

  addRoom() {
    const room: RoomList = {
      roomNumber: 4,
      roomType: 'Double',
      amenities: 'TV, AC, Heater',
      price: 200,
      photos:
        'https://unsplash.com/photos/a-body-of-water-with-a-dock-in-the-middle-of-it-cTgH9icLH68',
      checkinTime: new Date(2021, 1, 1, 12, 0, 0),
      checkoutTime: new Date(2021, 1, 1, 12, 0, 0),
      rating: 2.5,
    };
    // Below commented code will make the roomList array mutable
    // this.roomList.push(room);

    // the spread operator (...) is used to create a new array
    // the code below will make the roomList array immutable
    this.roomList = [...this.roomList, room];
  }
  
}
