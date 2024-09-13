import {defineConfig, devices} from '@playwright/test'

export default defineConfig({
  testDir: './test/playwright',
  reporter: 'list',
  use: {baseURL: 'http://127.0.0.1:3000/'},
  webServer: {
    command: 'npx serve public',
    url: 'http://127.0.0.1:3000',
    reuseExistingServer: !process.env.CI,
  },
})
