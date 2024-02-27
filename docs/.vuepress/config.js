// .vuepress/config.js
module.exports = {
	base: '/docs',
	postcss: {
		plugins: [
			require('css-prefers-color-scheme/postcss'),
		]
	},
	title: 'Gunshell Documentation',
	description: 'This is the documentation for Gunshell.',
	head: [
		['link', { rel: 'icon', href: '/gunshell.png' }]
	],
	theme: "yuu",
	themeConfig: {
		logo: '/gunshell.png',
		nav: [
			{ text: 'Discord', link: 'https://discord.gg/AvRpCUZ' }
		],
		sidebar: [
			{
				title: 'Gunshell Documentation',
				collapsable: false,
				children: [
					'/',
					'/commands/commands',
					'/api.md'
				]
			},
			{
				title: 'Configuration',
				collapsable: false,
				children: [
					'/config/config',
					'/config/weapons',
					'/config/ammunition',
					'/config/throwables',
					'/config/melee',
				]
			},
			{
				title: 'Tutorials',
				collapsable: false,
				children: [
					'/tutorials/reverse-proxy'
				]
			}
		]
	}
}
