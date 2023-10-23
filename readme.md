## Expo Styled-Components

* Link Styled Component Exemplo
```
https://www.youtube.com/watch?v=cWD_hMoge-0&t=2332s
```

* Link React Router
```
https://www.youtube.com/watch?v=DtFnUvm3xeU&t=152s
```

* Link React Router
```
https://www.youtube.com/watch?v=sIIF74jNg3E&t=340s
```


* instalação
```
npx create-expo-app navigationapp --template
```

### Dependências
* styled-components
```
npm install styled-components
```

* tipagem
```
npm install @types/styled-components-react-native -D
```

### Navegação
* 
```
npx expo start --clear
```
* Link Expo Router 1
```
https://www.youtube.com/watch?v=DtFnUvm3xeU&t=152s
```

* Link Expo Router 2
```
https://www.youtube.com/watch?v=sIIF74jNg3E&t=340s
```
* Doc
```
https://docs.expo.dev/routing/installation/#quick-start
```

* Dependencias
```
npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar react-native-gesture-handler
```

* Dependencias Complemento
```
npx expo install react-native-web@~0.19.6
```

#### Configurando
* app.json
```
"scheme": "expo-router-v2",
"scheme": "your-app-scheme"
```

```
 "web": {
      "favicon": "./assets/favicon.png",
      "bundler": "metro"
    },
```

* package.json
```
"main": "expo-router/entry",
```

* babel.config.js
```
plugins: ['expo-router/babel'],
```