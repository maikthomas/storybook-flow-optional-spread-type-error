This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Project to demonstrate storybook error with flow

### Try it

- `git clone git@github.com:maikthomas/storybook-flow-optional-spread-type-error.git`
- `cd storybook-flow-optional-spread-type-error`
- `npm i`
- `npm run start`
  Observe the app working, can see `OptionalSpreadTyped` component rendered in React dev tools.
  cancel with Ctrl+C and try
- `npm run storybook`
  Observe error:

```
ERROR in ./src/optional-spread-type.js
Module build failed (from ./node_modules/babel-loader/lib/index.js):
TypeError: Property elements[0] of ArrayExpression expected node to be of a type ["null","Expression","SpreadElement"] but instead got undefined
    at validate (/spread-type-test/node_modules/@babel/types/lib/definitions/utils.js:148:13)
    at validator (/spread-type-test/node_modules/@babel/types/lib/definitions/utils.js:97:7)
    at Object.validate (/spread-type-test/node_modules/@babel/types/lib/definitions/utils.js:172:7)
    at validate (/spread-type-test/node_modules/@babel/types/lib/validators/validate.js:17:9)
    at builder (/spread-type-test/node_modules/@babel/types/lib/builders/builder.js:46:27)
    at Object.ArrayExpression (/spread-type-test/node_modules/@babel/types/lib/builders/generated/index.js:232:31)
    at buildObjectExpression (/spread-type-test/node_modules/babel-plugin-react-docgen/lib/index.js:123:14)
    at buildObjectExpression (/spread-type-test/node_modules/babel-plugin-react-docgen/lib/index.js:108:60)
    at /spread-type-test/node_modules/babel-plugin-react-docgen/lib/index.js:81:19
    at Array.forEach (<anonymous>)
    at injectReactDocgenInfo (/spread-type-test/node_modules/babel-plugin-react-docgen/lib/index.js:73:17)
    at PluginPass.exit (/spread-type-test/node_modules/babel-plugin-react-docgen/lib/index.js:42:11)
    at newFn (/spread-type-test/node_modules/@babel/traverse/lib/visitors.js:193:21)
    at NodePath._call (/spread-type-test/node_modules/@babel/traverse/lib/path/context.js:53:20)
    at NodePath.call (/spread-type-test/node_modules/@babel/traverse/lib/path/context.js:40:17)
    at NodePath.visit (/spread-type-test/node_modules/@babel/traverse/lib/path/context.js:97:8)
 @ ./src/stories/index.js 6:0-57 13:29-47
 @ ./.storybook/config.js
 @ multi ./node_modules/@storybook/core/dist/server/config/polyfills.js ./node_modules/@storybook/core/dist/server/config/globals.js ./.storybook/config.js ./node_modules/webpack-hot-middleware/client.js?reload=true
```
