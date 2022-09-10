# React Typescript Starter Project

### Initialize the project with command

```
yarn init -y
```

#### Add react packages
```
yarn add react react-dom
```


#### Add typescript support packages
```
yarn add -D typescript @types/react @types/react-dom
```

#### Add typescript config tsconfig.json file
```json
{
  "compilerOptions": {
    "target": "ES5",
    "module": "ESNext",
    "moduleResolution": "node",
    "lib": [
      "DOM",
      "ESNext"
    ],
    "jsx": "react-jsx",
    "noEmit": true,
    "isolatedModules": true,
    "esModuleInterop": true,
    "strict": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
  },
  "include": ["src/**/*"]
}
```
#### Add babel dev dependencies
```
yarn add -D @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript @babel/plugin-transform-runtime babel-loader
```

#### Add babel config
```json
{
  "presets": [
    "@babel/preset-env",
    [
      "@babel/preset-react",
      {
        "runtime": "automatic"
      }
    ],
    "@babel/preset-typescript"
  ],
  "plugins": [
    [
      "@babel/plugin-transform-runtime",
      {
        "regenerator": true
      }
    ]
  ]
}
```
#### Add webpack dev dependencies
```
yarn add -D webpack webpack-cli webpack-dev-server html-webpack-plugin
```
#### Add webpack CSS support
```
yarn add -D css-loader style-loader
```

#### Add a declarations.d.ts file
Allows us to do imline import of image files

#### Add webpack merge package
```
yarn add -D webpack-merge
```

#### Add Webpack support for react hot reload
```
yarn add -D @pmmmwh/react-refresh-webpack-plugin react-refresh
```


#### Add eslint support
```
yarn add -D eslint eslint-plugin-react eslint-plugin-react-hooks @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-import eslint-plugin-jsx-a11y eslint-config-prettier eslint-plugin-eslint-comments
```

#### Add eslint config
```javascript
module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:jsx-a11y/recommended',
    'plugin:eslint-comments/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/no-var-requires': 'off',
    'react/prop-types': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
}
```

#### Add prettier packages
```
yarn Add -D prettier eslint-config-prettier eslint-plugin-prettier
```

#### Add prettier config
```javascript

```

#### Add precommit config
```
yarn add -D husky lint-staged
```

```json
  "lint-staged": {
    "src/**/*.{js,jsx,ts,tsx,json}": [
      "eslint --fix"
    ],
    "src/**/*.{js,jsx,ts,tsx,json,css,scss,md}": [
      "prettier --write"
    ]
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  }
```
