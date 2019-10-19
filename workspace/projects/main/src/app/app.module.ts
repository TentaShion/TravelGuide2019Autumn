import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouteReuseStrategy } from '@angular/router'
import { IonicModule, IonicRouteStrategy } from '@ionic/angular'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { CIShowActivityUseCase } from 'core'
import { ActivityRepositoryKey, DataSourceModule, ShowActivityUseCase } from 'datasource'

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent
  ],
  entryComponents: [],
  imports: [
    AppRoutingModule,
    BrowserModule,
    DataSourceModule,
    IonicModule.forRoot({
      mode: 'md'
    })
  ],
  providers: [
    { provide: ActivityRepositoryKey, useValue: 'ActivityRepository' },
    { provide: CIShowActivityUseCase, useClass: ShowActivityUseCase },
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],

})
export class AppModule { }
