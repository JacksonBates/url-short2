var data = function( db, originalUrl ) {

  var urls = db.collection( 'urls' );
  var numberOfUrls = 0;
  urls.count( {}, function( err, count ) {
    if ( err ) {
      console.log( 'Error: count failed -- ' );
    } else {
      var slug = count + 1;
      var urlObject = {};
      if ( originalUrl[4] === 's' ) {
        urlObject = {
          originalUrl: originalUrl,
          shortUrl: 'https://smlr-url.herokuapp.com/' + slug
        };
      } else {
        urlObject = {
          originalUrl: originalUrl,
          shortUrl: 'http://smlr-url.herokuapp.com/' + slug
        };
      }
    }
    // console.log( urlObject );
    console.log( urlObject );
  });
};


module.exports = data;
