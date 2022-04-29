<center>  
    <h1> Notice: Under development </h1>
</center>

# ![solid-bulma](/images/solid-bulma-banner.jpg)

<br/>


## Features
- Documented and Self explaining methods
- Small size without any external libraries

<br/>

## Installation
The plugin are available in node and yarn and package managers.
```bash
# Node
npm install solid-bulma # Not yet published

# Yarn
yarn add solid-bulma # Not yet published
```

<br/>

## Usage

### **Stylesheet**
Import the Bulma css in your css file.
```css
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css";
```

You can also import the stylesheet in your HTML file
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
```

Bulma style is also available in SASS
```bash
# Node
npm install bulma
```

<br/>

### **Components**
Using solid-bulma components
```jsx
import { BButton } from 'solid-bulma';

function App() {
    return (
        <div>
            <b-button
                color={'primary'}
                isLight={true}>
                Button
            </b-button>
        </div>
    )
}
```

<br/>

## License
Code released under [MIT](https://github.com/jaoaustero/solid-bulma/blob/main/LICENSE) license.