
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
	| mycorp-my-extension.js
	| mycorp-my-extension.qext
	| properties.js
	| initialProps.js
|── node_modules
| CHANGELOG.yml
| LICENSE.md
| README.md
| package.json
| qlik.yml
``` 
