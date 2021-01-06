import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingPageComponent } from './pages/loading-page/loading-page.component';
import { OnboardingPageComponent } from './pages/onboarding-page/onboarding-page.component';

@NgModule({
  declarations: [LoadingPageComponent, OnboardingPageComponent],
  imports: [
    CommonModule
  ],
  exports: [
    LoadingPageComponent,
    OnboardingPageComponent
  ]
})
export class HomeModule { }
