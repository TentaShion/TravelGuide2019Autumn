import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { Day1Page } from './day1.page'
import { SchedulePageModule } from '../../_templates/schedule-page/schedule-page.module'

@NgModule({
  declarations: [
    Day1Page
  ],
  imports: [
    RouterModule.forChild([{ path: '', component: Day1Page }]),
    SchedulePageModule
  ]
})
export class Day1PageModule { }
