import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MyServiceService} from '../services/my-service.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-angular-app';
  myName;
  constructor(private myService: MyServiceService) {
    this.myName = this.myService.getMyName();
  }
  someMethod() {

  }
}
