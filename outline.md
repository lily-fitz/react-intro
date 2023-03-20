**React Developer Tools**

`https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en`

<hr>

`Step 1` &nbsp;**Create a React Project**

- Open Terminal
- Change directory into the location you want to create your project, Ex. `cd Desktop`
- `npx create-react-app projectname`
- Go into the folder `cd projectname`
- Open VS Code `code .`
- Open VS Code terminal `Ctrl ~`
- Start the development server `npm start`

<hr>

`Step 2` &nbsp;**Remove Unnecessary Files**

Clean out SRC folder, leave only `index.js` & `App.js`
Remove references to deleted files from index.js & App.js.

<hr>

`Step 3` &nbsp;**JSX (Javascript XML)**

Javascript which looks like HTML

```Javascript
<p>hello world</p>
```

Anything dynamic we put in curly braces

```Javascript
<p>{2 + 2}</p>
```

- Only one top level element
- Can't use reserved keywords, Ex.className instead of class
  `https://www.w3schools.com/js/js_reserved.asp`
- Change Prettier to JSX/Javscript React for autocomplete

<hr>

`Step 4` &nbsp;**Components**

- Components look like JS functions.
- They're written in JSX.
- Export & import to pass into other components.

```Javascript
function Header() {
  return (
    <header>
      <h1>My App</h1>
    </header>
  );
}

export default Header
```

<hr>

`Step 5` &nbsp;**Data in JS & React**

Data is managed with Props (properties) and State.

There are 8 data types in JS.

- `Objects (as data type)` - data as properties, often written in key:value pairs `{firstName:'Kat'}`
- `String` - series of characters
- `Number` - integers (whole numbers) and floating-point numbers (numbers w/ decimals)
- `Boolean` - true or false
- `Null` - intentional absence of a value, set to null
- `Undefined` - a variable that has not been assigned a value or is set to undefined (ex. let)
- `Symbol` - a unique property key, created with `Symbol()`
- `BigInt` - numbers that are greater than the Number type can handle, Ex. `(10n)`

<hr>

`Step 6` &nbsp;**Uni-directional Data Flow & Passing Data as Props**

```Javascript
import Header from './Header.js'

function App() {
  return (
    <div>
    <Header name='Lily' />
    </div>
  );
}
```

```Javascript
function Header({name}) {
  return (
    <header>
      <h1>{name}</h1>
    </header>
  );
}

export default Header
```

<hr>

`Step 7` &nbsp;**Managing Data With State**

State is immutable, but it can be updated & reset.

```Javascript
import { useState } from 'react';

function App() {

  // const [data, function to update data] = useState(initial value of data)
  const [count, setCount] = useState(0);

  const addOne = () => {
    setCount(count + 1);
  }

  return (
    <div>
    <button onClick={addOne}>+ 1</button>
    <p>{count}</p>
    </div>
  );
}
```

<hr>

`Step 8` **Closing & Re-opening Project**

To close project: 
- Kill server `Ctrl C`
- Delete node_modules

To open back up: 
- Open VS Code terminal inside project folder
- Run `npm i` to re-install node_modules
- Then, run `npm start` to see project in the browser

