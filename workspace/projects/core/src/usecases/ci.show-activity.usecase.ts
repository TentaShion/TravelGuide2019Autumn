import { Observable } from 'rxjs'

import { TabsType } from '../constants/tabs.type'
import { IActivityEntity } from '../entities/i.activity.entity'

/**
 * アクティビティの使い方の定義
 */
export abstract class CIShowActivityUseCase {

    /**
     * データの読み込み
     *
     * @param type データ種別
     */
    abstract load(type: TabsType): Observable<IActivityEntity[]>
}
