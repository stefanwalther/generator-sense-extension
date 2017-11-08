# generator-sense-extension

> Generate a boilerplate for your Qlik Sense Visualization Extensions or Mashup (including validation, testing, documentation, deployment and packaging).

**Nothing to show, yet ... in the works ...**

---

## About
(TBC)

## Installation
**Prerequisites:**

- [node.js](https://nodejs.org/) installed

**Installation of _Yeoman Generator for Qlik Sense Visualization Extensions_:**

First install [Yeoman](http://yeoman.io/) globally:
```bash
npm install yo -g
```

Second install generator-sense-extension:

```bash
npm install generator-sense-extension -g
```
(It is recommended to install the generator globally (**`-g`**), then you can easily use it for multiple projects)

**Run sense-extension generator**

1. Think of a good name for your visualization extension (e.g. "astonishing-chart")
2. Optionally, create a GitHub repository using that name (this will result into https://github.com/YOURNAME/astonishing-chart)
3. Create a directory for your visualization extension (e.g. `mkdir c:\my-extensions\astonishing-chart`)
4. Then switch to the created directory (`cd C:\my-extensions\astonishing-chart`)
5. Run Yeoman generator _sense-extension_ (`yo sense-extension`)
6. Follow the prompts

After answering some questions you're done, a basic structure for your project is created.

## Typical Workflow
### While developing

Run `gulp build`
(TBC)

For further options visit [sense-go](http://github.com/stefanwalther/sense-go)

### Documenting

Run `gulp verb`
(TBC)

For further options visit [sense-go](http://github.com/stefanwalther/sense-go)

### Committing changes
Run `gulp bump`, `gulp bump:patch`, `gulp bump:minor` or `gulp bump:major`

For further options visit [sense-go](http://github.com/stefanwalther/sense-go)

### Releasing & packaging your extension

Run `gulp release`
(TBC)

For further options visit [sense-go](http://github.com/stefanwalther/sense-go)

### Publishing

Run `gulp publish`
(TBC)

For further options visit [sense-go](http://github.com/stefanwalther/sense-go)

### Combine actions
You can at any time combine some of the gulp-tasks derived from sense-go resp. those you have added, e.g:

`gulp bump:major release publish`

Visit [sense-go](http://github.com/stefanwalther/sense-go) for more details.

## Generator Prompts
The generator guides you during the setup of your project by just asking questions.
Probably (and hopefully) self-explanatory, but here's an overview:

**"Name of your project"**
- Enter the name of your visualization extension, Mashup-solution, etc., e.g. _Astonishing Chart_
- (defaults to the current folder name)

**"Describe your project"**
- Enter a description of your project.
- This description will later be used in the .qext file.

**"Namespace"**
- Enter the desired namespace for your project, e.g. _mycorp_
- Leave this blank if your are unsure
- (defaults to `''` (blank))

**"Choose a template"**
- Select one of the following templates:
	- Visualization Extension: Classic template
	- Visualization Extension: AngularJS based template

**"Enter advanced mode"** 
If you enter the advanced mode you can set the following settings  

- **Extension type?**
	- defaults to `extension`
- **Use Less instead of pure CSS?**
	- defaults to `false`
- **Use verb to document your project**
	- defaults to `false`
- **Use watch**
	- defaults to `false`
- **Use sense-go as your deployment system?**
  - defaults to `false`
- **Chose a license**
	- defaults to `mit` ([MIT license](http://opensource.org/licenses/MIT))
- **Automatically install dependencies from package.json?**
  - defaults to `true`

## Folder Structure
The following folder structure will be generated:

Sample settings:
- **Extension Name**: My Extension
- **Namespace**: mycorp

```bash
| mycorp-My-Extension 			//folder in your local extension directory
|── build						// generated builds
|── deploy
	| gulpfile.js				// deployment based on sense-go
	| deploy-config.yml			// deployment configuration file
|── dist
	|── dev						// distribution in dev mode
	|── release					// distribution in release mode
|── node_modules
|── src							// main source code
	|── less					// only applicable if you choose option "useLess"
	|── lib
		|── css
		|	main.css 			// in case of option "useLess", this will be generated
		|── external			// external libraries to be stored here
		|── images				// guess what
		|── js					// your JavaScript files
		|	extUtils.js			// collection of sugar functions
		|── partials			// partials (in case of using the AngularJS approach)

	| mycorp-my-extension.js	// main script
	| mycorp-my-extension.qext	// meta information
	| preview.png				// Your extension preview image
	| properties.js				// property panel definitions
	| initialProps.js			// intial properties for your extension
| .editorconfig
| .gitignore
| .jshintrc
| .verb.md						// Only used if verb is used for documentation purposes.
| CHANGELOG.yml					// Changelog in YML format
| LICENSE.md					// License file
| (README.md)					// will be generated running gulp verb
| package.json					// npm package.json file
| qlik.yml						// Just for experimental purposes
``` 

## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

## Change log
See [CHANGELOG](CHANGELOG.yml)

## Author
**Stefan Walther**

* [twitter](http://twitter.com/waltherstefan)  
* [github.com/stefanwalther](http://github.com/stefanwalther) 
* [LinkedIn](https://www.linkedin.com/in/stefanwalther/) 
* [qliksite.io](http://qliksite.io)

## License
MIT

***

_This file was generated by [verb-generate-readme](https://github.com/verbose/verb-generate-readme), v0.6.0, on November 08, 2017._

