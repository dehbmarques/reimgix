![reimgix](./logo.png)

[![npm](https://img.shields.io/npm/v/reimgix.svg?style=flat-square)](https://www.npmjs.com/package/reimgix)
[![npm](https://img.shields.io/npm/dt/reimgix.svg?style=flat-square)](https://www.npmjs.com/package/reimgix)
[![GitHub issues](https://img.shields.io/github/issues/one-market/reimgix.svg?style=flat-square)](https://github.com/one-market/reimgix/issues)
[![GitHub stars](https://img.shields.io/github/stars/one-market/reimgix.svg?style=flat-square)](https://github.com/one-market/reimgix/stargazers)
[![Twitter](https://img.shields.io/twitter/url/https/github.com/one-market/reimgix.svg?style=social&style=flat-square)](https://twitter.com/intent/tweet?url=https://github.com/one-market/reimgix)

:city_sunrise: React utils to [imgix™](https://www.imgix.com/)

# Usage

Generate a stringified url with params

```js
import { generate } from 'reimgix'

const url = generate('http://your.site/img.png?fit=clamp', { h: 50 })
// url = http://your.site/img.png?fit=clamp&h=50
```

```js
const url = generate(
  'http://your.site/img.png?fit=clamp',
  { h: 50 },
  { removeUrlParams: true } // will remove fit=clamp
)
// url = http://your.site/img.png?h=50
```

Lqip techinique

<!-- prettier-ignore -->
```jsx
import { Lqip, generate } from 'reimgix'

const url = generate('http://your.site/bear.png?fit=clamp', { h: 50 })

const App = () => (
  <Lqip src={url}>
    {({ src }) => (
      <img src={src} alt="Bear" />
    )}
  </Lqip>
)
```

```jsx
import { Lqip, generate } from 'reimgix'

const url = generate('http://your.site/bear.png?fit=clamp', { h: 50 })

const App = () => (
  <Lqip src={url}>
    {({ src, loaded }) => (
      <div>
        Image below is using {loaded ? 'full version' : 'lqip version'}
        <img src={src} alt="Bear" />
      </div>
    )}
  </Lqip>
)
```

# Install

### Node Module

```
yarn add reimgix

# or

npm i reimgix
```

### UMD library

```html
<script src="https://unpkg.com/reimgix/dist/reimgix.min.js"></script>
```

exposed as `Reimgix`

# Contribute

You can help improving this project by sending PRs and helping with issues.
