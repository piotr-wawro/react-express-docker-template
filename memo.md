# Idea
Minimalistic config build upon default one with minor tweaks.

# Folder structure

## .devcontainer/devcontainer.json
Used by Visual Studio Code Dev Containers extension.

## .vscode/settings.json
* "source.fixAll.eslint": true - one way of enabling autofix on save. Another is enabling ESLint as a formatter
* "files.eol": "\n" "\n" - on Windows by default new line is \r\n and eslint will mark it as error

## backend/package.json
* "type": "module" - I want to use import/export
* 

## backend/tsconfig.json
* "esm": true - enable ES module support
* "target": "ESNext" - tsc --init sets it to es2016. Default is ES3. ESNext is my preference
* "module": "ESNext" - tsc --init sets it to commonjs. Default value depends on target. ESNext is my preference
* "moduleResolution": "nodenext" - default value depends on module. nodenext is my preference
* "outDir": "./dist" - my preference
* "esModuleInterop": true - recommended by TS developers. No default value provided in documentation. Explicitly set to make sure it's enabled
* "forceConsistentCasingInFileNames": true - recommended by TS developers. No default value provided in documentation. Explicitly set to make sure it's enabled
* "strict": true - recommended by TS developers. No default value provided in documentation. Explicitly set to make sure it's enabled. Also enables other recommended configs
* "exactOptionalPropertyTypes": true - recommended by TS developers. No default value provided in documentation. Explicitly set to make sure it's enabled
* "skipLibCheck": true - recommended by TS developers. No default value provided in documentation. Explicitly set to make sure it's enabled

# Commands

Update npm packages and package*.json files  
npm update --save --workspaces

