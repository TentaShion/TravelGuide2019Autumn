import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { IonicModule } from '@ionic/angular'

import { ScheduleItemComponent } from '../_organisms/schedule-item/schedule-item.component'
import { ScheduleItemModule } from '../_organisms/schedule-item/schedule-item.module'
import { Tab1Page } from './tab1.page'

@NgModule({
  declarations: [
    Tab1Page
  ],
  entryComponents: [
    ScheduleItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }]),
    ScheduleItemModule
  ],
  providers: [
  ]
})
export class Tab1PageModule { }
