module.exports = [
	{
		type: 'checkbox',
		name: 'isAdvanced',
		message: 'Advanced mode?',
		choices: [
			{
				name: 'No',
				checked: true
			},
			{
				name: 'Yes'
			}
		]
	},
	{
		type: 'input',
		name: 'extName',
		message: 'Name of your visualization extension',
		store: true,
		default: this.appname // Default to current folder name
	}
];


