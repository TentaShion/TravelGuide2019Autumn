import { Plugins, StoragePlugin } from "@capacitor/core";
import * as _moment from 'moment';
import { defer, from, Observable } from 'rxjs';
import { concatMapTo, map, zip } from "rxjs/operators";

import { IActivityEntity } from 'core/core';
import { IStoreEntity } from "./i.store.entity";

const moment = _moment

/**
 * アクティビティ関連のリポジトリ
 */
export class ActivityRepository {

    private readonly key = 'ActivityRepository'
    private readonly storage: StoragePlugin


    constructor(
    ) {
        this.storage = Plugins.Storage
    }


    /**
     * ストレージの初期化
     */
    initializeStorage(): Observable<void> {
        return defer(() =>
            from(this.storage.clear)
        ).pipe(
            concatMapTo(zip(
                defer(() => from(this.storage.set({
                    key: this.getKey('day1'),
                    value: JSON.stringify(this.storeDay1())
                }))),
                defer(() => from(this.storage.set({
                    key: this.getKey('day2'),
                    value: JSON.stringify(this.storeDay2())
                }))),
                defer(() => from(this.storage.set({
                    key: this.getKey('day3'),
                    value: JSON.stringify(this.storeDay3())
                }))),
            ))
        )
    }

    /**
     * データの読み込み
     *
     * @param key 読み出し方の識別キー
     */
    load(key: 'day1' | 'day2' | 'day3'): Observable<IActivityEntity[]> {
        return defer(() =>
            from(this.storage.get({ key: this.getKey(key) }))
        ).pipe(
            map<{ value: string }, IStoreEntity[]>(stored => stored && stored.value && JSON.parse(stored.value)),
            map<IStoreEntity[], IActivityEntity[]>(mapped => {
                if (Array.isArray(mapped) && 0 < mapped.length) {
                    return mapped.map<IActivityEntity>(item => {
                        return {
                            action: item.action,
                            dateFinish: moment(item.date_finish),
                            dateStart: moment(item.date_start),
                            description: item.description,
                            iconName: item.icon_name,
                            title: item.title
                        }
                    })
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

    /**
     * 1日目のデータ
     */
    private storeDay1(): IStoreEntity[] {
        return [
            {
                action: [
                    {
                        source: 'https://goo.gl/maps/ovmfF89CTZP2',
                        type: 'map'
                    },
                    {
                        source: '000-0000-0000',
                        type: 'phone'
                    },
                    {
                        source: 'https://mokumokulog.netlify.com',
                        type: 'web'
                    }
                ],
                date_finish: '2019-10-04T15:19:26+09:00',
                date_start: '2019-10-04T15:19:26+09:00',
                description: 'サンプル１なのです',
                icon_name: 'pin',
                title: 'サンプル１'
            }
        ]
    }

    /**
     * 2日目のデータ
     */
    private storeDay2(): IStoreEntity[] {
        return [
            {
                action: [
                    {
                        source: 'https://goo.gl/maps/ovmfF89CTZP2',
                        type: 'map'
                    },
                    {
                        source: '000-0000-0000',
                        type: 'phone'
                    },
                    {
                        source: 'https://mokumokulog.netlify.com',
                        type: 'web'
                    }
                ],
                date_finish: '2019-10-05T15:19:26+09:00',
                date_start: '2019-10-05T15:19:26+09:00',
                description: 'サンプル２なのです',
                icon_name: 'pin',
                title: 'サンプル２'
            }
        ]
    }

    /**
     * 3日目のデータ
     */
    private storeDay3(): IStoreEntity[] {
        return [
            {
                action: [
                    {
                        source: 'https://goo.gl/maps/ovmfF89CTZP2',
                        type: 'map'
                    },
                    {
                        source: '000-0000-0000',
                        type: 'phone'
                    },
                    {
                        source: 'https://mokumokulog.netlify.com',
                        type: 'web'
                    }
                ],
                date_finish: '2019-10-06T15:19:26+09:00',
                date_start: '2019-10-06T15:19:26+09:00',
                description: 'サンプル３なのです',
                icon_name: 'pin',
                title: 'サンプル３'
            }
        ]
    }
}
