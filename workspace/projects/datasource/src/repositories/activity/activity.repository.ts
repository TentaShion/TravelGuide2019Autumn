import { Inject, Injectable } from '@angular/core'
import { Plugins, StoragePlugin } from '@capacitor/core'
import * as _moment from 'moment'
import { defer, from, Observable, zip } from 'rxjs'
import { concatMapTo, map } from 'rxjs/operators'

import { IActivityEntity, Tabs, TabsType } from 'core'
import { ActivityRepositoryKey } from '../../datasource.ditoken'
import { day1Data } from './day1.data'
import { day2Data } from './day2.data'
import { day3Data } from './day3.data'
import { IStoreEntity } from './i.store.entity'

const moment = _moment

/**
 * アクティビティ関連のリポジトリ
 */
@Injectable({
    providedIn: 'root'
})
export class ActivityRepository {

    private readonly storage: StoragePlugin


    constructor(
        @Inject(ActivityRepositoryKey) private key: string
    ) {
        this.storage = Plugins.Storage
    }


    /**
     * ストレージの初期化
     */
    initializeStorage() {
        return defer(() =>
            from(this.storage.clear())
        ).pipe(
            concatMapTo(defer(() => zip(
                from(this.storage.set({
                    key: this.getKey(Tabs.Day1),
                    value: JSON.stringify(day1Data)
                })),
                from(this.storage.set({
                    key: this.getKey(Tabs.Day2),
                    value: JSON.stringify(day2Data)
                })),
                from(this.storage.set({
                    key: this.getKey(Tabs.Day3),
                    value: JSON.stringify(day3Data)
                }))
            )))
        )
    }

    /**
     * データの読み込み
     *
     * @param key 読み出し方の識別キー
     */
    load(key: TabsType): Observable<IActivityEntity[]> {
        return defer(() =>
            from(this.storage.get({ key: this.getKey(key) }))
        ).pipe(
            map<{ value: string }, IStoreEntity[]>(stored => stored && stored.value && JSON.parse(stored.value)),
            map<IStoreEntity[], IActivityEntity[]>(mapped => {
                if (Array.isArray(mapped) && 0 < mapped.length) {
                    return mapped.map<IActivityEntity>(item => ({
                        action: item.action,
                        dateFinish: item.date_finish && moment(item.date_finish),
                        dateStart: item.date_start && moment(item.date_start),
                        description: item.description,
                        iconName: item.icon_name,
                        title: item.title
                    }))
                } else {
                    return []
                }
            })
        )
    }


    /**
     * ストレージのキー名生成
     *
     * @param suffix 接尾辞
     */
    private getKey(suffix: string): string {
        return `${this.key}_${suffix}`
    }
}
