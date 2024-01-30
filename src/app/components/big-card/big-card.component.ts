import { Component, Input, OnInit } from '@angular/core';
import { RequiredValidator } from '@angular/forms';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css'],
})
export class BigCardComponent implements OnInit {
  @Input()cardImage: string = 'https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=';
  @Input()cardTitle: string = '';
  @Input()cardDescription: string = '';

  constructor() {}

  ngOnInit(): void {}
}
