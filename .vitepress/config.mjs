import { defineConfig } from "vitepress"

// https://vitepress.dev/reference/site-config
export default {
  lang: "en-US",
  title: "Portfolio",
  titleTemplate: "Philipp Wössner",
  description: "Portfolio website of Philipp Wössner",
  srcDir: "./portfolio",
  head: [
    ["link", { rel: "icon", href: "/favicons/favicon.ico" }],
    ["link", { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicons/favicon-32x32.png" }],
    ["link", { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicons/favicon-16x16.png" }],
    ["link", { rel: "apple-touch-icon", sizes: "180x180", href: "/favicons/apple-touch-icon.png" }],
    ["link", { rel: "manifest", href: "/favicons/site.webmanifest.json" }],
    ["meta", { property: "description", content: "Portfolio website of Philipp Wössner" }],
    ["meta", { httpEquiv: "Content-Language", content: "en" }],
    ["meta", { name: "apple-mobile-web-app-title", content: "Philipp Wössner" }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [],
    sidebar: [],
    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" }
    ]
  }
}
