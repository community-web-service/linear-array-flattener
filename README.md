# Linear Array Flattener

Linear function to flatten a multi-dimensional array of arbitrary depth.
Based on axelduch's Stack Overflow answer <https://stackoverflow.com/a/27282907>. In his answer, axelduch provided permission for modified or unmodified redistribution.
Linear time of O(n) without recursion. Memory complexity of O(1) with mutability turned on or O(n) with mutability turned off.
Supports IE > 5

## Installation

Install as a development dependency:

```shell
npm install --save-dev linear-array-flattener
```

## Usage

### Load the Module

```javascript
const linearFlat = require('linear-array-flattener');
```

### Call the Function
```javascript
flatArray = linearFlat(array, mutable);
```

## Parameters

* array: The array to be flattened.
* mutable: (Optional) Specify mutability of array. Defaults to false.

### Mutability

Improves performance by acting upon the source array. **The original array will be overwritten to [].** Mutability reduces memory complexity from O(n) to O(1).

## Examples

```javascript
const linearFlat = require('linear-array-flattener');

var mdArray = [1,undefined,[2,[3,4]]];
var flatArray;

// mutable = false
// Memory complexity of O(n)
flatArray = linearFlat(mdArray);
console.log(mdArray); // [1,undefined,[2,[3,4]]]
console.log(flatArray); // [1,undefined,2,3,4]

// mutable = true
// Memory complexity of O(1)
flatArray = linearFlat(mdArray, true);
console.log(mdArray); // []
console.log(flatArray); // [1,undefined,2,3,4]
```