import { ActionType } from 'core'

/**
 * 保存データ
 */
export interface IStoreEntity {

    /** 操作アクション */
    action?: {

        /** アクション内容(URL or 電話番号) */
        source: string

        /** アクションタイプ */
        type: ActionType
    }[]

    /** 終了日時 */
    date_finish?: string

    /** 開始日時 */
    date_start?: string

    /** 概要 */
    description?: string

    /** アイコン名 */
    icon_name: string

    /** 表示タイトル */
    title: string
}
