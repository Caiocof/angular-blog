import { Component, OnInit } from '@angular/core';
import { dataFake } from 'src/app/mocks/dataFake';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}
  listSmallCards = dataFake
  ngOnInit(): void {}
}
