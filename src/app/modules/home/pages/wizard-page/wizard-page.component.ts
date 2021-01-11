import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-wizard-page',
  templateUrl: './wizard-page.component.html',
  styleUrls: ['./wizard-page.component.css']
})
export class WizardPageComponent implements OnInit {

  constructor(config: NgbCarouselConfig) {
    config.showNavigationArrows = false;
    config.keyboard = false;
    config.interval = 0;
  }

  @ViewChild(NgbCarousel) carousel: NgbCarousel;

  ngOnInit(): void {
  }

  nextClicked(): void {
    this.carousel.next();
  }

}
