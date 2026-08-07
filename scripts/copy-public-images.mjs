import { cpSync, existsSync, mkdirSync } from 'node:fs'

const source = 'public/images'
const destination = 'dist/images'

if (!existsSync(source)) {
  console.error('[images] public/images não encontrada')
  process.exit(1)
}

mkdirSync(destination, { recursive: true })

cpSync(source, destination, {
  recursive: true,
  force: true,
})

console.log('[images] ✓ imagens originais copiadas para dist/images')