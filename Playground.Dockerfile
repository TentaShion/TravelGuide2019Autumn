# Angular CLI バージョンの指定
ARG VersionAngular=8.3.6

# Ionic CLI バージョンの指定
ARG VersionIonic=5.4.1

# Node.js バージョンの指定
ARG VersionNode=10.16.3-alpine


# Node イメージの指定
FROM node:${VersionNode}


# Node パッケージの設定
RUN yarn global add @angular/cli@${VersionAngular} ionic@${VersionIonic} \
    ## Angular でYarn の利用を既定値にする
    && ng config -g cli.packageManager yarn \
    ## Ionic でYarn の利用を既定値にする
    && ionic config set -g yarn true \
    && ionic config set -g npmClient yarn


# 公開するポートの設定
#  4200: ng e2e
#  8100: ionic serve
#  9876: ng test
# 35729: liveload
# 53703: dev logger
EXPOSE 4200 8100 9876 35729 53703


# 作業フォルダーの設定
VOLUME [ "/workspace" ]
WORKDIR /workspace


# 実行コマンドの設定
ENTRYPOINT ["/bin/sh"]
