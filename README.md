# xtpl4koa2
A temp polyfill of xtpl for koa2. This my personl plugin. Offcial update please watch https://github.com/xtemplate/xtpl

### Installation:
```bash
npm install --save koa xtemplate xtpl
```

### Usage:
Please refer to repo/example
```javascript
var Koa = require( 'koa' );
var xtpl = require( '../src/koa2' ); // You can copy koa2.js to your own project and require it according to your project dir structure.
var path = require( 'path' );

// -------------------------- main -------------------------------
var app = new Koa();

xtpl( app,{
    views: path.resolve( __dirname, 'views' )
} );

app.use( async function(ctx){
  await ctx.render( 'index', {
    name: 'Bernie'
  } )
} );

app.listen(80);
```
