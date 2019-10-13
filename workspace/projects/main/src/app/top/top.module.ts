import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { IonicModule } from '@ionic/angular'

import { TopPage } from './top.page'

/**
 * ルーティング設定
 */
const routes: Routes = [
  {
    path: 'top',
    component: TopPage,
    children: [
      {
        path: 'day1',
        children: [
          {
            path: '',
            loadChildren: () => import('./day1/day1.module').then(m => m.Day1PageModule)
          }
        ]
      },
      {
        path: 'day2',
        children: [
          {
            path: '',
            loadChildren: () => import('./day2/day2.module').then(m => m.Day2PageModule)
          }
        ]
      },
      {
        path: 'day3',
        children: [
          {
            path: '',
            loadChildren: () => import('./day3/day3.module').then(m => m.Day3PageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/top/day1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/top/day1',
    pathMatch: 'full'
  }
]

/**
 * トップページ用モジュール
 */
@NgModule({
  declarations: [
    TopPage
  ],
  exports: [
    RouterModule
  ],
  imports: [
    IonicModule,
    RouterModule.forChild(routes)
  ]
})
export class TopPageModule { }
