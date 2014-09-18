jQuery-Define
=============

A simple plugin for creating automatic definition pop-ups

## Install

Two files are required:
```
jquery.define.js
jquery.define.css
```

## Basic Use

```javascript
$('.define').definitions( {
  term: {
    word: 'contiguous',
    definition: 'touching; in contact'
  }
} );
```

Now the script will search for the first instance of 'contiguous' in any divs with a class of 'define', and add a definition pop-up:


## Multiple Definitions

```javascript
var $words = [
  {
    word: "contiguous",
    definition: "touching; in contact."
  }, {
    word: "slake",
    definition: "to allay (thirst, desire, wrath, etc.) by satisfying."
  }, {
    word: "mot",
    definition: "a pithy or witty remark; bon mot."
  }
]


$('.define').definitions( {
  term : $words,
} );
```
