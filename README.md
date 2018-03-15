Simple repro of a problem with FuseBox bundling.

1. clone
2. `npm install`
3. `node fuse.js`
4. Check browser console:

```
Uncaught TypeError: Object prototype may only be an Object or null: undefined
    at Function.create (<anonymous>)
    at Object.inherits (vendor.js:4011)
    at Object.<anonymous> (vendor.js:1183)
    at d (vendor.js:6548)
    at b.require (vendor.js:6548)
    at Object.<anonymous> (vendor.js:1074)
    at d (vendor.js:6548)
    at b.require (vendor.js:6548)
    at Object.<anonymous> (vendor.js:1048)
    at d (vendor.js:6548)
```
