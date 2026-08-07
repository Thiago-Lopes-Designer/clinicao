import { cpSync, existsSync, mkdirSync } from 'node:fs'

const source = 'public/images'
const destination = 'dist/client/images'

if (!existsSync(source)) {
  console.error('Pasta public/images não encontrada')
  process.exit(1)
}

mkdirSync(destination, { recursive: true })

cpSync(source, destination, {
  recursive: true,
  force: true,
})

console.log('✓ Imagens originais copiadas para dist/client/images')