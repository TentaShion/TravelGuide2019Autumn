import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { Tab2Page } from './tab2.page';

@NgModule({
  declarations: [
    Tab2Page
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: Tab2Page }])
  ]
})
export class Tab2PageModule { }
