import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  test : boolean = true;
  tab=['nom','prnenom','age'];
  name = 'Angular ' + VERSION.major;
}
