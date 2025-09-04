# demo1-typeScript

## 1 Instalar TypeScript y configurar tsconfig.json

Más información - [Docs Oficiales](https://nodejs.org/en/learn/getting-started/nodejs-with-typescript)

1. Instalar TypeScript y tipos de Node, como dependencia de desarrollo

```
npm i -D typescript @types/node
```

2. Inicializar el archivo de configuración de TypeScript ( Se puede configurar al gusto)

```
npx tsc --init --outDir dist/ --rootDir src
```

_nota:_ mi configuracion personal. `tsconfig.json`

```
{
  "compilerOptions": {
    "target": "es2016",
    "module": "commonjs",
    "rootDir": "src",
    "outDir": "dist/",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  },
  "include": ["src"],
  "exclude": ["node_modules", "dist", "jest.config.ts", "test"]
}
```

## 2 Instalar nodemon y rimraf

4. Configurar Nodemon y Node-TS

```
npm install -D ts-node nodemon
```

5. Crear archivo de configuración de Nodemon - **nodemon.json**

```
{
  "watch": ["src"],
  "ext": ".ts,.js",
  "ignore": [],
  "exec": "npx ts-node ./src/index.ts"
}
```

6. Crear script para correr en desarrollo en el **package.json**

```
  "dev": "nodemon"
  "dev": "npx nodemon" // En caso de no querer instalar nodemon
```

7. Instalar rimraf (Herramienta que funciona similar al rm -f) eliminar directorio

```
npm install -D rimraf
```

8. Crear scripts en el package.json para construir e iniciar en producción

```
   "build": "rimraf ./dist && tsc",
   "start": "npm run build && node dist/app.js"
```

## 3 Instalar y configurar Jest en TypeScript - Node Js

Documentación [oficial sobre Jest](https://jestjs.io/docs/getting-started)

1. Instalaciones de desarrollo (super test es útil para probar Express)

```
npm install -D jest @types/jest ts-jest supertest
```

2. Crear archivo de configuración de Jest

```
npx create-jest@latest
```

3. En el archivo **jest.config.js** configurar

```
preset: 'ts-jest',
testEnvironment: "jest-environment-node",

Opcional - The paths to modules that run some code to configure or set up the testing environment before each test:
 setupFiles: ['dotenv/config'],
```

4. Crear scripts en el **package.json**

```
"test": "jest",
"test:watch": "jest --watch",
"test:coverage": "jest --coverage",
```
