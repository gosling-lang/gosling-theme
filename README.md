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

// to customize the style

<GoslingComponent spec={spec} theme={{base: 'dark', axis: { baselineColor: 'green' }}>

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

This opens a webpage based on `demo/index.html`. 

To test with other themes defined in `src/`, you need to change the following line of code in `demo/index.html`:

```js
{
    theme: goslingTheme.Themes.washu
}
```

If you make changes in files below `src/`, you will need to re-run the `yarn start` command to test in the demo webpage.

### Updating Demo Page
If you want to display a specific font family (e.g., 'Roboto Condensed') that is not installed in your computer, you may want to embed the font in the demo webpage. You can do this by adding a single line of code in `demo/index.html` (Refer to the current code):

```html
<link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap" rel="stylesheet">
```

You can get this code, for example, in the Google Fonts website (https://fonts.google.com/specimen/Roboto+Condensed). Select "Light", "Regular", and "Bold" and the website will show you the source code like the above that you can use.

### Publish Package
When you patch the version and push the code with tags, GitHub will do the job to publish the latest NPM package:

```sh
yarn version --patch
git push origin master --tags
```
