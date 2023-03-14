import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Philipp Wössner",
  description: "Personal website of Philipp Wössner",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    socialLinks: [
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/philipp-wössner-344a06145/' },
      { icon: 'github', link: 'https://github.com/pwoessner' }
    ]
  }
})
