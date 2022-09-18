# Webpack
What is Webpack? Quickly stated, it's an open source module bundler for modern Javascript applications. Invented and maintained by Tobias Koppers in 2012 and currently working its way towards version 5. It has a well funded core development team a large open source community. It's also the backbone of every framework's javascript bundling solution including Ruby on Rails, React, Angular, Vue JS and others.

## Webpack Config
Let’s open our code editor in this directory and begin editing our webpack.dev.js file. We’ll start by defining a module.export in the CommonJS style. Export an object. This object takes 3 parameters to start. Entry, Mode and Output.

```json
module.exports = {
  entry: {
    main: "./src/main.js"
  },
  mode: "development",
  output: {
    filename: "[name]-bundle.js",
    path: path.resolve(__dirname, "../dist")
  }
}
```
mode is a new (required) config option in Webpack 4. It allows webpack to create sensible defaults for development and production environments and also perhaps allows developer to use 1 config for both environments. Though, I wouldn't recommend that approach. mode is not an option in Webpack 3. So you would leave that off.

The entry object defines where webpack starts. This is the file that will contain references to all the other files we need to include in our build. The convention is to place it in src and call it main.js.

All paths within the entry object are relative to where Webpack is run, in our case, we’ll be running from the root of our project.

Output takes 2 properties. filename, which can be just a hardcoded name or a placeholder. If you have several entry points it’ll output several files.

path is an absolute path in your file system. So instead of hardcoding that, we can using Node’s path package, which comes standard with Node to resolve the absolute path for us and resolve it to dist, which will be our output directory.

Now let’s run Webpack in our terminal pointing to our config with this argument.

> `webpack --config=config/webpack.dev.js`

It’s time to get this running in a browser. We’ll need an index.html in dist, with the bare-minimum body and script pointing at our main-bundle.js file.

```html
<body>
  <h1>Hello World</h1>
  <script src="/main-bundle.js"></script>
</body>
```



## Debug a webpack app
Webpack does a bunch of optimizations and minifications when you bundle your webpack code. This makes the app faster to load in the browsers - but more difficult to read for devs. It’s the optimized bundle that you see in the browser. By enablaing the source maps in your webpack app we can debug it with lot easier.

```json
{
  mode: "development"
  // the rest of your webpack.config.js
}
```

## Loaders
We’ll introduce the concept of loaders and how webpack uses them to handle various file types. In our main.js, let’s require("./main.css") in main.js. In the terminal, you see the dev server reload and throw an error. So what this error is saying is Webpack doesn’t know every language, it just knows javascript. It relies on an ecosystem of loaders to handle other types of files. There is a loader for images, and one for markdown and fonts and svg, really everything you can imagine.

Rules will hold all of our loader config objects. The property test takes a regular expression that tells webpack when you see dot css, use the following loaders. In this case, css-loader lints the main.css before passing it to the style-loaders which for it's part includes a bit of javascript that will dynamically add a style tag to the head of our document and print the css inside on page load. That's what the style loader does under the covers.

```json
module: {
 rules: [{
	test: /\.css$/,
  	use: ['style-loader', 'css-loader'],
  	exclude: /node_modules/,
	},
 {
  	test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
	type: 'asset/inline',
	generator: {
    	filename: 'assets/fonts/[contenthash][ext]',
  	},
 },
 {
  	test: /\.(gif|ico|jpe?g|png|svg|webp)$/,
  	type: 'asset/resource',
  	generator: {
    	filename: 'assets/images/[contenthash][ext]',
  },
 {
  	test: /\.(ts|js)x?$/,
  	exclude: /node_modules/,
  	use: [
    	{
      	loader: 'babel-loader',
    	},
  	],
	}
}],
},
```
We return to our browser and we have color. Also if we make a syntax error in our main.css we see the error appears in the terminal, as well as the console. But we'd really like to see errors right in the browser window itself. 

> `overlay: true`

And now you can see any errors that would’ve been in the console, are showed in this div here and overlaid automatically.

## Babel Integration with Webpack
Old browsers don’t know ES6, the latest version of Javascript, but we still want to use it. Enter the transpilers to turn shiny new syntax into totally usable old syntax.

```json
{
  	test: /\.(ts|js)x?$/,
  	exclude: /node_modules/,
  	use: [
    	{
      	loader: 'babel-loader',
    	},
  	],
}
```

## Babel Presets
We can add features one at a time with plugins, or we can use presets to include all the features of a particular year or a particular way of working. There’s a preset for react development which compiles JSX for you. Presets make setup easier. And env is the current preset that works best in most situations.

## Sourcemaps
We see the debugger is paused on line 3568. Which means we're dealing with a full main-bundle.js file, not the original files. To solve this, we've got Sourcemaps. Webpack will generate a .map version of the javascript files. You'll notice it's bigger than the final file and generating a source map adds time to the build step.

## Webpack Dev Server


## Code split
There are many ways to optimize the load speed.One such way is code splitting. Code splitting means splitting your JavaScript bundle into many smaller bundles. As you already know, the browser caches resources such as JavaScript and Css files. Cached resources are quick to load.

First, let’s look into the naming of the output bundle. In a simple webpack project, your output section might look like this:
```json
output: {
  filename: 'bundle.js',
  path: path.resolve(__dirname, 'dist'),
},
```
That means that the bundle will be written to the file bundle.js. But when we are going to create two webpack bundles, this configuration can no longer be used. Otherwise, we would have two bundles named bundle.js. And that is just not possible. So we need to do a slight change to the config.
```json

```

Now the generated bundle would be name.bundle.js where the name is the name of the bundle. We are now enabled to create as many bundles as we want! So the next step is to split up the bundle and to do that we are going to use the SplitChunksPlugin. Why SplitChunks and not SplitBundle you might ask. What is a “chunk”?

Every file used in your project such as index.js, app.js, and react is called a module internally in webpack. A chunk is also an internal webpack concept. A chunk is a group of modules. Usually, chunks directly correspond with the output bundle. There are some configurations where this is true, but for now, you can think of a one-to-one mapping between a chunk and a bundle.

With the SplitChunksPlugin we can split up a chunk into smaller chunks. This plugin is pretty smart and out-of-the-box it will split chunks where the plugin thinks it makes sense. If you have a very large application it splits up your production code, and it also extracts the files in node_modules to a separate chunk (and bundle).
The SplitChunksPlugin is built into webpack, so you don’t need to import it explicitly. Everything under optimization.splitChunks is the configuration for SplitChunksPlugin.

What is a cacheGroup? Yet another internal webpack concept. It’s another way to group modules internally. This configuration will create a separate bundle for all modules that have node_modules in the path, which all our dependencies have.

```json
optimization: {
	runtimeChunk: 'single',
    splitChunks: {
		cacheGroups: {
        	vendor: {
          		test: /[\\/]node_modules[\\/]/,
          		name: 'vendors',
          		chunks: 'all'
        	}
      	}
    },
  },
```