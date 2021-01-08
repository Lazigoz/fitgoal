import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingPageComponent } from './pages/loading-page/loading-page.component';
import { OnboardingPageComponent } from './pages/onboarding-page/onboarding-page.component';
import { MaterialModule } from './importable-modules/material.module';
import { BootstrapModule } from './importable-modules/bootstrap.module';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { AuthTemplateComponent } from './components/auth-template/auth-template.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

@NgModule({
  declarations: [LoadingPageComponent, OnboardingPageComponent, WelcomePageComponent, SignupPageComponent, AuthTemplateComponent, LoginPageComponent],
  imports: [CommonModule, MaterialModule, BootstrapModule],
  exports: [LoadingPageComponent, OnboardingPageComponent],
})
export class HomeModule { }
