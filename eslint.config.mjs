import js from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';
import * as parserVue from 'vue-eslint-parser';
import configPrettier from 'eslint-config-prettier';
import pluginPrettier from 'eslint-plugin-prettier';
import pluginImport from 'eslint-plugin-import';
import { defineFlatConfig } from 'eslint-define-config';
import * as parserTypeScript from '@typescript-eslint/parser';
import pluginTypeScript from '@typescript-eslint/eslint-plugin';
import unusedImports from 'eslint-plugin-unused-imports';

export default defineFlatConfig([
    {
        ...js.configs.recommended,
        plugins: {
            prettier: pluginPrettier,
        },
        rules: {
            ...configPrettier.rules,
            ...pluginPrettier.configs.recommended.rules,
            // 强等于
            "eqeqeq": "error",
            // 允许debugger
            'no-debugger': 'off',
            'no-unused-vars': [
                'error',
                {
                    argsIgnorePattern: '^_',
                    varsIgnorePattern: '^_',
                },
            ],
            'prettier/prettier': [
                'error',
                {
                    endOfLine: 'auto',
                },
            ],
        }
    },
    {
        files: ['**/*.?([cm])ts', '**/*.?([cm])tsx'],
        languageOptions: {
            parser: parserTypeScript,
            parserOptions: {
                sourceType: 'module',
            },
        },
        plugins: {
            '@typescript-eslint': pluginTypeScript,
        },
        rules: {
            ...pluginTypeScript.configs.strict.rules,
            '@typescript-eslint/no-dynamic-delete': 'off',
            '@typescript-eslint/ban-types': 'off',
            '@typescript-eslint/no-invalid-void-type': 'off',
            '@typescript-eslint/no-redeclare': 'error',
            '@typescript-eslint/ban-ts-comment': 'off',
            '@typescript-eslint/prefer-ts-expect-error': 'off',
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/prefer-as-const': 'warn',
            '@typescript-eslint/no-empty-function': 'off',
            '@typescript-eslint/no-non-null-assertion': 'off',
            '@typescript-eslint/no-import-type-side-effects': 'error',
            '@typescript-eslint/explicit-module-boundary-types': 'off',
            '@typescript-eslint/consistent-type-imports': [
                'error',
                { disallowTypeAnnotations: false, fixStyle: 'inline-type-imports' },
            ],
            '@typescript-eslint/prefer-literal-enum-member': ['error', { allowBitwiseExpressions: true }],
            '@typescript-eslint/no-unused-vars': [
                'error',
                {
                    argsIgnorePattern: '^_',
                    varsIgnorePattern: '^_',
                },
            ],
        },
    },
    {
        files: ['**/*.d.ts'],
        rules: {
            'eslint-comments/no-unlimited-disable': 'off',
            'import/no-duplicates': 'off',
            'unused-imports/no-unused-vars': 'off',
        },
    },
    {
        files: ['**/*.?([cm])js'],
        rules: {
            '@typescript-eslint/no-require-imports': 'off',
            '@typescript-eslint/no-var-requires': 'off',
        },
    },
    {
        files: ['**/*.vue'],
        languageOptions: {
            parser: parserVue,
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
                extraFileExtensions: ['.vue'],
                parser: parserTypeScript,
                sourceType: 'module',
            },
        },
        plugins: {
            vue: pluginVue,
        },
        processor: pluginVue.processors['.vue'],
        rules: {
            ...pluginVue.configs.base.rules,
            ...pluginVue.configs['vue3-essential'].rules,
            ...pluginVue.configs['vue3-recommended'].rules,
            // 禁止使用未声明变量
            'no-undef': 'off',
            // 禁止使用v-html
            'vue/no-v-html': 'off',
            'vue/require-default-prop': 'off',
            'vue/require-explicit-emits': 'off',
            'vue/multi-word-component-names': 'off',
            'vue/no-setup-props-reactivity-loss': 'off',
            'vue/no-v-for-template-key-on-child': 'off',
            'vue/html-self-closing': [
                'error',
                {
                    html: {
                        void: 'always',
                        normal: 'always',
                        component: 'always',
                    },
                    svg: 'always',
                    math: 'always',
                },
            ],
        }
    },
    {
        files: ['**/*.vue', '**/*.?([cm])ts', '**/*.?([cm])tsx'],
        plugins: {
            import: pluginImport,
            'unused-imports': unusedImports,
        },
        rules: {
            'import/first': 'error',
            'import/no-duplicates': 'error',
            'import/order': [
                'error',
                {
                    groups: [
                        'builtin', // 内置模块，如 path，fs等 Node.js内置模块
                        'external', // 外部模块，第三方库
                        'internal', // 内部引用，如相对路径的模块、包名前缀为 @ 的模块
                        'parent', // 父级目录的模块
                        'sibling', // 同级目录的模块
                        'index', // 当前目录的 index 文件
                        'object', // 使用ES6 导入的模块
                        'type', // 类型文件
                    ],

                    pathGroups: [
                        {
                            pattern: 'vue',
                            group: 'external',
                            position: 'before',
                        },
                        {
                            pattern: '@vue/**',
                            group: 'external',
                            position: 'before',
                        },
                        {
                            pattern: 'ant-design-vue',
                            group: 'internal',
                        },
                    ],
                    pathGroupsExcludedImportTypes: ['type'],
                },
            ],

            'unused-imports/no-unused-imports': 'error',
            // 如需保存时自动删除未引用代码，可注释掉该规则
            'unused-imports/no-unused-vars': [
                'warn',
                {
                    vars: 'all',
                    varsIgnorePattern: '^_',
                    args: 'after-used',
                    argsIgnorePattern: '^_',
                },
            ],
        }
    },
    {
        linterOptions: {
            reportUnusedDisableDirectives: 'off',
        },
        ignores: [
            'doc/assets/**',
            '*.sh',
            'node_modules',
            '*.md',
            '*.woff',
            '*.ttf',
            '.vscode',
            '.idea',
            'dist',
            '/public',
            '.husky',
            '.local',
            '/bin',
            'Dockerfile',
        ],
    },
]);