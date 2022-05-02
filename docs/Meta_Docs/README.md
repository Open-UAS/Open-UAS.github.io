# Meta Documentation
Here you will find documentation *about* the documentation

## Vuepress
This documentation uses Vuepress to render basic mark down files as a static webpage.

 In the past the team has used Latex to write documentation. While Latex is good for writing final documents, Vuepress gives a more streamlined workflow that is easier for new members to jump into, both for reading documentation and especially for editing documentation.

### Contributing to the Documentation
The easiest way is to click the "Edit this page" button at the bottom of the page you'd like to contribute to. The Vuepress site is pre-configured with the OpenUAS git repository to automatically rebuild and deploy when a change to the Documentation folder is pushed to master. The build status can be viewed on the [Github actions page](https://github.com/LTL-AERO/OpenUAS/actions)

You can also make modifications to the Documentation folder from any text editor, then push to master and your changes will be built and published. To test your changes before publishing them, you'll need to setup a development environment:

#### Vuepress Personal Development Environment
To build the docs you will need a few things:
- Clone the OpenUAS repo locally
- install node.js and npm 
    - [Downloading and installing Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- install Vuepress dependencies
    ``` bash
    cd OpenUAS/Documentation
    npm install
    ```

Once everything is setup and installed you will be able to build and run the docs from your local machine. Run `npm run dev` from the `Documentation` folder. Once everything looks good on your machine, you should be able to push your changes to master to publish.


### LaTeX Conversion
- [Pandoc](https://pandoc.org/index.html) can be used to convert from a LaTeX file into a mark down file.
    - `pandoc -s example.tex -o example.md`
    - This was first tested on the new member orientation page
- [Vuepress mathjax plugin](https://vuepress-community.netlify.app/en/plugins/mathjax/#vuepress-plugin-mathjax) is used for inline LaTeX.


### Vuepress Configuration
There are many configuration settings that Vuepress supports. Most of them are found in the `docs/.vuepress/config.js` file or at the top of the markdown file as front matter. More information on configuration settings can be found at the official [Vuepress documentation](https://vuepress.vuejs.org/config/#overview) [Front matter details](https://vuepress.vuejs.org/guide/frontmatter.html)


### Vuepress 2.0
As of this writing (April 2022) Vuepress 1.0 is nearing its end of support and [Vuepress 2.0](https://github.com/vuepress/vuepress-next) will soon be released. Currently these docs are written in Vuepress 1.0 but will need to be converted to Vuepress 2.0 eventually. A guide on the required steps should be available in the [official Vuepress 2.0 docs](https://v2.vuepress.vuejs.org/guide/migration.html)
