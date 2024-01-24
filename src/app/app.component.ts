import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  // template: `<h1>Hello World from inline template</h1>
  // <p>Angular</p>
  // `,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'hotelinventoryapp';

  role = 'Guest';

// template reference variable usage. declared in app.component.html
@ViewChild('name',{ static: true }) name!: ElementRef;

ngOnInit(): void {
this.name.nativeElement.innerText = "Hilton Hotel";
}

// //* ViewContainerRef will help us to create a component dynamically
// @ViewChild('user', { read: ViewContainerRef} ) vcr!: ViewContainerRef;
  // ngAfterViewInit(): void {
  //     const componentRef = this.vcr.createComponent(RoomsComponent);
  //     // any property can be modified with ViewChild
  //     componentRef.instance.numberOfRooms = 50;
  // }
}
