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