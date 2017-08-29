这些demo是Webpack的简单演示的集合,跟随他们学习强大的工具你会发现没有困难!

## How to use

First, install [Webpack](https://yarnpkg.com/zh-Hans/package/webpack) and [webpack-dev-server](https://yarnpkg.com/zh-Hans/package/webpack-dev-server) globally.

```bash
$yarn add webpack webpack-dev-server
```

Then, clone the repo and install the dependencies.

```bash
# Linux & Mac
$ git clone git@github.com:ruanyf/webpack-demos.git
# Windows
$ git clone https://github.com/ruanyf/webpack-demos.git
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

## Demo2: Multiple entry files ([source](https://github.com/kuiguo1991/webpack-demo/tree/master/demo2)）

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

## Demo3: Babel-loader([source](https://github.com/kuiguo1991/webpack-demo/tree/master/demo3)）

```javascript
// index.js
import React from 'react';
import ReactDOM from 'react-dom';
ReactDOM.render(
    <div>
        <h1>hello world!!!</h1>
        <h2>hello world!!!</h2>
        <h3>hello world!!!</h3>
    </div>,
    document.querySelector('#root')
);
```

index.html

```html
<html>
  <body>
    <div id="root"></div>
    <script src="bundle.js"></script>
  </body>
</html>
```

Webpack follows `webpack.config.js` to build `bundle.js`.


```javascript
module.exports = {
    entry: './index.js',
    output: {
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env','react']
                    }
                }
            }
        ]
    }
};
```

Launch the server, visit http://127.0.0.1:8080 .

```bash
$ webpack-dev-server
```

## Demo4: CSS-loader([source](https://github.com/kuiguo1991/webpack-demo/tree/master/demo4)）

index.js

```javascript
// index.js
import './app.css';
document.write("<h1>hello world!</h1>");
```

app.css

```css
body {
  background-color: blue;
}
```
index.html

```html
<html>
  <body>
    <script src="bundle.js"></script>
  </body>
</html>
```

Webpack follows `webpack.config.js` to build `bundle.js`.


```javascript
const config = {
    entry: './index.js',
    output: {
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    }
};
module.exports = config;
```
Launch the server, visit http://127.0.0.1:8080 .

```bash
$ webpack-dev-server
```

## Demo5: Image loader([source](https://github.com/kuiguo1991/webpack-demo/tree/master/demo4)）

index.js

```javascript
import smallIcon from './image/small.png';
import bigIcon from './image/big.png';
import imgA from './image/imgA.jpg';
import imgB from './image/imgB.png';
const img1 = document.createElement("img");
img1.src = smallIcon;
document.body.appendChild(img1);
const img2 = document.createElement("img");
img2.src = bigIcon;
document.body.appendChild(img2);
const img3 = document.createElement("img");
img3.src = imgA;
document.body.appendChild(img3);
const img4 = document.createElement("img");
img4.src = imgB;
document.body.appendChild(img4);
```

index.html

```html
<html>
  <body>
    <script src="bundle.js"></script>
  </body>
</html>
```
Webpack follows `webpack.config.js` to build `bundle.js`.


```javascript
const config = {
    entry: './index.js',
    output: {
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    }
                ]
            }
        ]
    }
};
module.exports = config;
```

Launch the server, visit http://127.0.0.1:8080 .

```bash
$ webpack-dev-server
```