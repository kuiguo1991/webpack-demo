这些demo是Webpack的简单演示的集合。

这些demo有意以简单明了的方式写成。跟随他们学习强大的工具你会发现没有困难!

## How to use

First, install [Webpack](https://yarnpkg.com/zh-Hans/package/webpack) and [webpack-dev-server](https://yarnpkg.com/zh-Hans/package/webpack-dev-server) globally.

```bash
$ yarn add webpack webpack-dev-server
```

Then, clone the repo and install the dependencies.

```bash
# Linux & Mac
$ git clone git@github.com:ruanyf/webpack-demos.git

# Windows
$ git clone https://github.com/ruanyf/webpack-demos.git
:
$ cd webpack-demos
$ yarn
```

Now, play with the source files under the repo's demo* directories.

```bash
$ cd demo1
$ webpack-dev-server
```
## Index

1. [Entry file](#demo1-entry-file-source)
1. [Multiple entry files](#demo2-multiple-entry-files-source)
1. [Babel-loader](#demo3-babel-loader-source)
1. [CSS-loader](#demo4-css-loader-source)
1. [Image loader](#demo5-image-loader-source)
1. [CSS Module](#demo6-css-module-source)
1. [UglifyJs Plugin](#demo7-uglifyjs-plugin-source)
1. [HTML Webpack Plugin ](#demo8-html-webpack-plugin-source)
1. [Environment flags](#demo9-environment-flags-source)


## Demo1: Entry file ([source](https://github.com/kuiguo1991/webpack-demo/tree/master/demo1)）

For example, `index.js` is an entry file.

```javascript
// index.js
document.write("<h1>hello world!!!</h1>");
document.write("<h2>hello world!!!</h2>");
document.write("<h3>hello world!!!</h3>");
```

index.html

```html
<html>
  <body>
    <script type="text/javascript" src="bundle.js"></script>
  </body>
</html>
```

Webpack follows `webpack.config.js` to build `bundle.js`.

```javascript
// webpack.config.js
const config = {
    entry: './index.js',
    output: {
        filename: 'bundle.js'
    }
};
module.exports = config;
```

Launch the server, visit http://127.0.0.1:8080 .

```bash
$ webpack-dev-server
```

## Demo2: Entry file ([source](https://github.com/kuiguo1991/webpack-demo/tree/master/demo2)）

```javascript
// index1.js
document.write("<h1>hello world!!!A</h1>");
document.write("<h2>hello world!!!A</h2>");
document.write("<h3>hello world!!!A</h3>");
// index2.js
document.write("<h1>hello world!!!B</h1>");
document.write("<h2>hello world!!!B</h2>");
document.write("<h3>hello world!!!B</h3>");
```

index.html

```html
<html>
  <body>
    	<script src="bundle1.js"></script>
    	<script src="bundle2.js"></script>
  </body>
</html>
```

Webpack follows `webpack.config.js` to build `bundle.js`.


```javascript
const config = {
    entry: {
        bundle1: './index1.js',
        bundle2: './index2.js'
    },
    output: {
        filename: '[name].js'
    }
};
module.exports = config;
```

Launch the server, visit http://127.0.0.1:8080 .

```bash
$ webpack-dev-server
```