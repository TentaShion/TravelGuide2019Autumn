import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { Tab1Page } from './tab1.page';

@NgModule({
  declarations: [
    Tab1Page
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }])
  ],
  providers: [
  ]
})
export class Tab1PageModule { }
