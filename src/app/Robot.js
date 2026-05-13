export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // Gizli kalmasını istediğiniz klasör varsa buraya yazın
    },
    sitemap: 'https://novises.com/sitemap.xml',
  };
}