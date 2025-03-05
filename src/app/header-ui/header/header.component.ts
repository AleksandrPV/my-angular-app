import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {ButtonComponent} from '../../common-ui/button/button.component';
import {Button} from 'primeng/button';


@Component({
  selector: 'app-header',
  imports: [
    NgOptimizedImage,
    ButtonComponent,
    Button,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
