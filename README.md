# React Toaster Fly

[![npm][version]][npm-url]
[![License][license]][npm-url]
[![Download][download]][npm-url]

[version]: https://img.shields.io/npm/v/react-toaster-fly.svg?style=flat-square
[license]: https://img.shields.io/github/license/your-username/react-toaster-fly?style=flat-square
[download]: https://img.shields.io/npm/dt/react-toaster-fly?style=flat-square
[npm-url]: https://www.npmjs.com/package/react-toaster-fly

A lightweight, customizable React sidebar component with essential navigation features.

## Features

- 🎨 Customizable colors for all elements
- 🖥️ Customizable Positions
- 🔘 Custom Icon Support
- 🟠 Active item highlighting - text color
- 🔳 Configurable border radius
- 📱 Responsive design

## Installation

```bash
npm i react-toaster-fly
```

## Usage

```jsx
import "./App.css";
import Toast from "react-toaster-fly";
import { BiError } from "react-icons/bi";

function App() {
  return (
    <div>
      <Toast
        message={"Error while creating account"}
        icon={BiError}
        position={"top-left"} // top-let, top-right, bottom-left, bottom-right
        timeout={5000}
        radius={"10px"}
        background={"red"}
        color={"white"}
      />
    </div>
  );
}

export default App;
```
