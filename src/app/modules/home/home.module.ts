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
import { WizardPageComponent } from './pages/wizard-page/wizard-page.component';
import { TestComponent } from './components/test/test.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    LoadingPageComponent,
    OnboardingPageComponent,
    WelcomePageComponent,
    SignupPageComponent,
    AuthTemplateComponent,
    LoginPageComponent,
    WizardPageComponent,
    TestComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    BootstrapModule,
    FlexLayoutModule,
    SharedModule
  ],
  exports: [
    TestComponent
  ],
})
export class HomeModule { }
