import { NgModule } from '@angular/core';

import { ActivityRepository } from './repositories/activity/activity.repository';

/**
 * DataSource プロジェクトのModule 設定
 */
@NgModule({
  providers: [
    ActivityRepository
  ]
})
export class DataSourceModule { }
