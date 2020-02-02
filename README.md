# exit-with

Node.js terminal exit codes for humans and machines.

## Install

TODO

## Usage

Call `exitWith` with a valid exit status...

```javascript
import { exitWith, UsageError } from 'exit-with'

exitWith(UsageError)
```

...and the program will exit with a friendly message:

```
=> Error(64): Command line usage error.
```

## API

TODO

## Prior art

The main inspiration for this package comes from [tty-exit](https://github.com/piotrmurach/tty-exit) and the error codes mirror this package where possible
