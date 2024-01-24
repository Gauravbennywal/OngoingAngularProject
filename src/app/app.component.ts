import { Component } from '@angular/core';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  // template: `<h1>Hello World from inline template</h1>
  // <p>Angular</p>
  // `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'hotelinventoryapp';

  role = 'Guest';

}
