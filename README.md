# Ask JS

A JavaScript library to ask basic questions.

## How-to

```js
ask.isDefined(foo);

ask.isString('foo');
```

## API

### ask.isArray(arr)
Returns true if the given argument is an array, false if it is not.
- `arr` {Array} - A given argument to analize.

```js
ask.isArray([1, 2, 3]); // true
```

### ask.isObject(obj)
Returns true if the given argument is an object, false if it is not.
- `obj` {Object} - A given argument to analize.

```js
ask.isObject({}); // true
```

### ask.isFunction(fn)
Returns true if the given argument is a function, false if it is not.
- `fn` {Function} - A given argument to analize.

```js
ask.isFunction(function(){}); // true
```

### ask.isString(str)
Returns true if the given argument is a string, false if it is not.
- `str` {String} - A given argument to analize.

```js
ask.isString('Hello World!'); // true
```

### ask.isNumber(num)
Returns true if the given argument is a number, false if it is not.
- `num` {Number} - A given argument to analize.

```js
ask.isNumber(1000); // true
```

### ask.isDate(date)
Returns true if the given argument is a date, false if it is not.
- `date` {Date} - A given argument to analize.

```js
ask.isDate(new Date()); // true
```

### ask.isRegexp(regexp)
Returns true if the given argument is a regular expresion, false if it is not.
- `regexp` {RegExp} - A given argument to analize.

```js
ask.isRegexp(new RegExp(foo)); // true
```

### ask.isNull(obj)
Returns true if the given argument is null, false if it is not.
- `obj` {Null} - A given argument to analize.

```js
ask.isNull(null); // true
```

### ask.isDefined(obj)
Returns true if the given argument is defined, false if it is not.
- `obj` {Object} - A given argument to analize.

```js
ask.isNull(window); // true
```

### ask.isNodeElement(node)
Returns true if the given argument is a node element, false if it is not.
- `node` {HTMLElement} - A given argument to analize.

```js
ask.isNodeElement(document.body); // true
```

### ask.hasFocus(node)
Returns true if the given argument has focus, false if it has not.
- `node` {HTMLElement} - A given argument to analize.

```js
ask.hasFocus(document); // true
```

### ask.isVisible(node)
Returns true if the given argument is visible into the viewport, false if it is not.
- `node` {HTMLElement} - A given argument to analize.

```js
ask.isVisible(document); // true
```

### ask.isEmpty(arr)
Returns true if the given array is empty, false if it is not.
- `arr` {Array} - A given argument to analize.

```js
ask.isEmpty([]); // true
```

### ask.hasValue(value, arr | str)
Returns true if the given argument is in a given array or string, false if it is not.
- `value` {String} - A given value to analize.
- `arr` {Array} - A given array or string to analize.
- `str` {String} - A given array or string to analize.

```js
ask.hasValue(2, [1,2,3]); // true

// or

ask.hasValue('World', 'Hello World'); // true
```

### ask.hasProperty(key, obj)
Returns true if a given object has a given key, false if it has not.
- `key` {String} - A given key to analize.
- `obj` {Object} - A given object to analize.

```js
ask.hasProperty('foo', {'foo': 'bar'}); // true
```

## Contact
- Guillermo Paz (Frontend developer - JavaScript developer | Web standards lover)
- E-mail: [guille87paz@gmail.com](mailto:guille87paz@gmail.com)
- Twitter: [@pazguille](http://twitter.com/pazguille)
- Web: [http://pazguille.me](http://pazguille.me)


## License
Licensed under the MIT license.

Copyright (c) 2013 [@pazguille](http://twitter.com/pazguille).
