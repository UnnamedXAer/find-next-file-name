# find-next-file-name
Add number in parentheses to file name if in specified location a file with given name already exists.

## Usage

```js
const findNextFileName = require('find-next-file-name');

console.log(findNextFileName(
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

### findNextFileName(directory[, ?filename[, ?continuCounting]])
