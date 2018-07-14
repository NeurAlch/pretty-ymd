# pretty-ymd [![Build Status: Linux and macOS](https://travis-ci.org/PabloRosales/pretty-ymd.svg?branch=master)](https://travis-ci.org/PabloRosales/pretty-ymd)

> Get YMD HMS format strings from your Date objects or the current Date

Simple collection of functions for getting the common YMD HMS format for dates and datetime,
used in things like databases and logging.

## Install

```
$ npm install pretty-ymd
```
<a href="https://www.patreon.com/pablorosales">
	<img src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" width="160">
</a>

## Usage

```js
const ymd = require("pretty-ymd");

ymd.getCurrentDatetime()
// => "2018-01-01 05:05:02"

const date = new Date();
ymd.getDate(date)
// => "2018-01-10"

const now = new Date();
ymd.getTime(now)
// => "05:05:02"

ymd.getCurrentMinutes();
// => "05"
```

## Methods

### `getDate`

Returns a string with the format `yyyy-mm-dd` for the date argument passed. Month and Day will always have two characters starting with `01`

```js
const date = new Date();
ymd.getDate(date)
// => "2018-07-14"
```

### `getCurrentDate`

Same as `getDate` but for the current date.

```js
ymd.getCurrentDate()
// => "2018-07-14"
```

### `getDatetime`

Returns a string with the format `yyyy-mm-dd HH:MM:ss` for the date argument passed. Month, Day, Hour, Minute and Second will always have two characters starting with `01`

```js
const date = new Date();
ymd.getDatetime(date)
// => "2018-07-14 00:39"
```

### `getCurrentDatetime`

Same as `getDatetime` but for the current date.

```js
ymd.getCurrentDatetime()
// => "2018-07-14 00:39"
```

### `getTime`

Returns a string with the format `HH:MM:ss` for the date argument passed. Hours, Minutes and seconds will always have two characters starting with `01`

```js
const date = new Date();
ymd.getTime(date)
// => "00:39"
```

### `getCurrentTime`

Same as `getTime` but for the current date.

```js
ymd.getCurrentTime()
// => "00:39"
```

### `getYear`

Returns the full year of the date argument passed.

```js
const now = new Date();
ymd.getYear(now)
// => "2018"
```

### `getCurrentYear`

Returns the full year of the current date.

```js
ymd.getCurrentYear()
// => "2018"
```

### `getMonth`

Returns the month of the date argument passed. Will always return 2 characters, starting with `01`

```js
const now = new Date();
ymd.getMonth(now)
// => "07"
```

### `getCurrentMonth`

Same as `getMonth` but for the current date.

```js
ymd.getCurrentMonth()
// => "07"
```

### `getDay`

Returns the day of the date argument passed. Will always return 2 characters, starting with `01`

```js
const now = new Date();
ymd.getDay(now)
// => "14"
```

### `getCurrentDay`

Same as `getDay` but for the current date.

```js
ymd.getCurrentDay()
// => "14"
```

### `getHours`

Returns the hours for the date argument passed. Will always return 2 characters, starting with `01`

```js
const now = new Date();
ymd.getHours(now)
// => "00"
```

### `getCurrentHours`

Same as `getHours` but for the current date.

```js
ymd.getCurrentHours()
// => "00"
```

### `getMinutes`

Returns the minutes for the date argument passed. Will always return 2 characters, starting with `01`

```js
const now = new Date();
ymd.getMinutes(now)
// => "45"
```

### `getCurrentMinutes`

Same as `getMinutes` but for the current date.

```js
ymd.getCurrentMinutes()
// => "45"
```

### `getSeconds`

Returns the seconds for the date argument passed. Will always return 2 characters, starting with `01`

```js
const now = new Date();
ymd.getSeconds(now)
// => "59"
```

### `getCurrentSeconds`

Same as `getSeconds` but for the current date.

```js
ymd.getCurrentSeconds()
// => "59"
```

## License

MIT © [Pablo Rosales](https://pablorosales.xyz)