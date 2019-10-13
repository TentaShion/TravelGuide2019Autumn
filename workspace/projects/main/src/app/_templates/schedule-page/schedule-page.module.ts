import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { IonicModule } from '@ionic/angular'

import { ScheduleItemModule } from '../../_organisms/schedule-item/schedule-item.module'
import { SchedulePageComponent } from './schedule-page.component'

/**
 * スケジュール表示ページ用のモジュール
 */
@NgModule({
  declarations: [
    SchedulePageComponent
  ],
  exports: [
    SchedulePageComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    ScheduleItemModule
  ]
})
export class SchedulePageModule { }
