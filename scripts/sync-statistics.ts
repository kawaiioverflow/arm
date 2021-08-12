import { readFile, writeFile } from 'fs/promises'
import { resolve } from 'path'

import { statistics } from '../src/package'
;(async () => {
  const readme = await readFile(resolve(process.cwd(), 'README.md'), 'utf-8')

  await writeFile(
    resolve(process.cwd(), 'README.md'),
    readme.replace(
      /\<\!--\sstart\sstatistics\s-->[\s\S]*?\<\!--\send\sstatistics\s-->/,
      `<!-- start statistics -->

The database has **${
        statistics.length
      }** anime, it consists of data from several services.

| Service | Anime |
|:---|:---|
${statistics.services
  .map(({ name, length }) => `| ${name} | ${length} anime |`)
  .join('\n')}

<!-- end statistics -->`
    ),
    'utf-8'
  )
})()
