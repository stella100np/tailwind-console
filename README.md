# tailwind-console

console like tailwind

## Installation

Install my-project with npm

```bash
npm i tailwind-console
```
    
## Usage/Examples

```javascript
import { beautify } from "tailwind-console"

console.log(beautify("text-azure-500", "foo"))

console.log(beautify("text-azure-500")("foo"))

//curried
let azureText = beautify("text-azure-500")
console.log(azureText("foo"))
```


## Features

- typescript
- tailwind style 
- curry


## Roadmap

- Add style support,such as `Bold`, `Italic`
