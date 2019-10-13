import { Component, OnDestroy, OnInit } from '@angular/core'
import { Subscription } from 'rxjs'

import { IActivityEntity, Tabs } from 'core'
import { ShowActivityUseCase } from 'datasource'

@Component({
  selector: 'app-day1',
  templateUrl: './day1.page.html'
})
export class Day1Page implements OnDestroy, OnInit {

  data: IActivityEntity[]
  private loadTask: Subscription
  readonly title = '１日目'


  constructor(
    private showActivityUseCase: ShowActivityUseCase
  ) {
  }

  ngOnInit() {
    this.loadTask = this.showActivityUseCase.load(Tabs.Day1).subscribe(
      (data: IActivityEntity[]) => {
        this.data = data
      },
      error => {
        console.error(error)
      }
    )
  }

  ngOnDestroy(): void {
    this.loadTask && this.loadTask.unsubscribe()
  }
}
