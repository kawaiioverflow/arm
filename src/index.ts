import { version, generatorVersion, generatedAt } from './package'

type ArmAnimeItem = {
  mal_id?: number
  anilist_id?: number
  annict_id?: number
  syobocal_tid?: number
}

const arm: ArmAnimeItem[] = require('../arm')

export { arm, version, generatorVersion, generatedAt }
