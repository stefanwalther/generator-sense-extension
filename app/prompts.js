module.exports = [
	{
		type: 'input',
		name: 'extName',
		message: 'Name of your visualization extension:',
		default: this.appname // Defaults to current folder name
	},
	{
		type: 'input',
		name: 'extDescription',
		message: 'Describe your visualization extension:'
	},
	{
		type: 'input',
		name: 'extNamespace',
		message: 'Namespace (leave blank if unsure):'
	},
	{
		type: 'list',
		name: 'extTemplate',
		message: 'Choose a template:',
		store: true,
		choices: ['Classic'],
		default: 'Classic'
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
		name: "useSenseGo",
		message: "Use sense-go as your deployment system?",
		store: true,
		default: false
	}
];


