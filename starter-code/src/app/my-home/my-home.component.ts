import { Component, OnInit } from '@angular/core';
import { Cinema } from '../cinema.service';

@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.css'],
  providers: [Cinema]
})
export class MyHomeComponent implements OnInit {

  constructor(public cinema: Cinema) {}

  ngOnInit() {

  }

}
