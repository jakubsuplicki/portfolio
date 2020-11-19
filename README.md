# portfolio
This is my personal website where I outline my education, professional experience, projects etc.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## References to setup project like this on GH-Pages:

All files such as .travis.yml, deploy.sh should be right in the root of the project.

1. Create and empty branch called gh-pages, which should be used to push compiled dist folder.
2. Set up gh-pages: https://levelup.gitconnected.com/how-to-deploy-your-vue-app-to-github-pages-897136799e19
3. Set up Vue project with travis CI: https://cli.vuejs.org/guide/deployment.html#github-pages
4. When completed the steps above, simply run deploy.sh to deploy the changes.
