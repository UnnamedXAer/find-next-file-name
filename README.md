# find-next-file-name
Add number in parentheses to file name if in specified location a file with given name already exists.

## Usage

```js
const findFextFileName = require('find-next-file-name');

console.log(findFextFileName(
    "C:/reports/", 
    "lastmonth.pdf"
));
```
Return example:
```sh
$ lastmonth (1).pdf
```

## Installation

```bash
$ npm install find-next-file-name
```

## API

### findFextFileName(directory[, ?filename[, ?continuCounting]])
