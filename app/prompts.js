module.exports = [
	{
		type: 'input',
		name: 'extName',
		message: 'Name of your visualization extension',
		store: true,
		default: this.appname // Defaults to current folder name
	},
	{
		type: 'input',
		name: 'extDescription',
		message: 'Describe your visualization extension',
		store: true
	},
	{
		type: 'input',
		name: 'extNamespace',
		message: 'Namespace (leave blank if unsure)',
		store: true
	},
	{
		type: 'list',
		name: 'extTemplate',
		message: 'Choose a template',
		store: true,
		choices: ['Classic'],
		default: 'Classic'
	},
	{
		type: "confirm",
		name: "isAdvancedMode",
		message: "Enter advanced mode? (Choose [N]o if you are unsure).",
		default: false
	},
	{
		when: function ( props ) {
			return props.isAdvancedMode;
		},
		type: 'list',
		name: 'extLic',
		message: 'Choose a license',
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

	}

];


