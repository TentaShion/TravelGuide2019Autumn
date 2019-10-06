import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { concatMap, concatMapTo } from 'rxjs/operators';

import { IActivityEntity, IShowActivityUseCase } from 'core/core';
import { ActivityRepository } from '../repositories/activity/activity.repository';

/**
 * 2日目関連の使い方
 */
@Injectable({
    providedIn: 'root'
})
export class Day2UseCase implements IShowActivityUseCase {

    constructor(
        private activityRepository: ActivityRepository
    ) {
    }


    /** データの読み込み */
    load(): Observable<IActivityEntity[]> {
        const key = 'day2'
        return this.activityRepository.load(key).pipe(
            concatMap((stored: IActivityEntity[]) => {
                if (Array.isArray(stored) && 0 < stored.length) {
                    return of(stored)
                } else {
                    return this.activityRepository.initializeStorage().pipe(
                        concatMapTo(this.activityRepository.load(key))
                    )
                }
            })
        )
    }
}