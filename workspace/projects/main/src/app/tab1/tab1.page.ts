import { Component, OnDestroy, OnInit, } from '@angular/core';
import { Subscription } from 'rxjs';

import { IActivityEntity, Tabs } from 'core';
import { ShowActivityUseCase } from 'datasource';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnDestroy, OnInit {

  private loadTask: Subscription


  constructor(
    private showActivityUseCase: ShowActivityUseCase
  ) {
  }

  ngOnInit(): void {
    this.loadTask = this.showActivityUseCase.load(Tabs.Day1).subscribe(
      (data: IActivityEntity[]) => {
        console.log(JSON.stringify(data))
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
