  # grunt-init-typescript

  A heavy opinionated Typescript template.

  ## Introduction

  This [grunt-init](https://gruntjs.com/project-scaffolding) template includes
  basic building steps for a clean code developed typescript package.

  Features include:

  * All needed dependencies
  * A ready-made tslint
  * Logging using [winston](https://github.com/winstonjs/winston)
  * Testing using [mocha](https://mochajs.org/) and [chai](http://chaijs.com/)
  * Code coverage using [istanbul](https://github.com/gotwarlost/istanbul) and [remap-istanbul](https://github.com/SitePen/remap-istanbul)
  * Complete testing process available using [grunt](https://gruntjs.com/)
  * Sonar-Project configurations for use with [SonarTsPlugin](https://github.com/pablissimo/SonarTsPlugin)
  * All set up to publish packages to NPM

  ## Usage

  Clone this repository to ~/.grunt-init and run

      grunt-init grunt-init-typescript mynewtypescriptpackage && cd mynewtypescriptpackage && npm install

  Afterwards you can start right away developing code in index.ts. To break up
  your code in different modules, use the subdirectory "lib".

  Then you can use grunt to test and build your code:

      grunt test

  If you want, you can also publish your module on NPM. A valid ignore file
  is already set up for you.
