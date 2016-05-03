# React quantity picker
React component that helps user select item quantity easily. Designed to work together with Bootstrap Button component. Supports Bootstrap's Buttons component classes.

## Quickstart
 - `npm install --save react-quantity-picker`
 - Import component: `var QtyPicker = require('react-quantity-picker')`

### Usage:
```javascript
var QtyPicker = require('react-quantity-picker')

var value = 1

<QtyPicker
  value = { value }
  onChange = { function (newValue) { value = newValue } } />
```

See <code>src/example/example.js</code> for more

## Component properties

### prop#value (Number)
Required. Define the value of the component.

### prop#onChange (Function)
Required. This function is triggered when picker value changes.

Example:

```javascript
function handleChange(newValue) {
  console.log(newValue)
}
```

### prop#btnCount (Number)
Optional. Define how many buttons are shown.
