
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
