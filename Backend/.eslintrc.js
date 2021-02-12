module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es2020: true,
	},
	extends: 'eslint:recommended',
	parserOptions: {
		ecmaVersion: 11,
	},
	'linebreak-style': ['error', 'unix'],
	rules: {
		indent: ['error', 'tab'],
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
		'multiline-comment-style': ['error', 'starred-block'],
	},
};
