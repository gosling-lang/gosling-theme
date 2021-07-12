# Gosling Themes
Styling themes for [Gosling.js](http://gosling.js.org/) visualizations.

(This repository is under development)

## How To Use
```js
import { Themes, getTheme } from 'gosling-theme';
import { GoslingComponent } from 'gosling.js';

<GoslingComponent spec={spec} theme={Themes.dark}>

// or

<GoslingComponent spec={spec} theme={getTheme('dark')}>

// or just

<GoslingComponent spec={spec} theme={'dark'}>

```

You can find an example `html` file below `\demo`.

## Development
### Install Packages
```sh
yarn
```

### Run Demo
```sh
yarn start
```

### Publish Package
When you patch the version and push the code with tags, GitHub will do the job to publish the latest NPM package:

```sh
yarn version --patch
git push origin master --tags
```
