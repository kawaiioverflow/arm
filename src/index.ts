type ArmAnimeItem = {
  mal_id?: number
  anilist_id?: number
  annict_id?: number
  syobocal_tid?: number
}

type PackageJson = {
  [key: string]: any
  version: string
  generatorVersion: string
  generatedAt: string
}

const arm: ArmAnimeItem[] = require('../arm')

const {
  version,
  generatorVersion,
  generatedAt,
}: PackageJson = require('../package')

export { arm, version, generatorVersion, generatedAt }
