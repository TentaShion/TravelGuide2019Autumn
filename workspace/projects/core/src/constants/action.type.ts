/**
 * アクションタイプ
 */
export enum Action {

    /** 電話をかける */
    CallPhone = 'phone',

    /** 地図を表示する */
    ShowMap = 'map',

    /** Web サイトを表示する */
    ShowWebSite = 'web',
}

/**
 * アクションタイプの型定義
 *
 * 電話をかける: 'phone'
 * 地図を表示する: 'map'
 * Web サイトを表示する: 'web'
 */
export type ActionType = 'map' | 'phone' | 'web'
