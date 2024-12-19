import globals from 'globals';

export default [
	{
		languageOptions: {
			ecmaVersion: 2021,
			sourceType: 'module',
			globals: {
				...globals.browser,
				supportsLocalStorage: 'readonly',
				cryptoRandom: 'readonly'
			},
		},
		rules: {
			'indent': ['error', 2],
			'linebreak-style': ['error', 'unix'],
			'quotes': ['error', 'single'],
			'semi': ['error', 'always'],
			'no-unused-vars': 'warn',
			'no-console': 'warn'
		}
	}
];
