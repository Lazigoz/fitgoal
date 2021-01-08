import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingPageComponent } from './pages/loading-page/loading-page.component';
import { OnboardingPageComponent } from './pages/onboarding-page/onboarding-page.component';
import { MaterialModule } from './material.module';
import { BootstrapModule } from './bootstrap.module';

@NgModule({
  declarations: [LoadingPageComponent, OnboardingPageComponent],
  imports: [CommonModule, MaterialModule, BootstrapModule],
  exports: [LoadingPageComponent, OnboardingPageComponent],
})
export class HomeModule {}
