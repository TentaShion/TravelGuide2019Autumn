import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { concatMap, concatMapTo } from 'rxjs/operators'

import { CIShowActivityUseCase, IActivityEntity, TabsType } from 'core'
import { ActivityRepository } from '../repositories/activity/activity.repository'

/**
 * アクティビティの使い方の実装
 */
@Injectable({
    providedIn: 'root'
})
export class ShowActivityUseCase implements CIShowActivityUseCase {

    constructor(
        private activityRepository: ActivityRepository
    ) {
    }


    /**
     * データの読み込み
     *
     * @param type データ種別
     */
    load(type: TabsType): Observable<IActivityEntity[]> {
        return this.activityRepository.load(type).pipe(
            concatMap((stored: IActivityEntity[]) => {
                if (Array.isArray(stored) && 0 < stored.length) {
                    return of(stored)
                } else {
                    return this.activityRepository.initializeStorage().pipe(
                        concatMapTo(this.activityRepository.load(type))
                    )
                }
            })
        )
    }
}
