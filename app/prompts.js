'use strict';

var prompts = [
	{
		type: 'input',
		name: 'extName',
		message: 'Name of your project:',
		default: this.appname // Defaults to current folder name
	},
	{
		type: 'input',
		name: 'extDescription',
		message: 'Describe your project:'
	},
	{
		type: 'input',
		name: 'extNamespace',
		message: 'Namespace (leave blank if unsure):'
	},
	{
		type: 'input',
		name: 'extAuthor',
		store: true,
		message: 'Author of this solution:'
	},
	{
		type: 'input',
		name: 'extAuthorWebsite',
		store: true,
		message: 'Author\'s website:'
	},
	{
		type: 'list',
		name: 'extTemplate',
		message: 'Choose a template:',
		store: false,
		choices: [
			{
				"name": "Visualization Extension: Classic template",
				"value": "basic_paint"
			},
			{
				"name": "Visualization Extension: AngularJS based template",
				"value": "angular_basic"
			}
		],
		default: 'basic_paint'
	},
	{
		type: "confirm",
		name: "isAdvancedMode",
		message: "Enter advanced mode? (Choose [N]o if you are unsure):",
		default: false,
		store: true
	},
	{
		when: function ( props ) {
			return props.isAdvancedMode;
		},
		type: 'list',
		name: 'extType',
		message: 'Extension type:',
		default: "extension",
		choices: [
			"extension",
			"bar-chart-vertical",
			"line-chart",
			"pie-chart",
			"gauge-chart",
			"scatter-chart",
			"text-image",
			"table",
			"list",
			"filterpane",
			"treemap"
		]
	},
	{
		when: function ( props ) {
			return props.isAdvancedMode;
		},
		type: "confirm",
		name: "useLess",
		message: "Use Less instead of pure CSS?",
		store: true,
		default: false
	},
	{
		when: function ( props ) {
			return props.isAdvancedMode;
		},
		type: "confirm",
		name: "useVerb",
		message: "Use verb to document your project?",
		store: true,
		default: false
	},
	{
		when: function ( props ) {
			return props.isAdvancedMode;
		},
		type: "confirm",
		name: "useSenseGo",
		message: "Use sense-go as your deployment system?",
		store: true,
		default: false
	},
	{
		when: function ( props ) {
			return props.isAdvancedMode;
		},
		type: 'list',
		name: 'extLic',
		message: 'Choose a license',
		store: true,
		choices: [
			"agpl",
			"apache",
			"artistic",
			"bsd-3-clause",
			"bsd",
			"cc0",
			"eclipse",
			"gpl-v2",
			"gpl-v3",
			"isc",
			"lgpl-v2.1",
			"lgpl-v3",
			"mit",
			"mozilla",
			"no-license",
			"unlicense",
			"wtfpl"
		],
		default: 'mit'
	},
	{
		when: function ( props ) {
			return props.isAdvancedMode;
		},
		type: "confirm",
		name: "installDependencies",
		message: "Automatically install dependencies from package.json?",
		store: true,
		default: true
	}
];


module.exports = prompts;


