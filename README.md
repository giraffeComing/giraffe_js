# giraffe_js_pro

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

项目打包说明：

1. npm run build 之后index.html中的相对路径前面要加  /js
eg:  /js/static/js/vendor.18912cc18fe9d53d77bf.js
2. npm run build 之后要把生成的 img 文件夹整个转移，拷贝到giraffeComing.github.io\static 整个项目专属的 静态资源文件夹下
