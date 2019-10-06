import { Observable } from 'rxjs';

import { IActivityEntity } from '../entities/i.activity.entity';

/**
 * アクティビティの使い方の定義
 */
export interface IShowActivityUseCase {

    /** データの読み込み */
    load(): Observable<IActivityEntity[]>
}
