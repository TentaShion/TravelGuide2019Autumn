import { Component, Input } from '@angular/core'

import { IActivityEntity } from 'core'

/**
 * スケジュール表示ページ
 */
@Component({
  selector: 'app-schedule-page',
  templateUrl: './schedule-page.component.html'
})
export class SchedulePageComponent {

  /** 表示データ */
  @Input() data: IActivityEntity[]

  /** 表示タイトル */
  @Input() title: string
}
