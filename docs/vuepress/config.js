// .vuepress/config.js
module.exports = {
	title: 'MT-Wapens',
	description: 'Met deze plugin voeg je wapens toe aan jouw Minetopia server.',
	head: [
		['link', { rel: 'icon', href: '/mtwapens.png' }]
	],
	theme: "yuu",
	themeConfig: {
		logo: '/mtwapens.png',
		nav: [
			{ text: 'Discord', link: 'https://discord.gg/AvRpCUZ' },
			{ text: 'Admin Panel', link: 'https://dash.mtwapens.nl' }
		],
		sidebar: [
			{
				title: 'MT-Wapens',
				collapsable: false,
				children: [
					'/',
					'/commands.md',
					'/guide/',
					'/config/',
				]
			},
			{
				title: 'Developers',
				collapsable: true,
				children: [
					'/api.md',
					'/naming-conventions.md',
				]
			}
		]
	}
}