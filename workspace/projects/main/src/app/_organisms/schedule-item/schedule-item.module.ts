import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { IonicModule } from '@ionic/angular'

import { ShowMapItemOptionModule } from '../../_atoms/show-map-item-option/show-map-item-option.module'
import { ShowWebItemOptionModule } from '../../_atoms/show-web-item-option/show-web-item-option.module'
import { ScheduleItemComponent } from './schedule-item.component'

/**
 * スケジュール項目UI 用モジュール
 */
@NgModule({
  declarations: [
    ScheduleItemComponent
  ],
  exports: [
    ScheduleItemComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    ShowMapItemOptionModule,
    ShowWebItemOptionModule
  ]
})
export class ScheduleItemModule { }
