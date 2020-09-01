![](./og-image.png)

# arm

@kawaiioverflow/arm は、MAL / Annict / AniList / しょぼいカレンダー間でアニメ ID をリレーショナルマッピングする JSON ベースのデータベースです。

npm パッケージとして提供していて、週一回更新しています。

## 使用方法

パッケージをインストールします。

```shell
$ npm i @kawaiioverflow/arm
```

`import` して使います。

```ts
import { database } from '@kawaiioverflow/arm'

console.log(database)
```

## 対応サービス

- MyAnimeList
- Annict
- AniList
- しょぼいカレンダー

<small>将来的に Kitsu にも対応する予定。</small>

## 構造

`Anime` 型の配列を返します。 (`Anime[]` を返す)

### Anime 型

TypeScript で表すと、以下のような型です。

```ts
type Anime = {
  mal_id?: number
  annict_id?: number
  anilist_id?: number
  syobocal_tid?: number
}
```

<small>syobocal の id は tid なので、注意してください。</small>

### 例

```json
[
  {
    "mal_id": 5114
  },
  {
    "mal_id": 9253,
    "annict_id": 865,
    "syobocal_tid": 2142,
    "anilist_id": 9253
  },
  {
    "mal_id": 11061,
    "anilist_id": 11061
  },
  .
  .
  .
]
```

## バージョニング

- メジャー: 破壊的変更の追加
- マイナー: データベースの更新、新しい機能の追加 (破壊的変更は無い)
- パッチ: データベースの修正、バグの修正

---

<small><a href="https://github.com/manami-project/anime-offline-database">manami-project/anime-offline-database</a>にインスパイアされました。</small>
