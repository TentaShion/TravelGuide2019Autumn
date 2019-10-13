import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { Day2Page } from './day2.page'
import { SchedulePageModule } from '../../_templates/schedule-page/schedule-page.module'

@NgModule({
  declarations: [
    Day2Page
  ],
  imports: [
    RouterModule.forChild([{ path: '', component: Day2Page }]),
    SchedulePageModule
  ]
})
export class Day2PageModule { }
