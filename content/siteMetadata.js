const siteMetadata = {
  title: 'Subash',
  author: 'Subash Baniya',
  headerTitle: 'subashbaniyaa',
  description: 'Personal Website',
  language: 'en-us',
  theme: 'dark',
  siteUrl: 'https://subashbaniya.info.np',
  siteRepo: 'https://github.com/sarkardocs/subashbaniyaa',
  siteLogo: '/static/favicon/images/character.png',
  image: '/static/favicon/images/character.png',
  socialBanner: '/static/favicon/images/character.png',
  email: 'sarkardocss@gmail.com',
  github: 'https://github.com/sarkardocs',
  twitter: 'https://twitter.com/sarkardocs',
  facebook: 'https://facebook.com/subashbaniyaa',
  linkedin: 'https://www.linkedin.com/in/sarkardocs/',
  spotify: 'https://open.spotify.com/user/123',
  steam: 'https://steamcommunity.com/id/sarkardocs/',
  locale: 'en-US',
  comment: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO || '',
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID || '',
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY || '',
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID || '',
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
    },
  },
};

module.exports = siteMetadata;
