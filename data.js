var data = function( db, originalUrl ) {
  var shortUrl;
  var urls = db.collection( 'urls' );
  // var numberOfUrls = 0;
  urls.count( {}, function( err, count ) {
    if ( err ) {
      console.log( 'Error: count failed -- ' );
    } else {
      var slug = count + 1;
    }
    urls.find({
      originalUrl: originalUrl
    }).toArray(function( err, docs ) {
      if ( err ) {
        console.log( 'Error: Could not look up original url in db' );
      } else {
        if ( docs.length === 0 ) {
          var urlObject = {};
          if ( originalUrl[4] === 's' ) {
            urlObject = {
              originalUrl: originalUrl,
              shortUrl: 'https://smlr-url.herokuapp.com/' + parseInt( slug, 10)
            };
          } else {
            urlObject = {
              originalUrl: originalUrl,
              shortUrl: 'http://smlr-url.herokuapp.com/' + parseInt( slug, 10)
            };
          }
          urls.insert( urlObject, function() {
            var nonIdUrlObject = {
              originalUrl: originalUrl,
              shortUrl: shortUrl
            };
            return "Success";

          })
        }
      }
    });
    // console.log( urlObject );
  });
};


module.exports = data;
