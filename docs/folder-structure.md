
The following folder structure will be generated:

Sample settings:
- **Extension Name**: My Extension
- **Namespace**: mycorp

```bash
| mycorp-My-Extension 			//folder in your local extension directory
|── deploy
	| gulpfile.js				// deployment based on sense-go
	| deploy-config.yml			// deployment configuration file
|── src
	|── less					// only applicable if you choose option "useLess"
	|── lib
		|── css
		|	style.css 			// in case of option "useLess", this will be generated
		|── external
		|── js
		|	extUtils.js
		|── partials
	| mycorp-my-extension.js	// main script
	| mycorp-my-extension.qext	// meta information
	| preview.png				// Your extension preview image
	| properties.js				// property panel definitions
	| initialProps.js			// intial properties for your extension
|── node_modules
| .gitignore
| .jshintrc
| .verb.md
| CHANGELOG.yml
| LICENSE.md
| (README.md)					// will be generated running gulp verb
| package.json
| qlik.yml
``` 
