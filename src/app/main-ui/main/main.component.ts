import { Component } from '@angular/core';
import {PostCardComponent} from '../../common-ui/post-card/post-card.component';

@Component({
  selector: 'app-main',
  imports: [PostCardComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
