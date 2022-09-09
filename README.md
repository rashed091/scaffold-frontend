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

### Add Webpack support for react hot reload
```
yarn add -D @pmmmwh/react-refresh-webpack-plugin react-refresh
```
