import { createPinia } from 'pinia'
import { OriginPlugin } from '@/plugins'

export const install: OriginPlugin = ({ app }) => {
  app.use(createPinia())
  console.log('🍍 pina running')
}
