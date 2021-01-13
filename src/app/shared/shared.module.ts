import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomButtonComponent } from './components/custom-button/custom-button.component';
import { LoadingIndicatorComponent } from './components/loading-indicator/loading-indicator.component';



@NgModule({
  declarations: [CustomButtonComponent, LoadingIndicatorComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CustomButtonComponent,
    LoadingIndicatorComponent
  ]
})
export class SharedModule { }
