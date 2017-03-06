var Koa = require( 'koa' );
var xtpl = require( '../src/koa2' );
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
