const craigslist = require('node-craigslist')

let client = new craigslist.Client({
  city : 'Sacramento'
})

client
  .list()
  .then((listings) => {
    // play with listings here...
    console.log(listings.length);
        // .forEach((listing) => console.log(listing));
  })
  .catch((err) => {
    console.error(err);
  })
