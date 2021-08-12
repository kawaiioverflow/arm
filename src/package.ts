type StatisticsService = {
  name: 'MyAnimeList' | 'AniList' | 'Annict' | 'Syoboi Calendar'
  length: number
}

type Statistics = {
  length: number
  services: StatisticsService[]
}

type PackageJson = {
  [key: string]: any
  version: string
  generatorVersion: string
  generatedAt: string
  statistics: Statistics
}

export const {
  version,
  generatorVersion,
  generatedAt,
  statistics,
}: PackageJson = require('../package')
