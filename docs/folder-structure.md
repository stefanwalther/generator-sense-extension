
The following folder structure will be generated:

Sample settings:
- **Extension Name**: My Extension
- **Namespace**: mycorp

```bash
| mycorp-My-Extension 			//folder in your local extension directory
|── deploy
	| gulpfile.js				// deployment based on sense-go
	| deploy-config.yml			// deployment configuration file
|── dist
	|── dev						// distribution in dev mode
	|── release					// distribution in release mode
|── build						// generated builds
|── src							// main source code
	|── less					// only applicable if you choose option "useLess"
	|── lib
		|── css
		|	style.css 			// in case of option "useLess", this will be generated
		|── external			// external libraries to be stored here
		|── images				
		|── js					// your JavaScript files
		|	extUtils.js
		|── partials			// partials (in case of using the AngularJS approach)

	| mycorp-my-extension.js	// main script
	| mycorp-my-extension.qext	// meta information
	| preview.png				// Your extension preview image
	| properties.js				// property panel definitions
	| initialProps.js			// intial properties for your extension
| .gitignore
| .jshintrc
| .verb.md
| CHANGELOG.yml
| LICENSE.md
| (README.md)					// will be generated running gulp verb
| package.json
| qlik.yml
``` 
