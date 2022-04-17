# promisify remote-file-size

Get the size of a remote file with, under the hood is used: https://www.npmjs.com/package/remote-file-size

[![npm](https://badgen.net/npm/v/promisify-remote-file-size)](https://www.npmjs.com/package/promisify-remote-file-size)
[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fmuhamed-didovic%2Fpromisify-remote-file-size&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false)](https://hits.seeyoufarm.com)

## Install

```bash
$ npm install --save promisify-remote-file-size
# or for the cli tool
$ npm install -g promisify-remote-file-size
```

## Usage

```bash
$ promisify-remote-file-size http://registry.npmjs.org/argsplit/-/argsplit-1.0.2.tgz
// => 1.55 kB
```

```bash
const remote = require('promisify-remote-file-size')
const url = 'https://peakdevs.com/muhamed-resume.pdf'
await remote(url) // 219 kB
#or
remote(url).then(size => size) //219 kB
```

## CLI Usage

```
$ promisify-remote-file-size --help

promisify-remote-file-size - get the size of a remote file

  usage: promisify-remote-file-size [options] <url>

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

`promisify-remote-file-size` uses `request` under the hood, so you could
also pass an options object instead of the url string.

## Author

Muhamed Didovic

## License

MIT (See `LICENSE` for more info)
