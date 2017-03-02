import { Component } from '@angular/core';
import { Cinema } from './cinema.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Cinema]
})
export class AppComponent {
  title = 'Cinema Paradise';
}
