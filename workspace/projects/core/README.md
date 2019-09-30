# Core
アプリで使うデータと、アプリの使い方を定義するプロジェクトです。
[Angular CLI](https://github.com/angular/angular-cli) で作成されています。

全体的な内容は[ワークスペースのREADME](../../../README.md) を参照してください。





## ファイル構成
パス | 用途
--- | ---
./src/constans/ | アプリで使う定数群の定義
./src/entities/ | アプリで使うデータの定義
./src/usecases/ | アプリの使い方の定義
./src/public-api.ts | このライブラリで公開するモジュールの定義





## Angular について
### Code scaffolding
Run `ng generate component component-name --project core` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project core`.
> Note: Don't forget to add `--project core` or else it will be added to the default project in your `angular.json` file. 

### Build
Run `ng build core` to build the project. The build artifacts will be stored in the `dist/` directory.

### Publishing
After building your library with `ng build core`, go to the dist folder `cd dist/core` and run `npm publish`.

### Further help
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
