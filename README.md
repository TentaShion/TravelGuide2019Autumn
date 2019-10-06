# TravelGuide2019Autumn
旅にはしおりが必要ってことで、それを実装していくリポジトリです。

自作した[Ionic4Template](https://github.com/TentaShion/Ionic4AngularTemplate) をベースにしています。
詳細はそちらをご確認ください。



## 実装メモ
* 外部リソースからデータを受け取る練習のため、```projects/datasource/src/repositories/activity/i.store.entity.ts``` のように別の型を定義しています
* 定数の型制約がよく分かってないので、下記実装のように分離されてます
    * ```projects/core/src/constants/action.type.ts```
    * ```projects/core/src/entities/i.activity.entity.ts``` の```action.type```
* ライブラリのデバッグ設定は調査中です
