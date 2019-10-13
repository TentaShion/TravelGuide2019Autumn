import { Component, OnDestroy, OnInit } from '@angular/core'
import { Subscription } from 'rxjs'

import { IActivityEntity, Tabs } from 'core'
import { ShowActivityUseCase } from 'datasource'

@Component({
  selector: 'app-day2',
  templateUrl: './day2.page.html'
})
export class Day2Page implements OnDestroy, OnInit {

  data: IActivityEntity[]
  private loadTask: Subscription
  readonly title = '２日目'


  constructor(
    private showActivityUseCase: ShowActivityUseCase
  ) {
  }

  ngOnInit() {
    this.loadTask = this.showActivityUseCase.load(Tabs.Day2).subscribe(
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
