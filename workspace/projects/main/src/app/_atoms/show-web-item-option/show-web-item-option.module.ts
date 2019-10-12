import { NgModule } from '@angular/core'
import { IonicModule } from '@ionic/angular'

import { ShowWebItemOptionComponent } from './show-web-item-option.component'

/**
 * Web サイトを表示するオプション項目用モジュール
 */
@NgModule({
  declarations: [
    ShowWebItemOptionComponent
  ],
  exports: [
    ShowWebItemOptionComponent
  ],
  imports: [
    IonicModule
  ]
})
export class ShowWebItemOptionModule { }
