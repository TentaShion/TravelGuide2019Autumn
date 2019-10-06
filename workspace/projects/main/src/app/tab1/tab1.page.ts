import { Component, OnDestroy, OnInit, } from '@angular/core';
import { Subscription } from 'rxjs';

import { IActivityEntity } from 'core';
import { Day1UseCase } from 'datasource';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnDestroy, OnInit {

  private loadTask: Subscription


  constructor(
    private day1UseCase: Day1UseCase
  ) {
  }

  ngOnInit(): void {
    this.loadTask = this.day1UseCase.load().subscribe(
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
