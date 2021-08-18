import { version, generatorVersion, generatedAt } from './package'

type Anime = {
  mal_id?: number
  anilist_id?: number
  annict_id?: number
  syobocal_tid?: number
}

const arm: Anime[] = require('../arm')

export { arm, version, generatorVersion, generatedAt }
