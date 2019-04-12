### POC to wrap my head on the making a js lib these days


### Goal

I want to write a js library the modern way that means:
- write it in ES6
- use the module loader (import/export) for peace of mind
- build a package that is compatible both with the browser and node.js
- have a developer friendly setup (watcher and reloader during development session)

### Tools

- Rollup to bundle all the things
- Babel to transpile the code


### Commands

- `npm start` to begin the development session
- `npm run browser` and go to http://localhost:8080
- `npm run node`