![](./og-image.png)

# arm

@kawaiioverflow/arm is a JSON-based database to relational mapping Anime ID's between MAL, Annict, AniList and Syobocal.

## Install

```sh
npm i @kawaiioverflow/arm
```

or

```sh
yarn add @kawaiioverflow/arm
```

## Usage

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

## Database

### Return values

Return an array of `Anime` type.

```ts
type Anime = {
  mal_id?: number
  annict_id?: number
  anilist_id?: number
  syobocal_tid?: number
}
```

### Statistics

<!-- start statistics -->

The database has **27206** anime, it consists of data from several services.

| Service         | Anime       |
| :-------------- | :---------- |
| MyAnimeList     | 23361 anime |
| AniList         | 18319 anime |
| Annict          | 9698 anime  |
| Syoboi Calendar | 5362 anime  |

<!-- end statistics -->

### Release cycle

Once a week, it will be delivered via npm.

---

<small>Inspired by <a href="https://github.com/manami-project/anime-offline-database">manami-project/anime-offline-database</a>.</small>
