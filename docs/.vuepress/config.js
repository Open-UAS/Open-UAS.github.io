const fs = require('fs');
const sidebar_provider = require('./sidebar_provider.js');


module.exports = {
    base: '/',
    title: 'OpenUAS',
    description: 'Designing and building an open source fixed-wing UAS',
    plugins:{
        '@vuepress/medium-zoom': {
          options: {
            margin: 10,
          }
        },
        'vuepress-plugin-mathjax': {}
    },

    themeConfig: {
        //logo stored in .vuepress/public folder
        logo: '/logo.png',
        nav: [
            {text: 'Intro',       link: '/Intro/'},
            {text: 'Meta Docs',   link: '/Meta_Docs/'},
            {text: 'Design',      link: '/Design/' },
            {text: 'Manufacturing',      link: '/Manufacturing/' },
            {text: 'Software/Electrical',  link: '/Software_Electrical/',
              items:[
                {text: 'Software', link: '/Software/'},
                {text: 'Electrical', link: '/Electrical/'}
              ] 
            },
            {text: 'Lab Docs',    link: '/Lab_Docs/'},
            {text: 'Archive',     link: 'https://open-uas.github.io/Archive/'}
          ],

        //Use SUMMARY.md files in the top level of each doc section to generate the sidebar for each section
        sidebar: sidebar_provider.getMultiSidebar('./docs'),
        sidebarDepth: 2,
        searchPlaceholder: 'Search',
        lastUpdated: 'Last Updated (UTC)',
        //displayAllHeaders: 'false',
        
        //Details for repo link in nav bar and edit this page link at bottom of all pages
        repo: 'Open-UAS/Open-UAS.github.io',
        docsDir: 'docs',
        docsBranch:'main',
        editLinks: true,
        smoothScroll: true
      },
      markdown: {
        lineNumbers: true
      }
  }
