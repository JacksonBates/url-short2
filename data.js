module.exports = function( app, db ) {

   var urls = db.collection( 'urls' );
   var numberOfUrls = 0;

   function generateSlugNumber(urls) {
     urls.count( {}, function( err, count ) {
       if ( err ) {
         console.log( 'Error: count failed -- ' );
       } else {
         numberOfUrls = count;
         console.log( 'Number of entries in the DB: ' + numberOfUrls );
       }
       return numberOfUrls + 1;
     });
   }

     function createUrlObject(app, originalUrl) {
       var urlObject = {
         originalUrl: originalUrl,
         shortUrl: generateSlugNumber(urls)
       };
     }
};
