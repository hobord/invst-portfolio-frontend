[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/hobord/invst-portfolio-frontend)

# Portfolio frontend

## Development
### with VSCode
Install the [vscode-remote-extensionpack](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack)
(vscode in docker)

Open in Devcontainer. 

### on Cloud
[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/hobord/invst-portfolio-frontend)

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
It is using mock api (look the mock folder, and vue.config.js)
```
yarn serve
```

You can set custom endpoint for live testing
```
export VUE_APP_INSTRUMENT_ENDPOINT=http://127.0.0.1:8082/instruments
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

