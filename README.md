# DIST
Digital Impacts Schema &amp; Taxonomy

This repository holds the website (and schema) for the Digital Impacts Schema &amp; Taxonomy, hosted on github pages and available at [https://dist.greenweb.org](https://dist.greenweb.org).

It's created using [Jekyll](https://jekyllrb.com/) and editable using [SiteLeaf](https://www.siteleaf.com/).

To run a copy locally for editing, development and previewing, you will need to have [Ruby](https://www.ruby-lang.org/en/downloads/) and [Node.js](https://nodejs.org/en/download) available on your system.

## GitHub Codespaces

If you do not have both Ruby and NodeJS installed locally, you can use GitHub Codespaces to quickly spin up a development environment for this project.

1. Create a [new codespace](https://github.com/codespaces/new?hide_repo_select=true&repo=1210468550&skip_quickstart=true&ref=main).
2. The codespace may take a few minutes to configure itself, and install dependencies.
3. Once configure you can run following commands to ensure you have Ruby, NodeJS, and Jekyll configured:
   - `ruby -v` should return  `ruby 3.3.9`
   - `node -v` should return `v26.2.0`
   - `bundle exec jekyll -v` should return `jekyll 3.10.0`
  
You can now follow the [Getting Started](#getting-started) instructions below to work on this project.

## Getting Started

To get started, check out this repository and run:

* `bundle install` - to install ruby dependencies. 
* `npm install` - to install nodejs dependencies 
*  `bundle exec jekyll serve` - to build the site and make it available on a local server 
* OR `bundle exec jekyll serve --livereload` to automatically refresh the page with each change you make to the source file


... which will make a local copy of the site available at https://localhost:4000.

We use [Tailwind CSS](https://tailwindcss.com) for styling, try to use the classes and components defined there in preference to creating custom CSS if possible.

The `main` branch of this repo is automatically deployed to the live site, so simply push your changes to deploy, or open a PR.


