import { NgModule } from '@angular/core'
import { IonicModule } from '@ionic/angular'

import { ShowMapItemOptionComponent } from './show-map-item-option.component'

/**
 * マップを表示するオプション項目用モジュール
 */
@NgModule({
  declarations: [
    ShowMapItemOptionComponent
  ],
  exports: [
    ShowMapItemOptionComponent
  ],
  imports: [
    IonicModule
  ]
})
export class ShowMapItemOptionModule { }
