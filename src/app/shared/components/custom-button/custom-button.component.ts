import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.css']
})
export class CustomButtonComponent implements OnInit {

  clicked = false;

  @Input() inStyle: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
