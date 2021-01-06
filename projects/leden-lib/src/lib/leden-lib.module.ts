import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LedenLibComponent } from './leden-lib.component';
import { CustomMaterialModule } from './material.module';

@NgModule({
  declarations: [LedenLibComponent],
  imports: [
    CustomMaterialModule,
    CommonModule,
  ],
  exports: [
    LedenLibComponent,
    // myclass,
  ]
})
export class LedenLibModule { }
