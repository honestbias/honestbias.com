# HonestBias

## Developer Notes

### Initial Setup

1. Ensure you have `git` installed.
2. Ensure you have `node.js` installed (using the installer will install `npm` as well, which is necessary to continue). https://nodejs.org/en/
3. Install `gatsby-cli` with `npm i -g gatsby-cli` https://www.gatsbyjs.org/docs/gatsby-cli/
4. Clone HonestBias.com repository with `git clone https://github.com/honestbias/honestbias.com.git`.
5. Change directories into newly cloned repository `cd honestbias.com`.
6. Run `npm i` to install packages.
7. Setup a free account at sanity.io https://sanity.io/syntax (doubles the free plan for Syntax.fm listeners)
8. Install `@sanity-cli` with `npm i -g @sanity/cli` https://www.sanity.io/docs/reference/cli
9. Change directories into `honestbias.com/sanity` with `cd sanity`.
10. Run `npm i` to install packages (there is a separate `package.json` in this directory).
10. Copy `sanity-template.json` to `sanity.json` with `cp sanity-template.json sanity.json`.
10. Run `sanity init` and follow the prompts to login to your Sanity account.
11. Follow the prompt and set a Project Name (can be whatever you want, like `HonestBias_CoolGuy88`).
12. Follow the prompt and set a name for your dataset (for example we'll call it `development`).
13. Follow the prompt and set the dataset visibility to Private.
14. Skip the remaining prompts (unless you want to join the developer community, which is actually very helpful).
15. Import latest production dataset in the `sanity/exports` folder (see sanity/README.md for more details) like `sanity dataset import exports/production-dataset-[mm-dd-YYYY].tar.gz development` (`development` should be the name of the dataset you created above)
16. After import completes, run `sanity deploy`.
17. When prompted for Studio hostname, enter something that is unique and makes sense or sounds cool to you (`HB_YourName` or something similar).
18. Once complete, you can visit your studio at the url provided (also can be accessed via https://manage.sanity.io). The data imported should all be visible (and should be fairly close to what is currently live on the site).
19. Back in your terminal, run `sanity graphql deploy` and choose `N` when prompted to skip enabling GraphQL playground.
20. Back in the root of the repository (`honestbias.com/`, so run `cd ..`), cp `.env.template` to `.env.development` with `cp .env.template .env.development`.
21. In your Sanity account settings, create a new read-only token (under API). Copy the token (don't close the tab until you're sure you have it stored properly, since you can't see it again and will need to delete it and generate a new key if you lose it).
22. Edit `.env.development` with the settings for the Sanity project you just setup. Use the token generated above for `SANITY_TOKEN`. The Project ID is visible in your Sanity account (manage.sanity.io). The dataset name is in your Sanity account under Datasets.
23. Copy `.env.development` to `.env.production` (currently, there is no distinction) with `cp .env.development .env.production`
24. Run `gatsby develop`. If the setup all went as planned, this should build the site and give you the url to visit it locally (http://localhost:8000/)!
25. The site should now work locally, and you should be able to make changes and see most of them take effect with the hot reloading. Note: some changes will require a rebuild (`ctrl+c` then `gatsby develop` again). One of the biggest examples would be when a change is made in your Sanity Studio to update content.
26. To test a local production build, run `gatsby build` and `gatsby serve`. The new url should be http://localhost:9000/.
27. Celebrate!

### Git Workflow

As of now, simply branch off of `master` and implement a single feature (or fix a single bug). When ready, open a pull request against `master`. A version of the site will automatically be built, and a link will be populated in the pull request to test your change with Netlify hosting the application. Testing should have already been done locally, but it should be double checkd at this URL as well to ensure full functionality. Once the PR is approved and merged, it will be immediately deployed as part of our continuous deployment.

#### Branch Naming

If there is an issue for the feature/bug you are working on, name the branch `[issueNumber]/brief-title-of-issue` (such as `5/broken-menu`). If there is no issue, simply ommit `[issueNumber]/` (such as `broken-menu`).

#### Commits

Prefix commit messages with `#[issue-number] `. For example, `#5 Fixed the broken menu...`. Placing `#issue-number` in the commit message will automatically reference the GitHub issue. If there is no issue the commit relates to, prefix the commit message with `[branch-name]`. For example, `broken-menu Fixed the broken menu...`. This at least makes it easy to see what branch for which the commit was initially made.

Prettier is automatically run when committing files to enforce consistency with code formatting.

### Tools/Platforms

* Netlify
* Gatsby
* React.js
* Sanity.io
* Styled Components
* Google Analytics

### Official Browser Support

* Firefox
* Chrome
* Safari
* Edge
* Internet Explorer 11

### Icons

Currently using `react-icons` (IO): https://react-icons.netlify.com/#/icons/io.

### Deployments

Important note: ENV variables listed in `.env.template` must be set in hosting environment (currently Netlify). These are currently set via web UI.

There are currently two (easy) options for deployments (there's a third via commandline with Netlify, but I can't remember at the moment):

1. Netlify is setup with continuous GitHub deployments, changes to `master` trigger a deploy (such as a pull request being merged).
2. Kick off a deployment directly from the Netlify web application (useful if there are only CMS changes--no code changes).

## From Gatsby's Default Starter Documentation

Note: there are some modifications below (and including this line) to Gatsby's documentation.

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc.json
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc.json`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: Unless otherwise noted, HonestBias.com source code is licensed under GNU GPLv3.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.