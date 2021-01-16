import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-onboarding-page',
  templateUrl: './onboarding-page.component.html',
  styleUrls: ['./onboarding-page.component.css'],
})
export class OnboardingPageComponent implements OnInit {

  @ViewChild(NgbCarousel) carousel: NgbCarousel;

  constructor(config: NgbCarouselConfig) {
    config.showNavigationArrows = false;
    config.interval = 0;
    config.wrap = false;
  }

  nextClicked(): void {
    this.carousel.next();
  }

  ngOnInit(): void { }
}
