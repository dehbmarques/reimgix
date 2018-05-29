![reimgix](./logo.png)

[![npm](https://img.shields.io/npm/v/reimgix.svg?style=flat-square)](https://www.npmjs.com/package/reimgix)
[![npm](https://img.shields.io/npm/dt/reimgix.svg?style=flat-square)](https://www.npmjs.com/package/reimgix)
[![GitHub issues](https://img.shields.io/github/issues/one-market/reimgix.svg?style=flat-square)](https://github.com/one-market/reimgix/issues)
[![GitHub stars](https://img.shields.io/github/stars/one-market/reimgix.svg?style=flat-square)](https://github.com/one-market/reimgix/stargazers)
[![Twitter](https://img.shields.io/twitter/url/https/github.com/one-market/reimgix.svg?style=social&style=flat-square)](https://twitter.com/intent/tweet?url=https://github.com/one-market/reimgix)

:camera: Get all the benefits of [imgix™](https://www.imgix.com/) using
React. Supports LQIP.

---

**Reimgix** – is a small component that helps you get
all benefits from your imgix images. It works with LQIP (Lower Quality Image
Placeholder) by default, also you can pass your arbitrary params.

---

# LQIP?

LQIP means **Low-Quality Image Placeholder**.\
The technique consists in first shows a low quality image to the user, while the
high quality image is loded in background. Then, the high quality image is shown.

Low quality: 11kb (LQIP)\
![Low](https://static-a.imgix.net/starfish.png?w=400&px=16&blur=200&auto=format)

High quality: 391kb\
![High](https://static-a.imgix.net/starfish.png?w=400)

[Read more here](https://blog.imgix.com/2016/06/01/lqip-your-images.html)

# How to use

## Simple (LQIP enabled by default)

```jsx
// App.jsx
import React from 'react'
import Reimgix from 'reimgix'

const App = () => (
  <div>
    <Reimgix src="https://static-a.imgix.net/starfish.png">
      {({ src }) => <img src={src} alt="Starfish" />}
    </Reimgix>
  </div>
)

export default App
```

## Passing params and using as a div background image

```jsx
// App.jsx
import React from 'react'
import Reimgix from 'reimgix'

const App = () => (
  <div>
    <Reimgix
      params={{ w: 200, h: 200 }}
      src="https://static-a.imgix.net/starfish.png"
    >
      {({ src }) => (
        <div
          style={{
            backgroundImage: `url(${src}) no-repeat center center`,
            width: 200,
            height: 200,
          }}
        />
      )}
    </Reimgix>
  </div>
)

export default App
```

## Custom LQIP params

> _What params will be used to generate LQIP?_

the default params are: `{ px: '8', blur: '100', auto: 'format,compress' }`

```jsx
// App.jsx
import React from 'react'
import Reimgix from 'reimgix'

const App = () => (
  <div>
    <Reimgix
      lqipParams={{ px: '8', blur: '100' }}
      src="https://static-a.imgix.net/starfish.png"
    >
      {({ src }) => <img src={src} alt="Starfish" />}
    </Reimgix>
  </div>
)

export default App
```

## Disable LQIP

```jsx
// App.jsx
import React from 'react'
import Reimgix from 'reimgix'

const App = () => (
  <div>
    <Reimgix
      lqip={false}
      params={{ w: 300 }}
      src="https://static-a.imgix.net/starfish.png"
    >
      {({ src }) => <img src={src} alt="Starfish" />}
    </Reimgix>
  </div>
)

export default App
```

# Props API

`params`\
default: `{}`

> The params that will be used in your imgix image

`useSrcParams`\
default: `true`

> If true, Reimigix will merge your src params with props params Ex.:
> http://site.com/image.png?w=300 will use http://site.com/image.png image with
> params merged into { w: 300 }

> If false, Reimgix will discard all src params.

`lqip`\
default: `true`

> Enable lqip technique

`lqipParams`\
default: `{ px: '8', blur: '100', auto: 'format,compress' }`

> Params that will be used to genered LQIP src image

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
