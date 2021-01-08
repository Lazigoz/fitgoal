import { NgModule } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

const components = [NgbCarouselModule];

@NgModule({
  imports: components,
  exports: components,
})
export class BootstrapModule {}
