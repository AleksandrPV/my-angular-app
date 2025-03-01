import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MyServiceService} from '../services/my-service.service';
import {PostCardComponent} from './common-ui/post-card/post-card.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PostCardComponent],
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
