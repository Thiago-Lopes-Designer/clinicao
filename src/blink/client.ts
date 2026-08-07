import { createClient } from '@blinkdotnew/sdk'

export const blink = createClient({
  projectId: import.meta.env.VITE_BLINK_PROJECT_ID || 'clinic-o-gatos-6d2auqwy',
  publishableKey: import.meta.env.VITE_BLINK_PUBLISHABLE_KEY || 'blnk_pk_lxDYQk7aX_wTCaHyg5Gc9oBFjObzVYQl',
  authRequired: false,
  auth: { mode: 'managed' },
})
