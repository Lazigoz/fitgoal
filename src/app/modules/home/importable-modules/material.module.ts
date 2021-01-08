import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatInputModule } from '@angular/material/input';

const materials = [MatCardModule, MatProgressBarModule, MatInputModule];

@NgModule({
  imports: materials,
  exports: materials,
})
export class MaterialModule { }
