import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { Day3Page } from './day3.page'
import { SchedulePageModule } from '../../_templates/schedule-page/schedule-page.module'

@NgModule({
  declarations: [
    Day3Page
  ],
  imports: [
    RouterModule.forChild([{ path: '', component: Day3Page }]),
    SchedulePageModule
  ]
})
export class Day3PageModule { }
