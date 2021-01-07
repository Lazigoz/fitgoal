import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';

const materials = [MatCardModule, MatProgressBarModule];

@NgModule({
  imports: materials,
  exports: materials,
})
export class MaterialModule {}
