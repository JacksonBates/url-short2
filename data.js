var data = function( db, originalUrl ) {
  // var shortUrl;
  var urlObject = {
    originalUrl: 'nope',
    shortUrl: 'still nope'
  };
  var urls = db.collection( 'urls' );
  urls.find({
    originalUrl: originalUrl
  }).toArray(function( err, docs ) {
    if ( err ) {
      console.log( 'Error: Could not look up original url in db' );
    } else {
      if ( docs.length === 0 ) {
        if ( originalUrl[4] === 's' ) {
          urlObject = {
            originalUrl: originalUrl,
            shortUrl: 'https://smlr-url.herokuapp.com/' + linkGen()
          };
        } else {
          urlObject = {
            originalUrl: originalUrl,
            shortUrl: 'http://smlr-url.herokuapp.com/' + linkGen()
          };
        }
        urls.insert( urlObject );
        console.log( 'Else-if docs.l = 0 returns: ' +
          JSON.stringify( urlObject ) );
        return urlObject;
      } else if ( docs.length === 1 ) {
        urlObject = {
            originalUrl: docs[0].originalUrl,
            shortUrl: docs[0].shortUrl
          };
        console.log( 'Else-if docs.l = 1 returns: ' +
          JSON.stringify( urlObject ) );
        return urlObject; // this does not get passed back to routes.js
      }
    }
    console.log( 'This is the end of the array function: ' + urlObject );
    // return urlObject;
  });

};

function linkGen() {
  var slug = '';
  var slugArray = [];
  var chars = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
  'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

  var charIndex = 0;
  for (var i = 0; i < 4; i++) {
    charIndex = getRandomIntInclusive(0, chars.length - 1);
    slugArray.push(chars[charIndex]);
  }
  slug = slugArray.join('');
  return slug;
}

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = data;
