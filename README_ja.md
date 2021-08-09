![](./og-image.png)

# arm

@kawaiioverflow/arm は、MAL / Annict / AniList / しょぼいカレンダー間でアニメ ID をリレーショナルマッピングする JSON ベースのデータベースです。

## インストール

```sh
npm i @kawaiioverflow/arm
```

or

```sh
yarn add @kawaiioverflow/arm
```

## 使い方

```ts
import { arm } from '@kawaiioverflow/arm'

console.log(arm)
/*
[
  {
    "mal_id": 5114,
    "anilist_id": 5114,
    "annict_id": 1745,
    "syobocal_tid": 1575
  },
  ...
]
*/
```

## データベース

### 戻り値

`Anime` 型の配列を返します。

```ts
type Anime = {
  mal_id?: number
  annict_id?: number
  anilist_id?: number
  syobocal_tid?: number
}
```

### 対応サービス

- MyAnimeList
- Annict
- AniList
- しょぼいカレンダー

<small>将来的に Kitsu にも対応する予定です。</small>

### リリースサイクル

週に一回、npm で配信します。

---

<small><a href="https://github.com/manami-project/anime-offline-database">manami-project/anime-offline-database</a>にインスパイアされました。</small>
