import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoadingPageComponent } from './pages/loading-page/loading-page.component';
import { OnboardingPageComponent } from './pages/onboarding-page/onboarding-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/loading', pathMatch: 'full' },
  { path: 'loading', component: LoadingPageComponent },
  { path: 'onboarding', component: OnboardingPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
