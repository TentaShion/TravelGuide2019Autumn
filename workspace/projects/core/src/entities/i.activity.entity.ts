import { Moment } from "moment";

import { ActionType } from '../constants/action.type';

/**
 * アクティビティのデータ定義
 */
export interface IActivityEntity {

    /** 操作アクション */
    action?: {

        /** アクション内容(URL or 電話番号) */
        source: string

        /** アクションタイプ */
        type: ActionType
    }[]

    /** 終了日時 */
    dateFinish?: Moment

    /** 開始日時 */
    dateStart?: Moment

    /** 概要 */
    description?: string

    /** アイコン名 */
    iconName: string

    /** 表示タイトル */
    title: string
}
