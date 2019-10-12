import { Component, Input } from '@angular/core'

import { Action, IActivityEntity } from 'core'

/**
 * スケジュール項目UI
 */
@Component({
  selector: 'app-schedule-item',
  templateUrl: './schedule-item.component.html',
})
export class ScheduleItemComponent {

  actionType = Action

  /** 表示データ */
  @Input() data: IActivityEntity
}
