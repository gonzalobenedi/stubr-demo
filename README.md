# Stubr Demo 

![Stubr](/assets/stubr-logo.png)

Demo project about how Stubr can be implemeted to mock an API

## Technologies

-   [Typescript](https://www.typescriptlang.org/)
-   [Stubr](https://github.com/stubrjs/stubr)
-   [Casual](https://github.com/boo1ean/casual)
-   [CORS-Anywhere](https://github.com/Rob--W/cors-anywhere)
-   [Nodemon](https://github.com/remy/nodemon)
-   [Prettier](https://prettier.io/)
-   [ESLint](https://eslint.org/)

## Before start development

### Software required

-   [Code editor or IDE](https://code.visualstudio.com/) _(**Visual Studio Code**, Atom, IntelliJ Idea, Sublime Text, etc.)_
-   [Command line or terminal](https://git-scm.com/downloads) _(**Git Bash**, cmd, Powershell, Terminal (MacOS), terminal (Linux), etc.)_
-   [Node.js](https://nodejs.org/en/)

### Recommended plugins for Visual Studio Code

This plugins are recommended to work on this project:

-   **Bracket Pair Colorizer 2:** _Helps to identify the scopes of code. Gives different colors to parentheses, brackets, curly braces, etc. to identify the start and the end of functions, classes, evaluations, etc._
-   **ESLint:** _Implements ESLint code policies in VS Code._
-   **GitLens:** _Help to manage git repo history. Allow to see file history, etc._
-   **Path Intellisense:** _Helps to autocomplete references file paths in the code._
-   **Prettier:** _Format the code making it readable._ **(Nearly mandatory)**
-   **Better Comments:** _Improve your code commenting by annotating with alert, informational, TODOs, and more._

### Depencencies instalation

Once Node.js has been intalled execute the following command in the command line tool/terminal installed on the previous steps to check the instalation has been successful:

```bash
...\stubr-demo> npm -v
```

If the following message appears `'npm' is not recognized as an internal or external command, operable program or batch file.` please visit this [link](https://stackoverflow.com/questions/20992723/npm-is-not-recognized-as-internal-or-external-command-operable-program-or-bat).

_npm_ is used as package manager. All project dependencies are included in `package.json` file, to install them execute this command:

```bash
...\stubr-demo> npm install
```

## Project structure

This are the main application files/folders:

-   **assets:** _This folder contains the media assets of the project._
-   **logs:** _This folder contains the logs of the application execution._
-   **node_modules:** \_This folder contains the dependencies of the project installed previously.
-   **src:** _This folder contains the main code of the application:_
    -   **assets:** _This folder contains the data assets of the application._
    -   **controllers:** _This folder contains the controllers of the real API. In each controller are defined the different endpoints._
        -   **xxx-controller.ts:** _This file contains the configuration of one controller of the API. Here are defined all the endpoints this controller has and all the possible scenarios of response for each endpoint._
    -   **middleware:** _This folder contains the code needed to create a server with CORS-Anywhere to proxie requests from browsers._
        -   **cors-middleware.ts:** _This file creates a server with CORS-Anywhere. This is used to proxie preflight requests from browsers._
    -   **models:** _This folder contains all the models used on the application._
    -   **app.ts:** _This file is the entry point of the application. Creates an application instance and run all the code needed to setup and launch it._
-   **.eslintignore:** _This file contains the files and folders to be ignored by ES Lint._
-   **.eslintrc.js:** _This file contains the config of ES Lint._
-   **.gitignore:** _Archivo que contiene los archivos y/o directorios a ignorar por Git._
-   **.prettierignore:** _This file contains the files and folders to be ignored by Prettier._
-   **.prettier.config.js:** _This file contains the config of Prettier._
-   **nodemon.json:** _This file contains the config of Nodemon._
-   **package-lock.json:** _This file stores the info of the exact version of the dependencies installed on the application._
-   **package.json:** _Project config file. This file contains technique information about the project, de dependency management and the different tasks configured to launch with npm._
-   **README.md:** _This file. Describes the project and contains general information about the project_

## Comandos de npm

These are the different tasks configured to run with _npm_.

### Application execution

To lauch the app execute the following command:

```bash
...\stubr-demo> npm start
```

To exectute the aplication with live reload when changes are saved execute the following command:

```bash
...\stubr-demo> npm run dev
```

### Other commands

To format and run prettier on the _.ts_ files of the project execute the following command:

```bash
...\stubr-demo> npm run pretty
```

To try to fix all the problems reported from ES Lint execute the following command:

```bash
...\stubr-demo> npm run fix
```
