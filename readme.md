# Empty Typescript project

Copy this repo to conveniently init an empty Typescript project.

## How this project was created

* From an empty directory, execute [commands](./init_typescript_prj.sh):

````bash
npm init -y
npm install --save-dev typescript @types/node
````

* Add to [package.json](./package.json).scripts:

````
"build": "tsc -p .",
"start": "npm run build && node ./build/index.js"
````

* Add file [tsconfig.json](./tsconfig.json):

````json
{
    "compilerOptions": {
        "module": "commonjs",
        "esModuleInterop": true,
        "target": "es6",
        "noImplicitAny": true,
        "moduleResolution": "node",
        "sourceMap": true,
        "outDir": "build",
        "baseUrl": ".",
        "paths": {
            "*": [
                "node_modules/*"
            ]
        }
    },
    "include": [
        "src"
    ]
}
````

* Create the main app file [src/index.ts](./src/index.ts)

## Build and run the app

````bash
npm run start
````
