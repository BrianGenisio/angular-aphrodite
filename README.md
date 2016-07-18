# Angular-Aphrodite: Angular bindings for [Aphrodite](https://github.com/Khan/aphrodite)
[![npm version](https://badge.fury.io/js/angular-aphrodite.svg)](https://badge.fury.io/js/angular-aphrodite)

## Installation
```
npm install --save angular aphrodite angular-aphrodite
```

## Usage
You can use the binding to Aphrodite via a `ng-class` filter, or as a `css` attribute directive.

Considering an [Aphrodite](https://github.com/Khan/aphrodite) StyleSheet that looks like this:
```js
$scope.styles = StyleSheet.create({
  red: {
    backgroundColor: 'red'
  },

  blue: {
    backgroundColor: 'blue'
  },

  small: {
    '@media (max-width: 600px)': {
        backgroundColor: 'red',
      }
  }
});
```

### `ng-class | css` filter
```html
<span ng-class="styles.red | css">This is red.</span>
<span ng-class="[styles.blue, styles.small] | css">This is blue and small.</span>
```

### `css` attribute directive
```html
<span css="styles.red">This is red.</span>
<span css="[styles.blue, styles.small]">This is blue and small.</span>
```

## Template Style Definitions
Alternatively, you can define the styles in the template instead of the JavaScript.  If you choose to do it this way, *you must use JSON syntax*:

```html
<stylesheet name="templateStyle">
  {
    "red": {
      "backgroundColor": "red"
    }
  }
</stylesheet>

<span ng-class="templateStyle.red | css">red stuff</span>
<span css="templateStyle.red">red stuff</span>
```

## CommonJS Bootstrapping
*JS:*
```js
import angular from 'angular';
import {StyleSheet} from 'aphrodite';
import angularAphrodite from 'angular-aphrodite';

var styles = StyleSheet.create({
  // styles
});

angular.module('app', [angularAphrodite]);
```

## UMD Bootstrapping
*HTML:*
```html
<script type="text/javascript" src="node_modules/angular/angular.js"></script>
<script type="text/javascript" src="node_modules/aphrodite/dist/aphrodite.umd.js"></script>
<script type="text/javascript" src="node_modules/angular-aphrodite/dist/angular-aphrodite.umd.js"></script>
```

*JS:*
```js
var styles = aphrodite.StyleSheet.create({
  // styles
});

angular.module('app', ['angular-aphrodite']);
```

## Examples
- [UMD](example/umd)
- [CommonJS](example/commonjs)


