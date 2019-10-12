import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { IonicModule } from '@ionic/angular'

import { TabsPage } from './tabs.page'
import { TabsPageRoutingModule } from './tabs.router.module'

@NgModule({
  declarations: [
    TabsPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsPageRoutingModule
  ]
})
export class TabsPageModule { }
