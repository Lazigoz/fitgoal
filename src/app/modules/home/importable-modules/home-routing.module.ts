import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoadingPageComponent } from '../pages/loading-page/loading-page.component';
import { LoginPageComponent } from '../pages/login-page/login-page.component';
import { OnboardingPageComponent } from '../pages/onboarding-page/onboarding-page.component';
import { SignupPageComponent } from '../pages/signup-page/signup-page.component';
import { WelcomePageComponent } from '../pages/welcome-page/welcome-page.component';
import { WizardPageComponent } from '../pages/wizard-page/wizard-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/loading', pathMatch: 'full' },
  { path: 'loading', component: LoadingPageComponent },
  { path: 'onboarding', component: OnboardingPageComponent },
  { path: 'welcome', component: WelcomePageComponent },
  { path: 'signup', component: SignupPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'wizard', component: WizardPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
