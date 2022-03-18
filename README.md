# Promisfy remote-file-size

Get the size of a remote file with, under the hood is used: https://www.npmjs.com/package/remote-file-size

[![npm](https://badgen.net/npm/v/promisfy-remote-file-size)](https://www.npmjs.com/package/promisfy-remote-file-size)

## Install

```bash
$ npm install --save promisfy-remote-file-size
# or for the cli tool
$ npm install -g promisfy-remote-file-size
```

## Usage

```bash
$ promisfy-remote-file-size http://registry.npmjs.org/argsplit/-/argsplit-1.0.2.tgz
// => 1.55 kB
```

```bash
const remote = require('priomisify-remote-file-size')
const url = 'https://peakdevs.com/muhamed-resume.pdf'
await remote(url) // 219 kB
#or
remote(url).then(size => size) //219 kB
```

## CLI Usage

```
$ promisfy-remote-file-size --help

promisfy-remote-file-size - get the size of a remote file

  usage: promisfy-remote-file-size [options] <url>

  options:
    -h, --help                  show help and usage
    -v, --version               show version
    -r, --raw                   show raw result (no pretty formatting)
    -f, --follow-redirect       follow redirects (true by default)
    -m, --max-redirects <num>   set max number of redirects (defaults to 2)

  example:
    promisify-remote-file-size https://peakdevs.com/muhamed-resume.pdf
    // => 219 kB

    promisify-remote-file-size --raw https://peakdevs.com/muhamed-resume.pdf
    // => 218884

```

`promisfy-remote-file-size` uses `request` under the hood, so you could
also pass an options object instead of the url string.

## Author

Muhamed Didovic

## License

MIT (See `LICENSE` for more info)
