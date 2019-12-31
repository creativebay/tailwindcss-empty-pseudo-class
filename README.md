# tailwindcss-empty-pseudo-class
TailwindCSS plugin that adds support for `:empty` pseudo class

## Instalation

Using `npm`:

```bash
npm i tailwindcss-empty-pseudo-class
```

Using `yarn`:

```bash
yarn add tailwindcss-empty-pseudo-class
```

## Configuration

```js
module.exports = {
  // ...
  variants: {
    display: ['responsive', 'empty']
  },
  plugins: [
    require('tailwindcss-empty-pseudo-class')()
  ]
  // ...
}
```

## Usage

```html
<!-- This element will be visible -->
<div class="empty:hidden">Content</div>

<!-- This element will be hidden -->
<div class="empty:hidden"></div>
```
