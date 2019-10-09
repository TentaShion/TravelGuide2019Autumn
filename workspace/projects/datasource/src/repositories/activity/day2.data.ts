import { Action } from 'core'
import { IStoreEntity } from './i.store.entity'

/**
 * 2日目のデータ
 */
export const day2Data: IStoreEntity[] = [
    {
        action: [
            {
                source: 'https://goo.gl/maps/ovmfF89CTZP2',
                type: Action.ShowMap
            },
            {
                source: '000-0000-0000',
                type: Action.CallPhone
            },
            {
                source: 'https://mokumokulog.netlify.com',
                type: Action.ShowWebSite
            }
        ],
        date_finish: '2019-10-05T15:19:26+09:00',
        date_start: '2019-10-05T15:19:26+09:00',
        description: 'サンプル２なのです',
        icon_name: 'pin',
        title: 'サンプル２'
    }
]
